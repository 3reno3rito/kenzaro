'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart/cart-context'
import { formatCurrency } from '@/lib/utils/format'
import type { CartItem } from '@/lib/types/cart'

interface CartItemRowProps {
  item: CartItem
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex gap-4">
      {/* Image */}
      <Link href={`/produtos/${item.slug}`} className="shrink-0">
        <div className="relative h-28 w-22 sm:h-32 sm:w-24 overflow-hidden rounded-xl bg-surface">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div>
          <p className="text-xs text-muted-foreground">{item.brand}</p>
          <Link href={`/produtos/${item.slug}`} className="text-sm font-semibold hover:underline underline-offset-4">
            {item.name}
          </Link>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-border"
                style={{ backgroundColor: item.color.hex }}
              />
              <span className="text-xs text-muted-foreground">{item.color.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">Tam {item.size}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Quantity */}
          <div className="flex items-center rounded-full border border-border">
            <button
              type="button"
              onClick={() => updateQuantity(item.productId, item.size, item.color.hex, item.quantity - 1)}
              className="flex items-center justify-center h-8 w-8 rounded-l-full text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Diminuir quantidade"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-7 text-center text-xs font-bold tabular-nums">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.productId, item.size, item.color.hex, item.quantity + 1)}
              disabled={item.quantity >= 10}
              className="flex items-center justify-center h-8 w-8 rounded-r-full text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              aria-label="Aumentar quantidade"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">{formatCurrency(item.price * item.quantity)}</span>
            <button
              type="button"
              onClick={() => removeItem(item.productId, item.size, item.color.hex)}
              className="p-1.5 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              aria-label="Remover item"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
