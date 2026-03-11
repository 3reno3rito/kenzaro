import { Container } from '@/components/ui/container'

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade da Kenzaro. Saiba como protegemos seus dados pessoais.',
}

export default function PrivacidadePage() {
  return (
    <Container className="py-8 sm:py-12">
      <div className="max-w-3xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-1">
          Sua privacidade é importante para nós. Entenda como coletamos, usamos e protegemos seus dados.
        </p>
        <p className="text-xs text-muted-foreground mb-12">
          Última atualização: março de 2026
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold mb-3">1. Introdução</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Kenzaro (CNPJ: 00.000.000/0001-00), com sede no Brasil, é a controladora dos dados pessoais coletados por meio do site kenzaro.com.br. Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e demais normas aplicáveis, com o objetivo de informar de forma clara e transparente como tratamos os seus dados pessoais.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold mb-3">2. Dados que coletamos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Coletamos diferentes tipos de dados dependendo da sua interação com nosso site:
            </p>

            <p className="text-sm font-semibold mb-2">Dados pessoais</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed mb-4">
              <li>Nome completo, CPF e data de nascimento</li>
              <li>Endereço de email e número de telefone</li>
              <li>Endereço de entrega e cobrança</li>
              <li>Dados de pagamento (processados por plataformas seguras de terceiros)</li>
            </ul>

            <p className="text-sm font-semibold mb-2">Dados de navegação</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed mb-4">
              <li>Endereço IP e localização aproximada</li>
              <li>Tipo de navegador, sistema operacional e dispositivo</li>
              <li>Páginas visitadas, tempo de permanência e fluxo de navegação</li>
              <li>URL de origem (referrer)</li>
            </ul>

            <p className="text-sm font-semibold mb-2">Cookies e tecnologias similares</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Cookies essenciais para o funcionamento do site</li>
              <li>Cookies de desempenho e analíticos</li>
              <li>Cookies de marketing e personalização</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold mb-3">3. Como usamos seus dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Processar e gerenciar seus pedidos e pagamentos</li>
              <li>Enviar atualizações sobre o status do pedido e entrega</li>
              <li>Criar e manter sua conta de usuário</li>
              <li>Oferecer atendimento e suporte ao cliente</li>
              <li>Enviar comunicações de marketing e promoções (com seu consentimento)</li>
              <li>Personalizar sua experiência de navegação e recomendações</li>
              <li>Prevenir fraudes e garantir a segurança do site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Melhorar nossos produtos, serviços e a experiência do usuário</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold mb-3">4. Base legal</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              O tratamento dos seus dados pessoais é realizado com base nas hipóteses previstas no Art. 7º da LGPD, conforme aplicável:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Execução de contrato</strong> — para processar pedidos e prestar os serviços contratados</li>
              <li><strong>Consentimento</strong> — para envio de comunicações de marketing e uso de cookies não essenciais</li>
              <li><strong>Interesse legítimo</strong> — para prevenção de fraudes, segurança e melhoria dos serviços</li>
              <li><strong>Obrigação legal</strong> — para cumprimento de obrigações fiscais, contábeis e regulatórias</li>
              <li><strong>Exercício regular de direitos</strong> — para defesa em processos judiciais, administrativos ou arbitrais</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold mb-3">5. Compartilhamento de dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Seus dados pessoais podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Processadores de pagamento</strong> — para viabilizar transações financeiras de forma segura</li>
              <li><strong>Transportadoras e operadores logísticos</strong> — para entrega dos produtos</li>
              <li><strong>Ferramentas de analytics</strong> — para análise de desempenho e comportamento no site</li>
              <li><strong>Plataformas de marketing</strong> — para envio de comunicações autorizadas</li>
              <li><strong>Autoridades públicas</strong> — quando exigido por lei ou determinação judicial</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros. Todos os parceiros são obrigados contratualmente a tratar seus dados em conformidade com a LGPD.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold mb-3">6. Cookies e tecnologias</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência. Você pode gerenciar suas preferências de cookies a qualquer momento nas configurações do navegador. Os tipos de cookies que utilizamos incluem:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Essenciais</strong> — necessários para o funcionamento básico do site (carrinho, login, segurança)</li>
              <li><strong>Analíticos</strong> — nos ajudam a entender como os visitantes interagem com o site</li>
              <li><strong>Marketing</strong> — utilizados para exibir anúncios relevantes e medir a eficácia de campanhas</li>
              <li><strong>Funcionais</strong> — permitem lembrar suas preferências e personalizar a experiência</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold mb-3">7. Seus direitos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Conforme o Art. 18 da LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Confirmação da existência de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço</li>
              <li>Eliminação dos dados tratados com base no consentimento</li>
              <li>Informação sobre entidades com as quais seus dados foram compartilhados</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e suas consequências</li>
              <li>Revogação do consentimento a qualquer momento</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo email contato@kenzaro.com.br. Responderemos sua solicitação em até 15 dias úteis.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold mb-3">8. Segurança dos dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, destruição, perda, alteração ou qualquer forma de tratamento inadequado. Utilizamos criptografia SSL/TLS para transmissão de dados, controles de acesso restritos, monitoramento contínuo de segurança e revisões periódicas de nossas práticas. Embora nos esforcemos para proteger seus dados, nenhum sistema é completamente seguro, e não podemos garantir segurança absoluta.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold mb-3">9. Retenção de dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seus dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, contábeis e fiscais. Dados relacionados a compras são mantidos pelo prazo legal exigido (em geral, 5 anos para fins fiscais). Dados de conta inativa podem ser eliminados após 2 anos sem atividade, mediante notificação prévia. Após o término do tratamento, os dados serão eliminados ou anonimizados, salvo quando houver obrigação legal de retenção.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold mb-3">10. Transferência internacional</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. Nesses casos, a transferência internacional de dados será realizada em conformidade com a LGPD, adotando medidas como cláusulas contratuais padrão e garantindo que o país de destino possua nível adequado de proteção de dados ou que existam salvaguardas apropriadas.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold mb-3">11. Alterações nesta política</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Alterações significativas serão comunicadas por meio do site ou por email. Recomendamos que você revise esta página regularmente. A data da última atualização está sempre indicada no topo deste documento.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold mb-3">12. Contato e encarregado de dados (DPO)</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Para questões relacionadas à privacidade e proteção de dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Kenzaro</strong></li>
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>Email do DPO: contato@kenzaro.com.br</li>
              <li>Site: kenzaro.com.br</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD) caso entenda que o tratamento dos seus dados viola a LGPD.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
