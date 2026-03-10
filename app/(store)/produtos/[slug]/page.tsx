import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/utils/format'
import { getProductBySlug, getAllProducts } from '@/lib/data/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discount = hasDiscount ? Math.round((1 - product.price / product.originalPrice!) * 100) : 0

  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div className="space-y-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src={img}
                    alt={`${product.name} - ${i + 2}`}
                    fill
                    sizes="12vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            {product.isNew && <Badge>Novo</Badge>}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{product.name}</h1>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-2xl font-bold">{formatCurrency(product.price)}</span>
            {hasDiscount && (
              <>
                <span className="text-base text-muted-foreground line-through">{formatCurrency(product.originalPrice!)}</span>
                <Badge variant="destructive">-{discount}%</Badge>
              </>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mt-6">{product.description}</p>

          {/* Colors */}
          {product.colors.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Cor</p>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.hex}
                    type="button"
                    className="h-8 w-8 rounded-full border-2 border-transparent hover:border-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Tamanho</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="h-10 min-w-[44px] px-3 rounded-lg border border-border text-sm font-medium hover:border-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to cart */}
          <div className="mt-10 flex gap-3">
            <Button size="lg" className="flex-1">Adicionar ao carrinho</Button>
          </div>

          {/* Info badges */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-xs font-medium">Frete grátis</p>
              <p className="text-xs text-muted mt-0.5">acima de R$ 299</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium">Troca fácil</p>
              <p className="text-xs text-muted mt-0.5">30 dias</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium">Parcelamento</p>
              <p className="text-xs text-muted mt-0.5">até 10x sem juros</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
