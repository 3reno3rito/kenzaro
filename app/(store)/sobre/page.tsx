import Image from 'next/image'
import { Zap, Palette, Leaf } from 'lucide-react'
import { Container } from '@/components/ui/container'

export const metadata = {
  title: 'Sobre',
  description: 'Conheca a historia da Kenzaro.',
}

const values = [
  {
    icon: Zap,
    title: 'Conforto primeiro',
    description:
      'Do tenis a sandalia, cada modelo e pensado para voce usar o dia inteiro sem querer tirar.',
  },
  {
    icon: Palette,
    title: 'Design honesto',
    description:
      'Sem excessos. Cada detalhe existe por um motivo — funcional ou estetico.',
  },
  {
    icon: Leaf,
    title: 'Feito no Brasil',
    description:
      'Producao local, materiais de qualidade e responsabilidade com o meio ambiente.',
  },
]

const stats = [
  { value: '2022', label: 'Fundacao' },
  { value: '50k+', label: 'Pares vendidos' },
  { value: '12', label: 'Modelos ativos' },
  { value: '98%', label: 'Satisfacao' },
]

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-12 pb-10 sm:pt-20 sm:pb-14 border-b border-border">
        <Container>
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Sobre nos</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-2xl">
            Vento e onda.<br />Movimento e forma.
          </h1>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            Kenzaro nasce do japones — ken (forca) e zaro, uma marca que carrega energia em cada passo.
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
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&q=80"
                alt="Calcados Kenzaro"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5">
                Nascemos para mover
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A Kenzaro nasceu da paixao por movimento e design. Fundada no Brasil, desenvolvemos calcados que combinam tecnologia de performance com estetica contemporanea.
                </p>
                <p>
                  Acreditamos que voce nao precisa escolher entre funcao e forma. Cada par e projetado para acompanhar o seu ritmo — na corrida matinal, no treino intenso ou no dia a dia urbano.
                </p>
                <p>
                  Usamos materiais de alta qualidade e processos sustentaveis. Nosso compromisso e criar produtos que duram, performam e fazem voce se sentir bem.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20">
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
