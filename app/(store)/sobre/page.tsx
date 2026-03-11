import { Zap, Palette, Leaf } from 'lucide-react'
import { Container } from '@/components/ui/container'

export const metadata = {
  title: 'Sobre',
  description: 'Conheça a história da Kenzaro.',
}

const values = [
  {
    icon: Zap,
    title: 'Conforto primeiro',
    description:
      'Do tênis à sandália, cada modelo é pensado para você usar o dia inteiro sem querer tirar.',
  },
  {
    icon: Palette,
    title: 'Design honesto',
    description:
      'Sem excessos. Cada detalhe existe por um motivo — funcional ou estético.',
  },
  {
    icon: Leaf,
    title: 'Feito no Brasil',
    description:
      'Produção local, materiais de qualidade e responsabilidade com o meio ambiente.',
  },
]

const stats = [
  { value: '2022', label: 'Fundação' },
  { value: '50k+', label: 'Pares vendidos' },
  { value: '12', label: 'Modelos ativos' },
  { value: '98%', label: 'Satisfação' },
]

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-8 sm:pt-12 sm:pb-12 border-b border-border">
        <Container>
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Sobre nós</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-2xl">
            Força em cada<br />passo que você dá.
          </h1>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            Calçados pensados para performance e estilo. Feitos no Brasil, desenhados para o seu dia a dia.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 sm:py-10 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-surface flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Foto em breve</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5">
                Nascemos para mover
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A Kenzaro nasceu da paixão por movimento e design. Fundada no Brasil, desenvolvemos calçados que combinam tecnologia de performance com estética contemporânea.
                </p>
                <p>
                  Acreditamos que você não precisa escolher entre função e forma. Cada par é projetado para acompanhar o seu ritmo — na corrida matinal, no treino intenso ou no dia a dia urbano.
                </p>
                <p>
                  Usamos materiais de alta qualidade e processos sustentáveis. Nosso compromisso é criar produtos que duram, performam e fazem você se sentir bem.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-8 sm:py-12">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-10">
            Nossos valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border p-6 sm:p-8"
              >
                <div className="flex items-center justify-center size-10 rounded-full bg-surface mb-4">
                  <item.icon className="size-5 text-foreground" />
                </div>
                <p className="text-sm font-bold mb-1.5">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
