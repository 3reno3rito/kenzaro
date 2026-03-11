import Link from 'next/link'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { getAllProducts } from '@/lib/data/products'
import { formatCurrency } from '@/lib/utils/format'
import { Badge } from '@/components/ui/badge'

export default async function AdminProdutosPage() {
  const products = await getAllProducts()

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Produtos</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{products.length} produtos cadastrados</p>
        </div>
        <Link
          href="/admin/produtos/novo"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background font-bold h-10 px-5 text-sm hover:bg-foreground/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Novo produto
        </Link>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/50">
                <th className="text-left font-semibold px-4 py-3">Produto</th>
                <th className="text-left font-semibold px-4 py-3">Categoria</th>
                <th className="text-left font-semibold px-4 py-3">Preço</th>
                <th className="text-left font-semibold px-4 py-3">Status</th>
                <th className="text-right font-semibold px-4 py-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border last:border-0 hover:bg-surface/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-surface">
                        {product.images[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-xs text-muted-foreground">—</div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="capitalize text-muted-foreground">{product.category}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <span className="font-semibold">{formatCurrency(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through ml-2">
                          {formatCurrency(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      {product.isNew && <Badge variant="default">Novo</Badge>}
                      {product.isFeatured && <Badge variant="secondary">Destaque</Badge>}
                      {!product.isNew && !product.isFeatured && (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/produtos/${product.id}`}
                      className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
