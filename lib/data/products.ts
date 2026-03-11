import { unstable_cache } from 'next/cache'
import sql from '@/lib/db'
import { ensureTable, toProduct } from '@/lib/db-helpers'
import type { Product } from '@/lib/types/product'

export const getAllProducts = unstable_cache(
  async (): Promise<Product[]> => {
    await ensureTable()
    const rows = await sql`SELECT * FROM products ORDER BY created_at DESC`
    return rows.map(toProduct)
  },
  ['all-products'],
  { tags: ['products'], revalidate: 3600 },
)

export const getFeaturedProducts = unstable_cache(
  async (): Promise<Product[]> => {
    await ensureTable()
    const rows = await sql`SELECT * FROM products WHERE is_featured = true ORDER BY created_at DESC`
    return rows.map(toProduct)
  },
  ['featured-products'],
  { tags: ['products'], revalidate: 3600 },
)

export const getNewProducts = unstable_cache(
  async (): Promise<Product[]> => {
    await ensureTable()
    const rows = await sql`SELECT * FROM products WHERE is_new = true ORDER BY created_at DESC`
    return rows.map(toProduct)
  },
  ['new-products'],
  { tags: ['products'], revalidate: 3600 },
)

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  await ensureTable()
  const rows = await sql`SELECT * FROM products WHERE slug = ${slug} LIMIT 1`
  return rows[0] ? toProduct(rows[0]) : undefined
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await ensureTable()
  const rows = await sql`SELECT * FROM products WHERE id = ${Number(id)} LIMIT 1`
  return rows[0] ? toProduct(rows[0]) : undefined
}

export const getCategories = unstable_cache(
  async (): Promise<string[]> => {
    await ensureTable()
    const rows = await sql`SELECT DISTINCT category FROM products ORDER BY category`
    return rows.map((r) => r.category as string)
  },
  ['categories'],
  { tags: ['products'], revalidate: 3600 },
)
