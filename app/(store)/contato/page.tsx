import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Kenzaro.',
}

export default function ContatoPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Contato</h1>
        <p className="text-sm text-muted-foreground mb-10">Tem alguma duvida? Envie uma mensagem e responderemos o mais rapido possivel.</p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-1.5">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full h-10 px-4 rounded-xl border border-input bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-shadow"
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
              className="w-full h-10 px-4 rounded-xl border border-input bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-shadow"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-bold mb-1.5">Assunto</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full h-10 px-4 rounded-xl border border-input bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-shadow"
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
              className="w-full px-4 py-3 rounded-xl border border-input bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-shadow resize-none"
              placeholder="Escreva sua mensagem..."
            />
          </div>
          <Button type="submit" size="lg" variant="dark">Enviar mensagem</Button>
        </form>
      </div>

      {/* Info */}
      <div className="mt-16 pt-10 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-surface p-5">
          <p className="text-sm font-bold mb-1">Email</p>
          <p className="text-sm text-muted-foreground">contato@kenzaro.com.br</p>
        </div>
        <div className="rounded-2xl bg-surface p-5">
          <p className="text-sm font-bold mb-1">Horario</p>
          <p className="text-sm text-muted-foreground">Seg a Sex, 9h as 18h</p>
        </div>
        <div className="rounded-2xl bg-surface p-5">
          <p className="text-sm font-bold mb-1">Resposta</p>
          <p className="text-sm text-muted-foreground">Ate 24h uteis</p>
        </div>
      </div>
    </Container>
  )
}
