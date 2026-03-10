'use client'

import Link from 'next/link'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cart/cart-context'
import { formatCurrency } from '@/lib/utils/format'
import { Button } from '@/components/ui/button'
import { CartItemRow } from './cart-item-row'

export function CartContent() {
  const { items, totalItems, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex items-center justify-center size-16 rounded-full bg-surface mb-5">
          <ShoppingBag className="size-7 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-bold mb-1">Seu carrinho esta vazio</h2>
        <p className="text-sm text-muted-foreground mb-6">Explore nossos produtos e encontre algo que voce goste.</p>
        <Link
          href="/produtos"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background font-bold h-12 px-8 text-sm hover:bg-foreground/90 transition-colors"
        >
          Ver produtos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Items */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</p>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors"
          >
            Limpar carrinho
          </button>
        </div>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div key={`${item.productId}-${item.size}-${item.color.hex}`} className="py-5 first:pt-0 last:pb-0">
              <CartItemRow item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="lg:col-span-1">
        <div className="rounded-2xl bg-surface p-6 sticky top-20">
          <h2 className="text-sm font-bold mb-5">Resumo do pedido</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frete</span>
              <span className="font-semibold text-muted-foreground">
                {totalPrice >= 299 ? 'Gratis' : 'Calculado no checkout'}
              </span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between text-base">
              <span className="font-bold">Total</span>
              <span className="font-extrabold">{formatCurrency(totalPrice)}</span>
            </div>
          </div>
          <Button variant="dark" size="lg" className="w-full mt-6">
            Finalizar compra
          </Button>
          <Link
            href="/produtos"
            className="block text-center text-xs font-semibold text-muted-foreground hover:text-foreground mt-3 transition-colors"
          >
            Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  )
}
