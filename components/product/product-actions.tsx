'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart/cart-context'
import { useToast } from '@/components/ui/toast'
import type { ProductColor } from '@/lib/types/product'

interface ProductActionsProps {
  productId: string
  slug: string
  name: string
  brand: string
  image: string
  price: number
  colors: ProductColor[]
  sizes: number[]
}

export function ProductActions({ productId, slug, name, brand, image, price, colors, sizes }: ProductActionsProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(colors[0]?.hex ?? null)
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { show } = useToast()

  const canAdd = selectedSize !== null
  const selectedColorObj = colors.find((c) => c.hex === selectedColor)

  function decrement() {
    setQuantity((q) => Math.max(1, q - 1))
  }

  function increment() {
    setQuantity((q) => Math.min(10, q + 1))
  }

  function handleAddToCart() {
    if (!selectedSize || !selectedColorObj) return
    addItem({
      productId,
      slug,
      name,
      brand,
      image,
      price,
      color: selectedColorObj,
      size: selectedSize,
      quantity,
    })
    show(`${name} adicionado ao carrinho`)
    setQuantity(1)
  }

  return (
    <>
      {/* Colors */}
      {colors.length > 0 && (
        <div className="mt-8">
          <p className="text-sm font-bold mb-3">
            Cor{selectedColorObj && <span className="font-medium text-muted-foreground ml-2">— {selectedColorObj.name}</span>}
          </p>
          <div className="flex items-center gap-2.5">
            {colors.map((color) => (
              <button
                key={color.hex}
                type="button"
                onClick={() => setSelectedColor(color.hex)}
                className={cn(
                  'h-8 w-8 rounded-full ring-1 transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  selectedColor === color.hex
                    ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background'
                    : 'ring-border hover:ring-foreground',
                )}
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
                aria-pressed={selectedColor === color.hex}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sizes */}
      {sizes.length > 0 && (
        <div className="mt-8">
          <p className="text-sm font-bold mb-3">
            Tamanho{!selectedSize && <span className="font-medium text-primary ml-2">— selecione</span>}
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={cn(
                  'h-12 min-w-[48px] px-4 rounded-xl border text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  selectedSize === size
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border hover:border-foreground hover:bg-surface',
                )}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add to cart */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex items-center rounded-full border border-border">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className="flex items-center justify-center h-12 w-12 rounded-l-full text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            aria-label="Diminuir quantidade"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm font-bold tabular-nums">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 10}
            className="flex items-center justify-center h-12 w-12 rounded-r-full text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            aria-label="Aumentar quantidade"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button
          size="lg"
          variant="dark"
          disabled={!canAdd}
          className="flex-1 gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-4 w-4" />
          {canAdd ? 'Adicionar ao carrinho' : 'Selecione um tamanho'}
        </Button>
      </div>
    </>
  )
}
