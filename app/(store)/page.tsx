import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/product/product-grid'
import { ProductGridSkeleton } from '@/components/product/product-card-skeleton'
import { getFeaturedProducts, getNewProducts } from '@/lib/data/products'

export default function HomePage() {
  return (
    <>
      {/* Hero — bold, full-bleed */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-12 sm:pb-16">
          <div className="max-w-lg animate-fade-in-up">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white mb-4">
              Nova Colecao 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Cada passo,<br />uma onda.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-sm">
              Performance de ponta com design que voce quer usar todos os dias.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button size="lg" variant="dark" className="bg-white text-black hover:bg-white/90">
                <Link href="/produtos">Ver colecao</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/produtos?category=corrida" className="flex items-center gap-2">
                  Corrida
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-14 sm:py-20">
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
            <Link href="/produtos?category=corrida" className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=600&fit=crop&q=80"
                alt="Corrida"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <p className="text-2xl font-extrabold text-white">Corrida</p>
                <p className="text-sm text-white/50 mt-0.5">Performance sem limites</p>
              </div>
            </Link>
            <Link href="/produtos?category=casual" className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=600&fit=crop&q=80"
                alt="Casual"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <p className="text-2xl font-extrabold text-white">Casual</p>
                <p className="text-sm text-white/50 mt-0.5">Estilo para todo dia</p>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="py-14 sm:py-20">
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
  const products = getFeaturedProducts()
  return <ProductGrid products={products} priorityCount={4} />
}

async function NewProducts() {
  const products = getNewProducts()
  return <ProductGrid products={products} priorityCount={0} />
}
