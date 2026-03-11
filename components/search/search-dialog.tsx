'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, X, Loader2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { formatCurrency } from '@/lib/utils/format'
import type { Product } from '@/lib/types/product'

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const close = useCallback(() => {
    setQuery('')
    setResults([])
    setSearched(false)
    onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  useEffect(() => {
    const q = query.trim()
    if (!q) {
      setResults([])
      setSearched(false)
      return
    }

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    const timeout = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, {
          signal: controller.signal,
        })
        if (res.ok) {
          const data = await res.json()
          setResults(data)
          setSearched(true)
        }
      } catch {
        // aborted or network error
      } finally {
        setLoading(false)
      }
    }, 250)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [query])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />

      {/* Panel */}
      <div className="relative bg-background border-b border-border shadow-lg">
        <Container>
          {/* Input */}
          <div className="flex items-center gap-3 h-14">
            {loading ? (
              <Loader2 className="h-5 w-5 text-muted-foreground shrink-0 animate-spin" />
            ) : (
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
            )}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="flex-1 bg-transparent text-sm font-medium placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="button"
              onClick={close}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Fechar busca"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </Container>

        {/* Results */}
        {query.trim() && searched && (
          <div className="border-t border-border max-h-[60vh] overflow-y-auto">
            <Container className="py-4">
              {results.length === 0 ? (
                <p className="text-sm text-muted-foreground py-6 text-center">
                  Nenhum produto encontrado para &quot;{query}&quot;
                </p>
              ) : (
                <div className="flex flex-col gap-1">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/produtos/${product.slug}`}
                      onClick={close}
                      className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-surface transition-colors"
                    >
                      {product.images[0] && (
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
                      </div>
                      <p className="text-sm font-bold shrink-0">{formatCurrency(product.price)}</p>
                    </Link>
                  ))}
                </div>
              )}
            </Container>
          </div>
        )}
      </div>
    </div>
  )
}
