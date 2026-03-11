import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { ProductForm } from '@/components/admin/product-form'
import { getProductById } from '@/lib/data/products'

interface EditProductPageProps {
  params: Promise<{ id: string }>
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params
  const product = await getProductById(id)
  if (!product) notFound()

  return (
    <>
      <Link
        href="/admin/produtos"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ChevronLeft className="h-4 w-4" />
        Produtos
      </Link>
      <h1 className="text-2xl font-extrabold tracking-tight mb-6">Editar {product.name}</h1>
      <ProductForm product={product} />
    </>
  )
}
