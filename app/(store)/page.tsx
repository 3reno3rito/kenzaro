import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/product/product-grid'
import { ProductGridSkeleton } from '@/components/product/product-card-skeleton'
import { getFeaturedProducts, getNewProducts } from '@/lib/data/products'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <Container className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-lg">
            <span className="inline-flex items-center rounded-full bg-foreground/10 px-3 py-1 text-xs font-bold mb-4">
              Nova Coleção 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Cada passo,<br />uma onda.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Performance de ponta com design que você quer usar todos os dias.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button size="lg" variant="dark">
                <Link href="/produtos">Ver coleção</Link>
              </Button>
              <Link
                href="/produtos?category=corrida"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-muted-foreground transition-colors"
              >
                Corrida
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Destaques</h2>
            <Link href="/produtos" className="group hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
              Ver todos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <Suspense fallback={<ProductGridSkeleton count={4} />}>
            <FeaturedProducts />
          </Suspense>
        </Container>
      </section>

      {/* Category Banners */}
      <section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/produtos?category=corrida" className="group relative overflow-hidden rounded-3xl bg-surface p-8 sm:p-10">
              <p className="text-2xl font-extrabold">Corrida</p>
              <p className="text-sm text-muted-foreground mt-1">Performance sem limites</p>
              <ArrowRight className="h-5 w-5 mt-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/produtos?category=casual" className="group relative overflow-hidden rounded-3xl bg-surface p-8 sm:p-10">
              <p className="text-2xl font-extrabold">Casual</p>
              <p className="text-sm text-muted-foreground mt-1">Estilo para todo dia</p>
              <ArrowRight className="h-5 w-5 mt-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="py-8 sm:py-12">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">Novidades</h2>
          <Suspense fallback={<ProductGridSkeleton count={4} />}>
            <NewProducts />
          </Suspense>
        </Container>
      </section>
    </>
  )
}

async function FeaturedProducts() {
  const products = await getFeaturedProducts()
  if (products.length === 0) {
    return <p className="text-sm text-muted-foreground py-8 text-center">Nenhum produto em destaque ainda.</p>
  }
  return <ProductGrid products={products} priorityCount={4} />
}

async function NewProducts() {
  const products = await getNewProducts()
  if (products.length === 0) {
    return <p className="text-sm text-muted-foreground py-8 text-center">Nenhuma novidade ainda.</p>
  }
  return <ProductGrid products={products} priorityCount={0} />
}
