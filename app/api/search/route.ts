import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { ensureTable, toProduct } from '@/lib/db-helpers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')?.trim()

  if (!q) return NextResponse.json([])

  await ensureTable()

  const rows = await sql`
    SELECT * FROM products
    WHERE
      name ILIKE ${'%' + q + '%'}
      OR category ILIKE ${'%' + q + '%'}
      OR description ILIKE ${'%' + q + '%'}
    ORDER BY created_at DESC
    LIMIT 10
  `

  return NextResponse.json(rows.map(toProduct))
}
