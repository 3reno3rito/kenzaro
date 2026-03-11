import sql from '@/lib/db'
import { ensureTable, toProduct } from '@/lib/db-helpers'
import type { Product } from '@/lib/types/product'

export async function getAllProducts(): Promise<Product[]> {
  await ensureTable()
  const rows = await sql`SELECT * FROM products ORDER BY created_at DESC`
  return rows.map(toProduct)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await ensureTable()
  const rows = await sql`SELECT * FROM products WHERE is_featured = true ORDER BY created_at DESC`
  return rows.map(toProduct)
}

export async function getNewProducts(): Promise<Product[]> {
  await ensureTable()
  const rows = await sql`SELECT * FROM products WHERE is_new = true ORDER BY created_at DESC`
  return rows.map(toProduct)
}

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

export async function getProductsByCategory(category: string): Promise<Product[]> {
  await ensureTable()
  const rows = await sql`SELECT * FROM products WHERE category = ${category} ORDER BY created_at DESC`
  return rows.map(toProduct)
}

export async function getCategories(): Promise<string[]> {
  await ensureTable()
  const rows = await sql`SELECT DISTINCT category FROM products ORDER BY category`
  return rows.map((r) => r.category as string)
}
