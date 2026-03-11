'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { useCart } from '@/lib/cart/cart-context'
import { SearchDialog } from '@/components/search/search-dialog'

const navLinks = [
  { href: '/produtos', label: 'Loja', match: '/produtos' },
  { href: '/sobre', label: 'Sobre', match: '/sobre' },
  { href: '/contato', label: 'Contato', match: '/contato' },
]

export function Header() {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  function isActive(link: (typeof navLinks)[number]) {
    return pathname === link.match || pathname.startsWith(`${link.match}/`)
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md">
        <Container>
          <div className="flex h-14 items-center justify-between">
            {/* Left — logo */}
            <div className="flex items-center gap-6">
              <button type="button" className="lg:hidden p-1.5" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={toggleMenu}>
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <Link href="/" className="text-xl font-extrabold tracking-tight" onClick={closeMenu}>
                kenzaro
              </Link>
            </div>

            {/* Center — nav (desktop) */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-lg text-[15px] font-extrabold transition-colors ${
                    isActive(link)
                      ? 'text-primary'
                      : 'text-foreground hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right — actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link href="/carrinho" className="relative p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors" aria-label="Carrinho" onClick={closeMenu}>
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center h-4.5 min-w-4.5 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold leading-none">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </Container>
        <div className="h-px bg-border" />

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden absolute inset-x-0 top-full z-50 border-b border-border bg-background">
            <Container className="py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 rounded-xl text-[15px] font-extrabold transition-colors ${
                    isActive(link)
                      ? 'text-primary bg-surface'
                      : 'text-foreground hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </nav>
        )}
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
