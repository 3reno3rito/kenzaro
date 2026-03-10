'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { CartItem } from '@/lib/types/cart'

interface CartContextValue {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size: number, colorHex: string) => void
  updateQuantity: (productId: string, size: number, colorHex: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'kenzaro-cart'

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // storage full or unavailable
  }
}

function itemKey(item: { productId: string; size: number; color: { hex: string } }) {
  return `${item.productId}-${item.size}-${item.color.hex}`
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setItems(loadCart())
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) saveCart(items)
  }, [items, loaded])

  const addItem = useCallback((newItem: CartItem) => {
    setItems((prev) => {
      const key = itemKey(newItem)
      const existing = prev.find((i) => itemKey(i) === key)
      if (existing) {
        return prev.map((i) =>
          itemKey(i) === key
            ? { ...i, quantity: Math.min(10, i.quantity + newItem.quantity) }
            : i,
        )
      }
      return [...prev, newItem]
    })
  }, [])

  const removeItem = useCallback((productId: string, size: number, colorHex: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.size === size && i.color.hex === colorHex)),
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: string, size: number, colorHex: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(productId, size, colorHex)
        return
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId && i.size === size && i.color.hex === colorHex
            ? { ...i, quantity: Math.min(10, quantity) }
            : i,
        ),
      )
    },
    [removeItem],
  )

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
