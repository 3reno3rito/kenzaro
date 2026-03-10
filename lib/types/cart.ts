export interface CartItem {
  productId: string
  slug: string
  name: string
  brand: string
  image: string
  price: number
  color: { name: string; hex: string }
  size: number
  quantity: number
}
