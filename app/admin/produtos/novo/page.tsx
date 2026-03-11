import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { ProductForm } from '@/components/admin/product-form'

export default function NovoProdutoPage() {
  return (
    <>
      <Link
        href="/admin/produtos"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ChevronLeft className="h-4 w-4" />
        Produtos
      </Link>
      <h1 className="text-2xl font-extrabold tracking-tight mb-6">Novo produto</h1>
      <ProductForm />
    </>
  )
}
