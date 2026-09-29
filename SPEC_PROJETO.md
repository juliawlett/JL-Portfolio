# 💎 Documento de Especificação & Arquitetura: Portfólio Julia Lima

> **Status:** Implementado  
> **Propósito:** Portfólio de Alta Conversão + Venda de Sites e Landing Pages  
> **Profissional:** Júlia Letícia · Desenvolvimento Web | Sites, Landing Pages & Presença Digital  
> **E-mail:** dev.julialeticia@gmail.com  
> **Stack implementada:**
> - **Framework:** Next.js 14 (App Router, TypeScript, React 18)
> - **Estilização:** Tailwind CSS v3 com tokens de cores para os temas claro e escuro.
> - **Interatividade:** componentes React client-side para filtros, abas, FAQ, funil e alternância de tema; Framer Motion e GSAP estão disponíveis como dependências.
> - **Ícones:** Lucide React
> - **Deploy:** Vercel (com SSR/SSG ultrarrápido)

---

## 🎨 1. Direção Visual & Design System (Anti-Slop & High-End)

* **Atmosfera:** interface limpa e profissional, com tema claro como padrão e tema escuro opcional persistido no navegador.
* **Paleta de Cores:**
  - `Tema claro`: fundo `#F8FAFC`, cartões `#FFFFFF`, texto `#0F172A` e bordas `#E2E8F0`.
  - `Tema escuro`: fundo `#0F1218`, cartões `#171B24`, superfícies `#1F2430` e texto `#F8FAFC`.
  - `Destaque primário`: roxo `#7C3AED`, com variações entre `#F5F3FF` e `#4C1D95`.
  - `Interações`: sombra discreta, elevação em hover, animações de flutuação e marquee.
  - `Tipografia`:
    - Títulos: *DM Sans*.
    - Textos & números: *Inter*.

---

## 🏛️ 2. Arquitetura de Páginas & Rotas (Next.js App Router)

```
app/
├── layout.tsx                # Metadados, fontes, JSON-LD e provedor de tema
├── page.tsx                  # Home composta por seções comerciais
├── globals.css               # Tokens visuais, tema e animações globais
└── projetos/
    └── [slug]/
        └── page.tsx          # Página dinâmica detalhada de cada um dos 6 cases
```

---

## 🏆 3. Mapeamento Completo dos 6 Cases Reais

| Slug | Nome do Projeto | Nicho / Categoria | Tipo de Página | Link Vercel | Principais Métricas & Destaques |
|---|---|---|---|---|---|
| `db-cursos` | **DB Cursos & SST** | Serviços & B2B / Treinamentos | Landing Page de Matrículas & B2B | `https://dbcursos.vercel.app/` | • 98+ PageSpeed<br>• Duplo funil (Pessoa Física + B2B)<br>• Seletor de turmas e urgência |
| `animalia` | **Animália Pet Care** | Saúde & Pet Care | Site Institucional & Agendamento 24h | `https://animalia-demo.vercel.app/` | • Botão de emergência 24h direto<br>• Arquitetura acolhedora<br>• Unidades e serviços integrados |
| `skill-lan-house` | **Skill Lan House** | Gastronomia & Lazer / E-Sports | Landing Page de Reservas & Corujão | `https://skill-lan-house.vercel.app/` | • Visual gamer imersivo<br>• Tabela de máquinas e especificações<br>• Conversão para reserva no WhatsApp |
| `guilherme-interiores` | **Guilherme Interiores** | Luxo & Varejo / Móveis de Alto Padrão | Site Institucional de Autoridade | `https://moveisplanejados-khaki.vercel.app/` | • Estética editorial contemporânea<br>• Vitrine curada de ambientes<br>• Captação consultiva para showroom |
| `tp-veiculos` | **TP Veículos** | Serviços & B2B / Automotivo | Landing Page com Filtro Interativo | `https://lp-revenda-carro.vercel.app/` | • Quiz / Filtro "Qual carro combina com você?"<br>• Redução da fricção de contato<br>• Captação qualificada de leads |
| `brasa-65` | **Brasa 65 Hamburgueria** | Gastronomia & Lazer / Food Service | Landing Page Gastronômica & Delivery | `https://hamburgueria-one-zeta.vercel.app/` | • Visual dark apetitoso<br>• Cardápio visual de alta resolução<br>• Acesso rápido ao canal de pedidos |

---

## 📄 4. Estrutura da Página Individual do Case (`/projetos/[slug]`)

1. **Header do Case**: Breadcrumb (`← Voltar para todos os cases`), Categoria do negócio e Badge de Status (*"No ar na Vercel"* com pulso luminoso).
2. **Título & Tagline Enxutos**: Título principal e subtítulo direto posicionados logo acima da vitrine visual, eliminando barreiras de texto no primeiro contato.
3. **Protótipo em Destaque no Topo (1º Viewport)**:
   - **Mockups Lado a Lado**: MacBook Pro 16" (visualização desktop) e iPhone 16 (visualização mobile touch) em molduras oficiais Apple alinhadas pela base.
   - **Barra Superior**: Controles macOS e link oficial do site na Vercel.
   - **Barra Integrada de Ações Imediatas**:
     - Botão primário para WhatsApp com mensagem personalizada para o nicho do projeto.
     - Botão secundário para acessar o site oficial no ar.
     - Badges rápidas de autoridade (*Lighthouse Score* e *Tempo de Carregamento*).
4. **Especificações Rápidas do Projeto**: Cliente, Segmento, Arquitetura Mobile-First e Stack tecnológica.
5. **Auditoria Google Lighthouse**: 4 gauges com notas de Performance (96 a 99), Acessibilidade (100), Boas Práticas (100) e SEO Técnico (100).
6. **Comparativo Estratégico (O Desafio vs. A Solução da Júlia)**:
   - *O Desafio:* Gargalos de conversão, dúvidas do público e pontos fracos antes da página.
   - *A Solução da Júlia:* Decisões de design autoral, hierarquia visual e diferenciais implementados.
7. **Stack Técnica & Engenharia Autoral**: Next.js App Router, Tailwind CSS compilado e Vercel Edge Network.
8. **CTA Comercial de Fechamento**: Chamada para proposta com selos de bônus (1º ano domínio .com.br incluso, entrega em 3 a 5 dias e nota 98+).
9. **Navegação de Outros Cases Reais**: Grade visual para explorar os outros projetos do portfólio.

## 🎯 5. Estrutura aplicada na Página Principal (`/`)

1. **Banner promocional e header**: o banner só é exibido com `promo.isActive`; a navegação usa âncoras, alternância de tema e CTA para WhatsApp.
2. **Hero Section**:
   - Headline: *"Transformo visitantes em clientes pagantes com sites que unem estética de alto padrão e engenharia de conversão."*
   - Subtítulo: *"Desenvolvo páginas rápidas, autorais e estrategicamente arquitetadas para negócios que não aceitam parecer genéricos na internet."*
   - CTAs: `[Iniciar Meu Projeto]` (leva ao formulário) e `[Ver Cases Reais ↓]`.
3. **Barra de Pilares & Autoridade**:
   - PageSpeed 95+ | Código 100% Autoral | Mobile-First Nativo | Copy Orientada a Vendas.
4. **Vitrine Filtrável de Cases**:
   - Categorias: `Todos` (6), `Serviços & B2B` (2), `Luxo & Varejo` (1), `Gastronomia & Lazer` (2), `Saúde & Bem-Estar` (1).
   - Cada card leva para a página dedicada do projeto `/projetos/[slug]` com opção de ir direto para o site da Vercel.
5. **Serviços Oferecidos**:
   - 01. Landing Pages de Alta Conversão
   - 02. Sites Institucionais de Autoridade
   - 03. Redesign & Aceleração de Performance
6. **Planos & Tabela de Investimento (com chave promocional)**:
   - Apresentação visual dos planos Essencial, Profissional e Avançado + Sob Consulta.
7. **Plano de Cuidado Contínuo**: seção própria, organizada em abas para benefícios, funcionamento, comparação e valores.
8. **Método em 4 Passos**:
   - 01. Diagnóstico & Copywriting
   - 02. Design de Alto Padrão no Figma
   - 03. Desenvolvimento & Otimização
   - 04. Validação & Entrega
9. **Anti-Template (Comparativo Transparente)**:
   - Contraste claro entre "Templates Prontos Lentos" vs. "O Seu Site Personalizado".
10. **Sobre a Júlia Letícia**:
   - Apresentação profissional focada em comprometimento, acabamento impecável e visão comercial de negócios.
11. **FAQ Dinâmico**:
    - Prazos, processo, hospedagem, formas de pagamento e suporte.
12. **Formulário de Qualificação Interativo (3 etapas) + WhatsApp Direto**:
    - Passo 1: Tipo de Projeto
    - Passo 2: Nicho do seu negócio
    - Passo 3: Previsão de início
    - Botão final: abre o WhatsApp com os dados preenchidos na mensagem.

---

## 💰 6. Estrutura de Precificação, Planos & Flag Promocional (`src/data/config.ts`)

A configuração central em `src/data/config.ts` possui a flag `promo.isActive: boolean`:
* **Se `true`**: O site ativa visual de campanha, banner de urgência, valor base riscado e valor promocional com destaque roxo.
* **Se `false`**: O site exibe os valores normais de forma limpa, sem menção a desconto ou prazos promocionais.

### Tabela de Planos Fechados:
1. **Plano Essencial**:
   - *Valor Base:* R$ 1.000 | *Promocional:* R$ 700
   - *Escopo:* 1 página (até 5 seções), 1 rodada de alteração, prazo de 3 a 5 dias úteis.
   - *Indicado para:* Landing Page simples, apresentação de serviço, portfólio, contato direto.
   - *Bônus:* 1º ano de domínio `.com.br` grátis + deploy.
2. **Plano Profissional** (Destaque / Mais Escolhido):
   - *Valor Base:* R$ 1.600 | *Promocional:* R$ 1.100
   - *Escopo:* Até 4 páginas, até 2 rodadas de alterações, prazo de 5 a 8 dias úteis.
   - *Indicado para:* Pequenas empresas, clínicas, consultorias e prestadores de serviço.
   - *Diferenciais:* Formulário integrado ao WhatsApp/E-mail, SEO estrutural, OpenGraph para redes sociais.
3. **Plano Avançado**:
   - *Valor Base:* R$ 2.600 | *Promocional:* R$ 1.600
   - *Escopo:* Até 8 páginas, até 5 rodadas de alterações, prazo de 8 a 15 dias úteis.
   - *Indicado para:* Empresas com múltiplos serviços/catálogo e captação estruturada de leads.
   - *Diferenciais:* Integração com planilhas/CRM, catálogo de serviços, SEO técnico e FAQ.
4. **Plano Sob Consulta (Sistemas & Plataformas Web)**:
   - *Valor Base:* a partir de R$ 6.100 | *Promocional:* a partir de R$ 4.100
   - *Escopo:* Frontend, backend, banco de dados, login/área do cliente, dashboards e integrações de API.

---

## 🛡️ 7. O Diferencial de Retenção: "Plano de Cuidado Contínuo" (Manutenção)

**Objeção do cliente:** *"E se eu precisar alterar um preço, trocar uma foto ou meu site sair do ar no futuro?"*  
**Solução apresentada no site:**
* **Plano de Cuidado Contínuo (R$ 130/mês)** contratado junto com o site ou R$ 150/mês avulso.
* Até 4 manutenções simples/mês (alterações de textos, fotos, contatos, links).
* Gestão técnica e renovação do domínio `.com.br` inclusa enquanto ativo.
* Atendimento prioritário no WhatsApp com resolução no mesmo dia ou no dia útil seguinte.

---

## 🎁 8. Bônus & Garantias Oficiais
* 🌐 **1º Ano de Domínio .com.br Incluso como Bônus** em todos os planos.
* ⚡ **Entrega Ágil Garantida** (3 a 15 dias úteis).
* 👤 **Atendimento Direto com Júlia Letícia**: Sem intermediários, suporte próximo durante todo o projeto.

---

## 🔗 9. Conversão, dados centralizados e contatos

* Projetos, planos, promoção, perguntas frequentes e informações do perfil estão centralizados em `src/data/config.ts`.
* Os CTAs de propostas, planos, cases, FAQ e formulário usam o WhatsApp configurado nesse arquivo, com mensagens pré-preenchidas conforme o contexto.
* WhatsApp: **(65) 98129-0370** (`5565981290370` nos links).
* Instagram: `https://www.instagram.com/juliawlett/`.
* As rotas de projeto são geradas estaticamente a partir dos slugs configurados e retornam 404 quando o slug não existe.

---

## ⚙️ 10. Observação de build

O layout utiliza `next/font/google` para carregar Inter e DM Sans. Assim, o `next build` exige acesso ao Google Fonts durante a compilação; em ambientes sem acesso externo, a compilação falha na busca dessas fontes. Isso é uma limitação do ambiente de build, não uma falha de TypeScript ou dos componentes da aplicação.
