import { ProductCard } from './product-card'
import type { Product } from '@/lib/types/product'

interface ProductGridProps {
  products: Product[]
  priorityCount?: number
}

export function ProductGrid({ products, priorityCount = 4 }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} priority={i < priorityCount} />
      ))}
    </div>
  )
}
