import { Container } from '@/components/ui/container'

export const metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso da Kenzaro. Leia antes de utilizar nosso site e serviços.',
}

export default function TermosPage() {
  return (
    <Container className="py-8 sm:py-12">
      <div className="max-w-3xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Termos de Uso
        </h1>
        <p className="text-sm text-muted-foreground mb-1">
          Leia atentamente os termos que regem o uso do nosso site e serviços.
        </p>
        <p className="text-xs text-muted-foreground mb-12">
          Última atualização: março de 2026
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold mb-3">1. Aceitação dos termos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ao acessar ou utilizar o site kenzaro.com.br, você concorda com estes Termos de Uso e com nossa Política de Privacidade. Caso não concorde com qualquer disposição, recomendamos que não utilize nossos serviços. O uso continuado do site após eventuais alterações constitui aceitação dos novos termos.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold mb-3">2. Uso do site</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Você se compromete a utilizar o site de forma ética e em conformidade com a legislação brasileira. É proibido:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Utilizar o site para fins ilegais ou não autorizados</li>
              <li>Tentar acessar áreas restritas, sistemas ou servidores sem autorização</li>
              <li>Reproduzir, duplicar ou explorar comercialmente qualquer parte do site</li>
              <li>Transmitir vírus, malware ou qualquer código de natureza destrutiva</li>
              <li>Interferir no funcionamento do site ou na experiência de outros usuários</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold mb-3">3. Conta do usuário</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Para realizar compras, pode ser necessário criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades realizadas em sua conta. Comprometa-se a:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Fornecer informações verdadeiras, completas e atualizadas</li>
              <li>Manter seus dados de acesso em sigilo</li>
              <li>Notificar imediatamente a Kenzaro sobre qualquer uso não autorizado</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos ou apresentem atividade suspeita.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold mb-3">4. Produtos e preços</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nos esforçamos para manter as informações dos produtos precisas e atualizadas, incluindo descrições, imagens e preços. No entanto, eventuais erros podem ocorrer. Reservamo-nos o direito de corrigir erros de precificação e atualizar informações a qualquer momento. Os preços exibidos são em reais (BRL) e podem ser alterados sem aviso prévio. Promoções e descontos possuem condições e prazos específicos, informados no momento da oferta.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold mb-3">5. Pedidos e pagamento</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Ao realizar um pedido, você está fazendo uma oferta de compra sujeita a confirmação. Reservamo-nos o direito de recusar ou cancelar pedidos por motivos como:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Erros de precificação ou informações incorretas do produto</li>
              <li>Indisponibilidade de estoque</li>
              <li>Suspeita de fraude ou atividade irregular</li>
              <li>Limitações de crédito ou falha na autorização do pagamento</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Os pagamentos são processados por meio de plataformas seguras de terceiros. A Kenzaro não armazena dados completos de cartão de crédito em seus servidores.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold mb-3">6. Envio e entrega</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Os prazos de entrega são estimativas e podem variar conforme a região e a disponibilidade do produto. A Kenzaro não se responsabiliza por atrasos causados por transportadoras, condições climáticas, greves ou eventos de força maior. Após o despacho, você receberá um código de rastreamento para acompanhar seu pedido. Em caso de extravio ou dano durante o transporte, entre em contato conosco para que possamos resolver a situação.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold mb-3">7. Trocas e devoluções</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Em conformidade com o Código de Defesa do Consumidor (CDC), você tem o direito de desistir da compra realizada pela internet no prazo de 7 (sete) dias corridos a contar do recebimento do produto, sem necessidade de justificativa (direito de arrependimento — Art. 49 do CDC).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Para exercer esse direito:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>O produto deve estar em sua embalagem original, sem sinais de uso</li>
              <li>Entre em contato pelo email contato@kenzaro.com.br informando o número do pedido</li>
              <li>O frete de devolução será por conta da Kenzaro em caso de arrependimento</li>
              <li>O reembolso será processado em até 10 dias úteis após o recebimento do produto devolvido</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Para produtos com defeito, o prazo para reclamação é de 30 dias (produtos não duráveis) ou 90 dias (produtos duráveis), conforme o Art. 26 do CDC.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold mb-3">8. Propriedade intelectual</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Todo o conteúdo do site — incluindo mas não limitado a textos, imagens, logotipos, ícones, gráficos, design, código-fonte e software — é de propriedade da Kenzaro ou de seus licenciadores e está protegido pelas leis brasileiras de propriedade intelectual. É proibida a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo sem autorização prévia e expressa por escrito.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold mb-3">9. Limitação de responsabilidade</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Kenzaro não se responsabiliza por danos indiretos, incidentais ou consequenciais resultantes do uso ou da impossibilidade de uso do site. O site é fornecido &quot;como está&quot;, sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o site estará disponível de forma ininterrupta, livre de erros ou seguro contra ameaças externas. Nossa responsabilidade total, em qualquer circunstância, limita-se ao valor pago pelo produto ou serviço em questão.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold mb-3">10. Alterações nos termos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas por meio do site ou por email. A data da última atualização será sempre indicada no topo desta página. Recomendamos que você revise periodicamente estes termos para se manter informado.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold mb-3">11. Lei aplicável e foro</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca da sede da Kenzaro, com exclusão de qualquer outro, por mais privilegiado que seja, salvo nos casos em que o Código de Defesa do Consumidor determine o foro do domicílio do consumidor.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold mb-3">12. Contato</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Kenzaro</strong></li>
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>Email: contato@kenzaro.com.br</li>
              <li>Site: kenzaro.com.br</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  )
}
