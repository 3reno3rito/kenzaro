import { Suspense } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ProductGrid } from '@/components/product/product-grid'
import { ProductGridSkeleton } from '@/components/product/product-card-skeleton'
import { getAllProducts, getCategories } from '@/lib/data/products'

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

export const metadata = {
  title: 'Produtos',
  description: 'Explore nossa coleção completa de calçados.',
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams
  const categories = getCategories()

  return (
    <Container className="py-10">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Todos os Produtos'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Encontre o calçado perfeito para você
        </p>
      </div>

      {/* Category filters */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
        <CategoryPill href="/produtos" active={!category}>Todos</CategoryPill>
        {categories.map((cat) => (
          <CategoryPill key={cat} href={`/produtos?category=${cat}`} active={category === cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </CategoryPill>
        ))}
      </div>

      <Suspense fallback={<ProductGridSkeleton count={8} />}>
        <FilteredProducts category={category} />
      </Suspense>
    </Container>
  )
}

async function FilteredProducts({ category }: { category?: string }) {
  const all = getAllProducts()
  const products = category ? all.filter((p) => p.category === category) : all
  return <ProductGrid products={products} />
}

function CategoryPill({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
        active
          ? 'bg-foreground border-foreground text-background'
          : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
      }`}
    >
      {children}
    </Link>
  )
}
