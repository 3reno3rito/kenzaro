import { Suspense } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Sort } from '@/components/ui/sort'
import { ProductGrid } from '@/components/product/product-grid'
import { ProductGridSkeleton } from '@/components/product/product-card-skeleton'
import { getAllProducts, getProductsByCategory, getCategories } from '@/lib/data/products'
import type { Product } from '@/lib/types/product'

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; sort?: string }>
}

export const metadata = {
  title: 'Produtos',
  description: 'Explore nossa coleção completa de calçados.',
}

function sortProducts(products: Product[], sort?: string): Product[] {
  if (!sort) return products
  const sorted = [...products]
  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    default:
      return sorted
  }
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, sort } = await searchParams
  const categories = await getCategories()

  return (
    <Container className="py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Todos os Produtos'}
      </h1>

      {/* Category filters + sort */}
      <div className="flex items-center mb-8 border-b border-border">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          <CategoryPill href="/produtos" active={!category}>Todos</CategoryPill>
          {categories.map((cat) => (
            <CategoryPill key={cat} href={`/produtos?category=${cat}`} active={category === cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </CategoryPill>
          ))}
        </div>
        <div className="ml-auto pl-6 shrink-0 pb-2.5">
          <Sort />
        </div>
      </div>

      <Suspense fallback={<ProductGridSkeleton count={8} />}>
        <FilteredProducts category={category} sort={sort} />
      </Suspense>
    </Container>
  )
}

async function FilteredProducts({ category, sort }: { category?: string; sort?: string }) {
  const products = category ? await getProductsByCategory(category) : await getAllProducts()
  return <ProductGrid products={sortProducts(products, sort)} />
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
