import Link from 'next/link'
import { ShoppingBag, Search, Menu } from 'lucide-react'
import { Container } from '@/components/ui/container'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <button type="button" className="lg:hidden -ml-1 p-2" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="font-display text-lg font-bold tracking-tight">
              Kazenami
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/produtos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Produtos
              </Link>
              <Link href="/produtos?category=corrida" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Corrida
              </Link>
              <Link href="/produtos?category=casual" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Casual
              </Link>
              <Link href="/produtos?category=trail" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Trail
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-1">
            <button type="button" className="p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Buscar">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/carrinho" className="relative p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Carrinho">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
