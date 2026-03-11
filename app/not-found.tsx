import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-7xl sm:text-8xl font-extrabold tracking-tighter">404</p>
      <h1 className="text-lg font-bold mt-3 mb-1">Página não encontrada</h1>
      <p className="text-sm text-muted-foreground mb-8 max-w-xs">
        O endereço que você acessou não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background font-bold h-12 px-8 text-sm hover:bg-foreground/90 transition-colors"
      >
        Voltar ao início
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
