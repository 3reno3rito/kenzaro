import Link from 'next/link'
import { Package } from 'lucide-react'
import { getAllProducts } from '@/lib/data/products'

export default async function AdminPage() {
  const products = await getAllProducts()

  return (
    <>
      <h1 className="text-2xl font-extrabold tracking-tight mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/admin/produtos" className="rounded-2xl border border-border p-5 hover:bg-surface transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center size-9 rounded-full bg-surface">
              <Package className="size-4" />
            </div>
            <p className="text-sm font-bold">Produtos</p>
          </div>
          <p className="text-3xl font-extrabold">{products.length}</p>
          <p className="text-xs text-muted-foreground mt-0.5">cadastrados</p>
        </Link>
      </div>
    </>
  )
}
