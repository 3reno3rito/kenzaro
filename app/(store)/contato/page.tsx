import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Kenzaro.',
}

const inputClass =
  'w-full h-12 px-4 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors'

export default function ContatoPage() {
  return (
    <Container className="py-8 sm:py-12">
      <div className="max-w-xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Envie uma mensagem</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Preencha o formulário ou consulte nossa <Link href="/ajuda" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors">página de ajuda</Link>.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-1.5">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-1.5">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-bold mb-1.5">Assunto</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className={inputClass}
              placeholder="Como podemos ajudar?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-1.5">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Escreva sua mensagem..."
            />
          </div>
          <Button type="submit" size="lg" variant="dark">Enviar mensagem</Button>
        </form>
      </div>
    </Container>
  )
}
