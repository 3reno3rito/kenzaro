import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { ProductActions } from '@/components/product/product-actions'
import { formatCurrency } from '@/lib/utils/format'
import { getProductBySlug } from '@/lib/data/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discount = hasDiscount ? Math.round((1 - product.price / product.originalPrice!) * 100) : 0

  return (
    <Container className="py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Images */}
        <div className="space-y-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-surface">
            {product.images[0]?.startsWith('http') && (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-surface">
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
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            {product.isNew && <Badge variant="default">Novo</Badge>}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{product.name}</h1>

          <div className="flex items-baseline gap-3 mt-3">
            <span className="text-2xl font-extrabold">{formatCurrency(product.price)}</span>
            {hasDiscount && (
              <>
                <span className="text-base text-muted-foreground line-through">{formatCurrency(product.originalPrice!)}</span>
                <Badge variant="destructive">-{discount}%</Badge>
              </>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mt-5">{product.description}</p>

          {/* Interactive: color, size, quantity, add to cart */}
          <ProductActions
            productId={product.id}
            slug={product.slug}
            name={product.name}
            brand={product.brand}
            image={product.images[0]}
            price={product.price}
            colors={product.colors}
            sizes={product.sizes}
          />

          {/* Info badges */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="text-center rounded-2xl bg-surface p-3">
              <p className="text-xs font-bold">Frete grátis</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">acima de R$ 299</p>
            </div>
            <div className="text-center rounded-2xl bg-surface p-3">
              <p className="text-xs font-bold">Troca fácil</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">30 dias</p>
            </div>
            <div className="text-center rounded-2xl bg-surface p-3">
              <p className="text-xs font-bold">Parcelamento</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">até 10x sem juros</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
