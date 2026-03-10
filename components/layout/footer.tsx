import Link from 'next/link'
import { Container } from '@/components/ui/container'

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="text-sm font-semibold mb-4">Produtos</p>
            <ul className="space-y-2.5">
              <li><Link href="/produtos?category=corrida" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Corrida</Link></li>
              <li><Link href="/produtos?category=casual" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Casual</Link></li>
              <li><Link href="/produtos?category=trail" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trail</Link></li>
              <li><Link href="/produtos?category=treino" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Treino</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4">Empresa</p>
            <ul className="space-y-2.5">
              <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4">Ajuda</p>
            <ul className="space-y-2.5">
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/trocas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trocas</Link></li>
              <li><Link href="/frete" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Frete</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4">Legal</p>
            <ul className="space-y-2.5">
              <li><Link href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Kazenami. Todos os direitos reservados.</p>
          <p className="text-xs text-muted">Feito no Brasil</p>
        </div>
      </Container>
    </footer>
  )
}
