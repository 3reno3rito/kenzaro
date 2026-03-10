import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { formatCurrency } from '@/lib/utils/format'
import { Badge } from '@/components/ui/badge'
import type { Product } from '@/lib/types/product'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discount = hasDiscount ? Math.round((1 - product.price / product.originalPrice!) * 100) : 0

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {hasDiscount && (
          <Badge variant="destructive" className="absolute top-3 left-3">
            -{discount}%
          </Badge>
        )}
        {product.isNew && (
          <Badge className="absolute top-3 right-3">Novo</Badge>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-xs text-muted-foreground">{product.brand}</p>
        <h3 className="text-sm font-medium leading-snug group-hover:underline underline-offset-2 decoration-muted/40">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold">{formatCurrency(product.price)}</span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through">{formatCurrency(product.originalPrice!)}</span>
          )}
        </div>
        {product.colors.length > 1 && (
          <p className="text-xs text-muted">{product.colors.length} cores</p>
        )}
      </div>
    </Link>
  )
}
