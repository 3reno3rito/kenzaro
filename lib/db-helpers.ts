import sql from '@/lib/db'
import type { Product, ProductColor } from '@/lib/types/product'

let migrated = false

export async function ensureTable() {
  if (migrated) return
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      brand VARCHAR(255) DEFAULT 'Kenzaro',
      description TEXT DEFAULT '',
      price NUMERIC(10,2) NOT NULL,
      original_price NUMERIC(10,2),
      images JSONB NOT NULL DEFAULT '[]',
      colors JSONB NOT NULL DEFAULT '[]',
      sizes JSONB NOT NULL DEFAULT '[]',
      category VARCHAR(100) NOT NULL,
      is_new BOOLEAN NOT NULL DEFAULT false,
      is_featured BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug)`
  await sql`CREATE INDEX IF NOT EXISTS idx_products_category ON products(category)`
  await sql`CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true`
  await sql`CREATE INDEX IF NOT EXISTS idx_products_new ON products(is_new) WHERE is_new = true`
  migrated = true
}

export function toProduct(row: Record<string, unknown>): Product {
  return {
    id: String(row.id),
    slug: row.slug as string,
    name: row.name as string,
    brand: (row.brand as string) || 'Kenzaro',
    description: (row.description as string) || '',
    price: Number(row.price),
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    images: row.images as string[],
    colors: row.colors as ProductColor[],
    sizes: row.sizes as number[],
    category: row.category as string,
    isNew: row.is_new === true,
    isFeatured: row.is_featured === true,
  }
}
