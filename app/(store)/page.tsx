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
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <Container className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-sm font-medium text-muted mb-4 tracking-wide uppercase">Nova Coleção 2026</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Cada passo,{' '}
              <span className="text-muted">uma onda.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
              Calçados que combinam performance de ponta com design que você quer usar todos os dias.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/produtos">Ver coleção</Link>
              </Button>
              <Link href="/produtos?category=corrida" className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-background transition-colors">
                Corrida
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/60 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Destaques</h2>
              <p className="text-sm text-muted-foreground mt-1">Os mais procurados da temporada</p>
            </div>
            <Link href="/produtos" className="group hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Ver todos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <Suspense fallback={<ProductGridSkeleton count={4} />}>
            <FeaturedProducts />
          </Suspense>
        </Container>
      </section>

      {/* Category Banner */}
      <section className="py-4">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/produtos?category=corrida" className="group relative aspect-[2/1] overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=400&fit=crop&q=80"
                alt="Corrida"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white text-xl font-bold">Corrida</p>
                <p className="text-white/70 text-sm mt-0.5">Performance sem limites</p>
              </div>
            </Link>
            <Link href="/produtos?category=casual" className="group relative aspect-[2/1] overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=400&fit=crop&q=80"
                alt="Casual"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white text-xl font-bold">Casual</p>
                <p className="text-white/70 text-sm mt-0.5">Estilo para todo dia</p>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Novidades</h2>
              <p className="text-sm text-muted-foreground mt-1">Recém-chegados na loja</p>
            </div>
          </div>
          <Suspense fallback={<ProductGridSkeleton count={4} />}>
            <NewProducts />
          </Suspense>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 border-t border-border">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-xl font-bold">Fique por dentro</h2>
            <p className="text-sm text-muted-foreground mt-2">Receba novidades e ofertas exclusivas.</p>
            <form className="mt-6 flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                required
                className="flex-1 h-10 px-4 rounded-full border border-border bg-surface text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <Button type="submit" size="md">Inscrever</Button>
            </form>
          </div>
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
