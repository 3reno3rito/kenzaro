import { Container } from '@/components/ui/container'

export const metadata = {
  title: 'Politica de Privacidade',
  description: 'Politica de privacidade da Kenzaro. Saiba como protegemos seus dados pessoais.',
}

export default function PrivacidadePage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Politica de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-1">
          Sua privacidade e importante para nos. Entenda como coletamos, usamos e protegemos seus dados.
        </p>
        <p className="text-xs text-muted-foreground mb-12">
          Ultima atualizacao: marco de 2026
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold mb-3">1. Introducao</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Kenzaro (CNPJ: 00.000.000/0001-00), com sede no Brasil, e a controladora dos dados pessoais coletados por meio do site kenzaro.com.br. Esta Politica de Privacidade foi elaborada em conformidade com a Lei Geral de Protecao de Dados Pessoais (LGPD — Lei n. 13.709/2018) e demais normas aplicaveis, com o objetivo de informar de forma clara e transparente como tratamos os seus dados pessoais.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold mb-3">2. Dados que coletamos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Coletamos diferentes tipos de dados dependendo da sua interacao com nosso site:
            </p>

            <p className="text-sm font-semibold mb-2">Dados pessoais</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed mb-4">
              <li>Nome completo, CPF e data de nascimento</li>
              <li>Endereco de email e numero de telefone</li>
              <li>Endereco de entrega e cobranca</li>
              <li>Dados de pagamento (processados por plataformas seguras de terceiros)</li>
            </ul>

            <p className="text-sm font-semibold mb-2">Dados de navegacao</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed mb-4">
              <li>Endereco IP e localizacao aproximada</li>
              <li>Tipo de navegador, sistema operacional e dispositivo</li>
              <li>Paginas visitadas, tempo de permanencia e fluxo de navegacao</li>
              <li>URL de origem (referrer)</li>
            </ul>

            <p className="text-sm font-semibold mb-2">Cookies e tecnologias similares</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Cookies essenciais para o funcionamento do site</li>
              <li>Cookies de desempenho e analiticos</li>
              <li>Cookies de marketing e personalizacao</li>
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
              <li>Enviar atualizacoes sobre o status do pedido e entrega</li>
              <li>Criar e manter sua conta de usuario</li>
              <li>Oferecer atendimento e suporte ao cliente</li>
              <li>Enviar comunicacoes de marketing e promocoes (com seu consentimento)</li>
              <li>Personalizar sua experiencia de navegacao e recomendacoes</li>
              <li>Prevenir fraudes e garantir a seguranca do site</li>
              <li>Cumprir obrigacoes legais e regulatorias</li>
              <li>Melhorar nossos produtos, servicos e a experiencia do usuario</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold mb-3">4. Base legal</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              O tratamento dos seus dados pessoais e realizado com base nas hipoteses previstas no Art. 7 da LGPD, conforme aplicavel:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Execucao de contrato</strong> — para processar pedidos e prestar os servicos contratados</li>
              <li><strong>Consentimento</strong> — para envio de comunicacoes de marketing e uso de cookies nao essenciais</li>
              <li><strong>Interesse legitimo</strong> — para prevencao de fraudes, seguranca e melhoria dos servicos</li>
              <li><strong>Obrigacao legal</strong> — para cumprimento de obrigacoes fiscais, contabeis e regulatorias</li>
              <li><strong>Exercicio regular de direitos</strong> — para defesa em processos judiciais, administrativos ou arbitrais</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold mb-3">5. Compartilhamento de dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Seus dados pessoais podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Processadores de pagamento</strong> — para viabilizar transacoes financeiras de forma segura</li>
              <li><strong>Transportadoras e operadores logisticos</strong> — para entrega dos produtos</li>
              <li><strong>Ferramentas de analytics</strong> — para analise de desempenho e comportamento no site</li>
              <li><strong>Plataformas de marketing</strong> — para envio de comunicacoes autorizadas</li>
              <li><strong>Autoridades publicas</strong> — quando exigido por lei ou determinacao judicial</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Nao vendemos, alugamos ou comercializamos seus dados pessoais com terceiros. Todos os parceiros sao obrigados contratualmente a tratar seus dados em conformidade com a LGPD.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold mb-3">6. Cookies e tecnologias</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Utilizamos cookies e tecnologias similares para melhorar sua experiencia. Voce pode gerenciar suas preferencias de cookies a qualquer momento nas configuracoes do navegador. Os tipos de cookies que utilizamos incluem:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Essenciais</strong> — necessarios para o funcionamento basico do site (carrinho, login, seguranca)</li>
              <li><strong>Analiticos</strong> — nos ajudam a entender como os visitantes interagem com o site</li>
              <li><strong>Marketing</strong> — utilizados para exibir anuncios relevantes e medir a eficacia de campanhas</li>
              <li><strong>Funcionais</strong> — permitem lembrar suas preferencias e personalizar a experiencia</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold mb-3">7. Seus direitos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Conforme o Art. 18 da LGPD, voce possui os seguintes direitos em relacao aos seus dados pessoais:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>Confirmacao da existencia de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correcao de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimizacao, bloqueio ou eliminacao de dados desnecessarios ou excessivos</li>
              <li>Portabilidade dos dados a outro fornecedor de servico</li>
              <li>Eliminacao dos dados tratados com base no consentimento</li>
              <li>Informacao sobre entidades com as quais seus dados foram compartilhados</li>
              <li>Informacao sobre a possibilidade de nao fornecer consentimento e suas consequencias</li>
              <li>Revogacao do consentimento a qualquer momento</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo email contato@kenzaro.com.br. Responderemos sua solicitacao em ate 15 dias uteis.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold mb-3">8. Seguranca dos dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adotamos medidas tecnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso nao autorizado, destruicao, perda, alteracao ou qualquer forma de tratamento inadequado. Utilizamos criptografia SSL/TLS para transmissao de dados, controles de acesso restritos, monitoramento continuo de seguranca e revisoes periodicas de nossas praticas. Embora nos esforcemos para proteger seus dados, nenhum sistema e completamente seguro, e nao podemos garantir seguranca absoluta.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold mb-3">9. Retencao de dados</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seus dados pessoais serao armazenados pelo tempo necessario para cumprir as finalidades para as quais foram coletados, incluindo obrigacoes legais, contabeis e fiscais. Dados relacionados a compras sao mantidos pelo prazo legal exigido (em geral, 5 anos para fins fiscais). Dados de conta inativa podem ser eliminados apos 2 anos sem atividade, mediante notificacao previa. Apos o termino do tratamento, os dados serao eliminados ou anonimizados, salvo quando houver obrigacao legal de retencao.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold mb-3">10. Transferencia internacional</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Alguns de nossos prestadores de servicos podem estar localizados fora do Brasil. Nesses casos, a transferencia internacional de dados sera realizada em conformidade com a LGPD, adotando medidas como clausulas contratuais padrao e garantindo que o pais de destino possua nivel adequado de protecao de dados ou que existam salvaguardas apropriadas.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold mb-3">11. Alteracoes nesta politica</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esta Politica de Privacidade pode ser atualizada periodicamente para refletir mudancas em nossas praticas ou na legislacao aplicavel. Alteracoes significativas serao comunicadas por meio do site ou por email. Recomendamos que voce revise esta pagina regularmente. A data da ultima atualizacao esta sempre indicada no topo deste documento.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold mb-3">12. Contato e encarregado de dados (DPO)</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Para questoes relacionadas a privacidade e protecao de dados, entre em contato com nosso Encarregado de Protecao de Dados (DPO):
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li><strong>Kenzaro</strong></li>
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>Email do DPO: contato@kenzaro.com.br</li>
              <li>Site: kenzaro.com.br</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Voce tambem pode registrar uma reclamacao junto a Autoridade Nacional de Protecao de Dados (ANPD) caso entenda que o tratamento dos seus dados viola a LGPD.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
