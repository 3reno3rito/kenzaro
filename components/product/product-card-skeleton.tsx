import { Skeleton } from '@/components/ui/skeleton'

export function ProductCardSkeleton() {
  return (
    <div>
      <Skeleton className="aspect-[3/4] rounded-2xl" />
      <div className="mt-3 space-y-1.5">
        <Skeleton className="h-3 w-14 rounded-full" />
        <Skeleton className="h-4 w-28 rounded-full" />
        <Skeleton className="h-3.5 w-20 rounded-full" />
      </div>
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}
