# Kazenami — Project Standards

> E-commerce de calçados. Performance é prioridade absoluta.
> O objetivo é 10/10 em todas as categorias: performance, UX, código, arquitetura.

---

## 1. Stack Tecnológico

| Camada | Tecnologia | Motivo |
|--------|-----------|--------|
| Framework | Next.js 16 (App Router) | SSR/SSG, streaming, edge runtime |
| Runtime | React 19 + React Compiler | Auto-memoization, zero overhead |
| Linguagem | TypeScript strict | Segurança de tipo em todo o projeto |
| Estilo | Tailwind CSS 4 + Container Queries | Utility-first, zero runtime CSS |
| Linter | Biome (SEM ESLint) | Rust-based, 100x mais rápido |
| Ícones | Lucide React (tree-shaken) | Leve, consistente |
| Utils | clsx + tailwind-merge | Merge seguro de classes |

### Regras de dependências

- **NUNCA** adicionar biblioteca sem justificativa de performance
- **NUNCA** adicionar UI library runtime (Radix, Headless UI, Material UI)
- **NUNCA** adicionar state management library (Redux, MobX)
- **PREFERIR** React built-ins: useState, useOptimistic, useTransition, use()
- **PREFERIR** CSS sobre JS para animações (CSS transitions > Framer Motion)
- **PREFERIR** native HTML sobre componentes custom (dialog, details, popover)
- Cada dependência deve ser auditada por bundle size antes de instalar

---

## 2. Arquitetura

### Estrutura de diretórios

```
app/
├── (store)/              # Layout com header/footer da loja
│   ├── layout.tsx        # Server component — header, nav, footer
│   ├── page.tsx          # Homepage
│   ├── produtos/         # Catálogo
│   │   ├── page.tsx      # Lista (SSG com revalidate)
│   │   └── [slug]/       # Detalhe do produto
│   │       └── page.tsx  # SSG por produto
│   ├── carrinho/         # Carrinho
│   └── checkout/         # Checkout
├── api/                  # API routes (mínimo — preferir server actions)
├── layout.tsx            # Root layout (fonts, metadata, viewport)
└── globals.css           # Design tokens + base styles

components/
├── ui/                   # Primitivos reutilizáveis (button, input, badge, skeleton)
├── layout/               # Header, Footer, Nav
└── product/              # ProductCard, ProductGrid, ProductGallery

lib/
├── utils/                # cn(), formatCurrency(), etc.
├── types/                # TypeScript interfaces
├── data/                 # Data fetching functions
└── constants/            # Enums, config values
```

### Regras de arquitetura

1. **Server Components por padrão** — só adicionar `'use client'` quando houver interatividade
2. **Streaming SSR** — usar `<Suspense>` granular por seção, não por página inteira
3. **Static Generation** — páginas de produto devem usar `generateStaticParams`
4. **Edge Runtime** — usar em middleware e routes que não precisam de Node APIs
5. **Zero layout shift** — todo conteúdo dinâmico deve ter skeleton com dimensões fixas
6. **Colocation** — components específicos de uma rota ficam em `_components/` na rota

---

## 3. Performance (PRIORIDADE MÁXIMA)

### Métricas alvo

| Métrica | Alvo | Não aceitar |
|---------|------|-------------|
| LCP | < 1.2s | > 2.5s |
| FID/INP | < 50ms | > 200ms |
| CLS | < 0.05 | > 0.1 |
| TTFB | < 200ms | > 600ms |
| Bundle JS | < 80KB | > 150KB |
| Lighthouse | 98-100 | < 95 |

### Regras de performance

1. **React Compiler** ativo — NÃO usar memo(), useMemo(), useCallback() manualmente
2. **Images**: sempre `next/image` com `sizes`, `priority` no above-the-fold, formatos AVIF/WebP
3. **Fonts**: `next/font` com `display: swap` e `variable` — NUNCA carregar via CDN
4. **Dynamic imports**: para qualquer componente > 5KB que não está no viewport inicial
5. **No barrel exports**: NUNCA criar `index.ts` que re-exporta tudo — mata tree-shaking
6. **CSS > JS**: animações via CSS transitions/keyframes. JS só para orquestração complexa
7. **Prefetch**: links de navegação com prefetch automático do Next.js
8. **No waterfall**: dados paralelos com `Promise.all()`, não sequenciais
9. **Skeleton first**: loading states com dimensões idênticas ao conteúdo final
10. **Minimal hydration**: máximo de lógica no servidor, mínimo de JS no client

### Imagens

```tsx
// CORRETO
<Image
  src={product.image}
  alt={product.name}
  width={400}
  height={500}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  priority={isAboveFold}
/>

// ERRADO — sem sizes, sem dimensões
<Image src={url} alt="" fill />
```

---

## 4. Qualidade de Código

### TypeScript

- `strict: true` — sem exceção
- Tipos explícitos em props de componentes e retorno de funções públicas
- `interface` para props, `type` para unions/aliases
- NUNCA usar `any` — usar `unknown` + type guard se necessário
- NUNCA usar `@ts-ignore` — usar `@ts-expect-error` com comentário explicativo

### Estilo de código (Biome)

- 2 espaços, sem semicolons, single quotes
- 120 chars por linha
- Imports organizados automaticamente
- Sem variáveis não utilizadas
- Sem console.log em produção (console.error OK para error boundaries)

### Componentes

```tsx
// CORRETO — props interface, sem forwardRef desnecessário, server component por padrão
interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (...)
}

// ERRADO — export default, inline types, memo wrapper
export default memo(function ProductCard({ product }: { product: any }) {
  return (...)
})
```

### Naming

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Arquivos | kebab-case | `product-card.tsx` |
| Componentes | PascalCase | `ProductCard` |
| Funções/variáveis | camelCase | `formatCurrency` |
| Constantes | UPPER_SNAKE | `MAX_CART_ITEMS` |
| Types/Interfaces | PascalCase | `Product`, `CartItem` |
| CSS variables | kebab-case | `--color-primary` |
| URL slugs | kebab-case | `/produtos/tenis-runner` |

---

## 5. UX & Design

### Princípios

1. **Content-first** — o produto é o herói, UI é invisível
2. **Whitespace generoso** — respiração entre elementos
3. **Tipografia como hierarquia** — peso e tamanho definem importância, não cor
4. **Microinterações** — hover states, transitions suaves (150-300ms)
5. **Mobile-first** — todo layout começa do mobile
6. **Zero jank** — sem layout shift, sem flash de conteúdo

### Design tokens

- Paleta neutra quente (stone) — o produto traz a cor
- Backgrounds: `background` (off-white), `surface` (white), `secondary` (light gray)
- Text: `foreground` (quase preto), `muted-foreground` (gray médio), `muted` (gray claro)
- Radius: consistente por nível (cards = xl, buttons = full, inputs = lg)
- Shadows: sutis (max 8% opacity)

### Responsividade

| Breakpoint | Uso |
|-----------|-----|
| < 640px | 1 coluna, nav drawer, touch-friendly (min 44px targets) |
| 640-1024px | 2 colunas, nav compacta |
| > 1024px | 3-4 colunas, nav expandida |
| > 1280px | Max-width container, layout final |

### Acessibilidade (WCAG AA)

- Contraste mínimo 4.5:1 para texto, 3:1 para elementos grandes
- `aria-label` em botões sem texto
- Focus visible em TODOS os elementos interativos (`:focus-visible`)
- Keyboard navigation completa (Tab, Enter, Escape)
- `alt` descritivo em todas as imagens
- `role` e `aria-*` em componentes custom
- `prefers-reduced-motion` respeitado

---

## 6. Git & CI

### Commits

- Conventional commits: `feat:`, `fix:`, `refactor:`, `perf:`, `docs:`
- Mensagem concisa em inglês
- Sem commits com código comentado ou console.log

### CI Pipeline (futuro)

```
push → biome check → tsc --noEmit → next build → lighthouse CI
```

### Branch strategy

- `main` — produção, sempre deployable
- `feat/*` — features em desenvolvimento
- `fix/*` — correções

---

## 7. O que NÃO fazer

- **NÃO** adicionar loading spinners — usar skeletons
- **NÃO** usar `useEffect` para data fetching — usar server components ou `use()`
- **NÃO** criar abstração antes de ter 3 usos — DRY prematuro é pior que repetição
- **NÃO** criar utils "just in case" — só quando usado
- **NÃO** adicionar comments óbvios — código deve ser autoexplicativo
- **NÃO** usar `!important` — resolver especificidade corretamente
- **NÃO** usar z-index > 50 — 10/20/30/40/50 são suficientes
- **NÃO** aninhar ternários — extrair para variável ou early return
- **NÃO** criar HOCs — usar composição ou hooks
- **NÃO** usar context para estado global — server components eliminam a necessidade
