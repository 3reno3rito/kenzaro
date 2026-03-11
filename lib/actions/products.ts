'use server'

import { revalidateTag } from 'next/cache'
import sql from '@/lib/db'
import { ensureTable } from '@/lib/db-helpers'
import cloudinary, { extractPublicId } from '@/lib/cloudinary'

interface ProductInput {
  slug: string
  name: string
  brand: string
  description: string
  price: number
  originalPrice?: number | null
  images: string[]
  colors: { name: string; hex: string }[]
  sizes: number[]
  category: string
  isNew: boolean
  isFeatured: boolean
}

export async function createProduct(input: ProductInput) {
  await ensureTable()

  const rows = await sql`
    INSERT INTO products (slug, name, brand, description, price, original_price, images, colors, sizes, category, is_new, is_featured)
    VALUES (
      ${input.slug},
      ${input.name},
      ${input.brand},
      ${input.description},
      ${input.price},
      ${input.originalPrice ?? null},
      ${JSON.stringify(input.images)},
      ${JSON.stringify(input.colors)},
      ${JSON.stringify(input.sizes)},
      ${input.category},
      ${input.isNew},
      ${input.isFeatured}
    )
    RETURNING id
  `

  revalidateTag('products', 'max')
  return { id: rows[0].id as number }
}

export async function updateProduct(id: string, input: ProductInput) {
  await ensureTable()

  await sql`
    UPDATE products SET
      slug = ${input.slug},
      name = ${input.name},
      brand = ${input.brand},
      description = ${input.description},
      price = ${input.price},
      original_price = ${input.originalPrice ?? null},
      images = ${JSON.stringify(input.images)},
      colors = ${JSON.stringify(input.colors)},
      sizes = ${JSON.stringify(input.sizes)},
      category = ${input.category},
      is_new = ${input.isNew},
      is_featured = ${input.isFeatured}
    WHERE id = ${Number(id)}
  `

  revalidateTag('products', 'max')
}

export async function deleteProduct(id: string) {
  await ensureTable()

  const rows = await sql`SELECT images FROM products WHERE id = ${Number(id)}`
  if (rows[0]) {
    const images = rows[0].images as string[]
    const publicIds = images.map(extractPublicId).filter(Boolean) as string[]
    if (publicIds.length > 0) {
      await Promise.all(publicIds.map((pid) => cloudinary.uploader.destroy(pid)))
    }
  }

  await sql`DELETE FROM products WHERE id = ${Number(id)}`
  revalidateTag('products', 'max')
}
