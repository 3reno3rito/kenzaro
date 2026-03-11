import Link from 'next/link'
import { Container } from '@/components/ui/container'

export const metadata = {
  title: 'Ajuda',
  description: 'Encontre respostas para as dúvidas mais comuns sobre pedidos, entregas, trocas e pagamentos.',
}

const sections = [
  {
    title: 'Pedidos',
    items: [
      {
        q: 'Como acompanho meu pedido?',
        a: 'Após o despacho, você receberá um email com o código de rastreamento. Use-o no site da transportadora para acompanhar a entrega em tempo real.',
      },
      {
        q: 'Posso cancelar um pedido?',
        a: 'Sim, desde que ele ainda não tenha sido despachado. Entre em contato pelo email contato@kenzaro.com.br o mais rápido possível.',
      },
      {
        q: 'Posso alterar o endereço de entrega?',
        a: 'Alterações de endereço são possíveis antes do despacho. Envie um email com o número do pedido e o novo endereço.',
      },
    ],
  },
  {
    title: 'Entregas',
    items: [
      {
        q: 'Qual o prazo de entrega?',
        a: 'O prazo varia conforme a região, geralmente entre 3 e 10 dias úteis após a confirmação do pagamento.',
      },
      {
        q: 'O frete é grátis?',
        a: 'Sim, para compras acima de R$ 299. Abaixo desse valor, o frete é calculado no checkout conforme o CEP.',
      },
      {
        q: 'Vocês entregam em todo o Brasil?',
        a: 'Sim, entregamos para todos os estados brasileiros.',
      },
    ],
  },
  {
    title: 'Trocas e devoluções',
    items: [
      {
        q: 'Como faço uma troca?',
        a: 'Envie um email para contato@kenzaro.com.br com o número do pedido e o motivo da troca. Responderemos em até 24h úteis com as instruções.',
      },
      {
        q: 'Qual o prazo para trocar ou devolver?',
        a: 'Você tem até 7 dias corridos após o recebimento para solicitar a devolução (direito de arrependimento) e até 30 dias para produtos com defeito.',
      },
      {
        q: 'Quem paga o frete da devolução?',
        a: 'Em caso de arrependimento ou defeito, o frete de devolução é por conta da Kenzaro.',
      },
    ],
  },
  {
    title: 'Pagamentos',
    items: [
      {
        q: 'Quais formas de pagamento são aceitas?',
        a: 'Cartão de crédito (até 10x sem juros), Pix e boleto bancário.',
      },
      {
        q: 'O pagamento é seguro?',
        a: 'Sim. Todos os pagamentos são processados por plataformas certificadas com criptografia SSL. Não armazenamos dados de cartão.',
      },
      {
        q: 'Quando o Pix é confirmado?',
        a: 'O pagamento via Pix é confirmado automaticamente em poucos segundos. Seu pedido é processado imediatamente após a confirmação.',
      },
    ],
  },
]

export default function AjudaPage() {
  return (
    <Container className="py-8 sm:py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Ajuda</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Não encontrou o que procura? <Link href="/contato" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors">Fale conosco</Link>.
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.q} className="rounded-2xl bg-surface p-5">
                    <p className="text-sm font-bold mb-1.5">{item.q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  )
}
