'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const options = [
  { value: '', label: 'Relevância' },
  { value: 'price-asc', label: 'Menor preço' },
  { value: 'price-desc', label: 'Maior preço' },
  { value: 'name-asc', label: 'A — Z' },
  { value: 'name-desc', label: 'Z — A' },
]

export function Sort() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const current = searchParams.get('sort') ?? ''
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const currentLabel = options.find((o) => o.value === current)?.label ?? 'Relevância'

  const select = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set('sort', value)
      } else {
        params.delete('sort')
      }
      router.push(`/produtos?${params.toString()}`, { scroll: false })
      setOpen(false)
    },
    [router, searchParams],
  )

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {currentLabel}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-xl border border-border bg-background shadow-lg px-1 py-1.5 flex flex-col gap-0.5"
          role="listbox"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={current === opt.value}
              onClick={() => select(opt.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                current === opt.value
                  ? 'font-bold text-foreground bg-surface'
                  : 'font-medium text-muted-foreground hover:text-foreground hover:bg-surface'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
