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
  description: 'Explore nossa colecao completa de calcados.',
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams
  const categories = getCategories()

  return (
    <Container className="py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Todos os Produtos'}
      </h1>

      {/* Category filters — pill style */}
      <div className="flex items-center gap-6 mb-8 overflow-x-auto border-b border-border no-scrollbar">
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
      className={`pb-2.5 text-[13px] whitespace-nowrap border-b-2 -mb-px transition-colors ${
        active
          ? 'font-semibold text-foreground border-foreground'
          : 'font-medium text-muted-foreground border-transparent hover:text-foreground'
      }`}
    >
      {children}
    </Link>
  )
}
