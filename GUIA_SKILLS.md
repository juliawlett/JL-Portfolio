# Guia de Skills: Criação de Sites de Alta Performance com IA

> **Repositório de Skills:** `C:\Users\julia.lima\.agents\skills-sites-com-ia`  
> Este documento cataloga as **27 skills exclusivas** disponíveis, detalhando suas responsabilidades, condições de acionamento ("Quando utilizar") e **Combos Estratégicos** para tarefas frequentes de desenvolvimento e design.

---

## 🎯 Índice
1. [Combos de Ação Rápida](#-combos-de-ação-rápida)
   - [Tirar o padrão / "cara de IA"](#1-combo-tirar-o-padrãocara-de-ia-anti-slop)
   - [Aplicar animação na página](#2-combo-aplicar-animação-na-página)
   - [Aplicar melhoria e animação no Hero](#3-combo-aplicar-melhoria-e-animação-no-hero)
   - [Aplicar otimização e verificar o SEO](#4-combo-aplicar-otimização-e-verificar-o-seo)
   - [Aplicar teste mobile e validar a portabilidade](#5-combo-aplicar-teste-mobile-e-validar-a-portabilidade)
   - [Iniciar um projeto demo](#6-combo-iniciar-um-projeto-demo)
   - [Redesign e elevação de projeto existente](#7-combo-redesign-e-elevação-de-projeto-existente)
2. [Catálogo Completo das 27 Skills](#-catálogo-completo-das-skills)
   - [Estratégia e Alinhamento](#1-estratégia-e-alinhamento)
   - [Design Visual & UI/UX](#2-design-visual--uiux-anti-slop)
   - [Animações & GSAP](#3-animações--gsap)
   - [Geração Visual & Imagem-para-Código](#4-geração-visual--imagem-para-código)
   - [Performance & SEO](#5-performance--seo)
   - [Utilitários & Execução](#6-utilitários--execução)

---

## ⚡ Combos de Ação Rápida

Os combos reúnem as skills certas no pipeline ideal para resolver demandas reais de ponta a ponta.

### 1. Combo: "Tirar o padrão/cara de IA" (Anti-Slop)
*Elimina clichês visuais gerados por IA (cards repetitivos dentro de cards, gradientes roxos genéricos, textos com bullets óbvios e falta de hierarquia).*
* **Skills utilizadas:**
  1. `design-taste-frontend`: Aplica auditoria visual anti-slop e estabelece direção estética autêntica.
  2. `high-end-visual-design`: Fornece paletas calibradas, tipografia editorial de peso e proporções de design de agência premium.
  3. `impeccable`: Lapida alinhamento, contraste, microinterações e remove ruídos cognitivos.
  4. `full-output-enforcement`: Garante que a refatoração seja integral, sem placeholders ou trechos comentados.
* **Fluxo de execução:**
  - Auditar elementos padronizados (cores de IA, botões idênticos, bordas genéricas).
  - Substituir fontes comuns por famílias tipográficas intencionais com contraste de escala.
  - Reestruturar grids para composições assimétricas ou bento flats com respiro generoso.

---

### 2. Combo: "Aplicar animação na página"
*Cria um fluxo narrativo fluido e interativo à medida que o usuário rola a página.*
* **Skills utilizadas:**
  1. `motion-design`: Define a física, duração, easing e coreografia (sem animações gratuitas ou enjoativas).
  2. `gsap-core`: Provê os motores de transição (`gsap.to`, `gsap.fromTo`, staggers).
  3. `gsap-scrolltrigger`: Conecta as animações aos gatilhos de scroll e visibilidade dos elementos.
  4. `gsap-performance`: Assegura 60 FPS consistentes via `transform`, `opacity` e hardware acceleration.
* **Fluxo de execução:**
  - Definir quais elementos entram por fade/slide staggered.
  - Implementar triggers com limites de ativação suaves (`start: "top 85%"`).
  - Aplicar `will-change` estritamente durante o movimento para não degradar a GPU.

---

### 3. Combo: "Aplicar melhoria e animação no Hero"
*Transforma o topo da página no cartão de visitas de alto impacto, prendendo a atenção no primeiro segundo.*
* **Skills utilizadas:**
  1. `frontend-design`: Redesenha a hierarquia do Hero (título forte, subtítulo com valor claro, CTA magnético).
  2. `gpt-taste`: Aplica tipografia editorial horizontal ampla e espaçamento robusto.
  3. `gsap-timeline`: Coreografa a sequência de entrada (badge → headline → subtítulo → botões/mídia).
  4. `image-to-code`: Quando o Hero requer um asset ou mock-up visual customizado de suporte.
* **Fluxo de execução:**
  - Eliminar o visual de carrossel ou caixas flutuantes genéricas.
  - Encadeamento via `gsap.timeline()` com delay escalonado de 0.08s a 0.15s entre elementos.
  - Ajuste de contraste para leitura imediata em qualquer monitor.

---

### 4. Combo: "Aplicar otimização e verificar o SEO"
*Garante que a página carregue instantaneamente (Core Web Vitals) e esteja pronta para ranqueamento e indexação.*
* **Skills utilizadas:**
  1. `pagespeed-seo-optimizer`: Executa auditoria técnica profunda e checklist de pontuação 95+.
  2. `gsap-performance`: Remove gargalos de JS/CSS que causam *Cumulative Layout Shift* (CLS) ou travamentos no mobile.
  3. `impeccable`: Assegura semântica correta de tags (`<h1>` a `<h6>`, `<main>`, `<article>`, `<nav>`) e acessibilidade WCAG.
* **Fluxo de execução:**
  - Otimização e carregamento de imagens em formato moderno (WebP/AVIF com dimensões explícitas).
  - Configuração de meta tags completas (OpenGraph, Twitter Cards, Canonical, Favicons e Schema.org).
  - Eliminação de scripts bloqueantes de renderização e checagem de contraste de cor.

---

### 5. Combo: "Aplicar teste mobile e validar a portabilidade"
*Adapta e valida se toda a experiência do desktop se traduz perfeitamente para telas de toque menores.*
* **Skills utilizadas:**
  1. `imagegen-frontend-mobile`: Referência e validação visual de layouts mobile-first nativos.
  2. `impeccable`: Ajusta alvos de toque (mínimo 44x44px), ergonomia de navegação e espaçamentos em viewports de 360px a 430px.
  3. `gsap-core`: Usa `gsap.matchMedia()` para desabilitar ou simplificar animações pesadas no mobile.
* **Fluxo de execução:**
  - Evitar quebras de palavras forçadas ou títulos com tamanho de fonte desproporcional.
  - Validação de menus hambúrguer / gavetas com focus lock e scroll suave.
  - Verificação de desempenho em conexões mais lentas (redução de transfer de assets).

---

### 6. Combo: "Iniciar um projeto demo"
*Construção ágil de um protótipo de alta fidelidade para demonstrar proposta de valor a clientes ou investidores.*
* **Skills utilizadas:**
  1. `consultor-universal-site`: Estrutura o briefing, proposta de valor, público-alvo e esqueleto de seções (AIDA).
  2. `stitch-design-taste`: Gera as diretrizes de design (`DESIGN.md`) com paleta, fontes e identidade visual.
  3. `brandkit`: Estabelece o conceito do logotipo e atmosfera de cores da demonstração.
  4. `grill-me`: Validar pedencias, necessidade, pontos a melhorem.
* **Fluxo de execução:**
  - Montar arquitetura da página com 5 a 7 seções estratégicas.
  - Implementar o protótipo com dados realistas (evitando `Lorem Ipsum`).
  - Adicionar microinterações rápidas para dar sensação de produto vivo.

---

### 7. Combo: "Redesign e elevação de projeto existente"
*Atualiza uma página antiga ou com aspecto amador para o estado da arte.*
* **Skills utilizadas:**
  1. `redesign-existing-projects`: Analisa a versão atual sem quebrar a lógica de negócio ou formulários.
  2. `design-taste-frontend`: Redesenha componentes com padrão contemporâneo.
  3. `gsap-scrolltrigger`: Adiciona dinamismo sutil no scroll.
  4. `pagespeed-seo-optimizer`: Garante que o novo visual não prejudique a velocidade.

---

## 📚 Catálogo Completo das Skills

### 1. Estratégia e Alinhamento

| Skill | Quando Utilizar |
|---|---|
| **`consultor-universal-site`** | No início de qualquer projeto do zero. Use para definir personas, matriz de objeções, tom de voz, funil de conversão e estrutura de páginas. |
| **`grill-me`** | Sempre que houver incertezas sobre o que construir. Faz uma entrevista focada e crítica para encontrar brechas conceituais antes de codificar. |

---

### 2. Design Visual & UI/UX (Anti-Slop)

| Skill | Quando Utilizar |
|---|---|
| **`design-taste-frontend`** | Padrão ouro para landing pages e sites institucionais. Use para garantir visual original, paletas refinadas e grids fora do óbvio. |
| **`design-taste-frontend-v1`** | Apenas quando houver necessidade explícita de retrocompatibilidade com a versão anterior do motor de design taste. |
| **`frontend-design`** | Quando precisar definir a direção artística da interface, contraste de tipografia e personalidade estética inicial. |
| **`high-end-visual-design`** | Em sites para marcas de luxo, B2B enterprise, consultorias de alto tíquete e produtos de assinatura que precisam parecer caros. |
| **`impeccable`** | Em revisões de acabamento fino: ajuste de paddings, sombras sutis, contraste de texto, estados de hover/focus e acessibilidade WCAG. |
| **`stitch-design-taste`** | Para criar o arquivo semântico `DESIGN.md` ou quando usar integrações de design token no padrão Stitch. |
| **`minimalist-ui`** | Quando o cliente busca um estilo "Apple / Linear": monocromático quente, sem gradientes pesados, foco total em tipografia e dados. |
| **`industrial-brutalist-ui`** | Para produtos de desenvolvedores, cibersegurança, cripto, arquitetura ou estúdios criativos com apelo industrial e técnico. |
| **`redesign-existing-projects`** | Para refatorar código legado ou sites prontos que precisam de um salto de qualidade estética sem reconstrução do zero. |

---

### 3. Animações & GSAP

| Skill | Quando Utilizar |
|---|---|
| **`motion-design`** | Como guia teórico e conceitual de movimento: curvas de aceleração (easing), timing humano e propósito da animação. |
| **`gsap-core`** | Para qualquer animação básica ou intermediária em JS: entrada de elementos, contadores numéricos, fades e staggers. |
| **`gsap-scrolltrigger`** | Sempre que a animação depender da rolagem do mouse: fixação de seções (pinning), barras de progresso e revelações graduais. |
| **`gsap-timeline`** | Para sequências de múltiplos elementos que precisam acontecer em ordem exata (ex.: abertura de modais, hero entrance). |
| **`gsap-react`** | Quando o projeto for construído em React, Next.js ou Remix, usando o hook `useGSAP` com isolamento de contexto e cleanup. |
| **`gsap-plugins`** | Ao precisar de recursos avançados: transições de layout (`Flip`), arraste (`Draggable`), animação de texto (`SplitText`). |
| **`gsap-performance`** | Sempre que houver queda de frames, travamentos em dispositivos móveis ou animações pesadas com consumo excessivo de GPU/CPU. |
| **`gsap-utils`** | Para operações matemáticas avançadas: mapeamento de intervalos (`mapRange`), travas de valores (`clamp`) ou interpoladores. |
| **`gpt-taste`** | Para sites que combinam narrativa editorial longa, layouts de forte impacto e animações sincronizadas no scroll. |

---

### 4. Geração Visual & Imagem-para-Código

| Skill | Quando Utilizar |
|---|---|
| **`brandkit`** | Quando o projeto ainda não possui identidade visual e necessita de um quadro conceitual de marca, tipografia e logo antes do código. |
| **`imagegen-frontend-web`** | Para gerar imagens de referência horizontais dedicadas para cada seção de um site (1 imagem por seção). |
| **`imagegen-frontend-mobile`** | Para gerar conceitos de telas de smartphones em mockups realistas e limpos. |
| **`image-to-code`** | Ao receber ou gerar mockups visuais e precisar transformá-los em código HTML/CSS fiel pixel a pixel. |

---

### 5. Performance & SEO

| Skill | Quando Utilizar |
|---|---|
| **`pagespeed-seo-optimizer`** | Antes de entregar ou publicar qualquer site. Audita Core Web Vitals, comprime ativos, configura meta tags e dados estruturados Schema.org. |

---

### 6. Utilitários & Execução

| Skill | Quando Utilizar |
|---|---|
| **`full-output-enforcement`** | Para instruir a IA a gerar arquivos de código 100% completos, proibindo resumos, omissões ou placeholders no código. |
| **`find-skills`** | Quando uma tarefa exigir competências externas ou novas extensões no ecossistema de habilidades. |

---

*Documento gerado para padronização de fluxos e excelência de desenvolvimento.*
