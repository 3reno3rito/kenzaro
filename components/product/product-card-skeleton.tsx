import { Skeleton } from '@/components/ui/skeleton'

export function ProductCardSkeleton() {
  return (
    <div>
      <Skeleton className="aspect-[4/5] rounded-2xl" />
      <div className="mt-3 space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}
