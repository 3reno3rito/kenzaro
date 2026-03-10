export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  colors: ProductColor[]
  sizes: number[]
  category: string
  isNew?: boolean
  isFeatured?: boolean
}

export interface ProductColor {
  name: string
  hex: string
}
