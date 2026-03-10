import type { Product } from '@/lib/types/product'

// Mock data — will be replaced by database
export const products: Product[] = [
  {
    id: '1',
    slug: 'runner-x1',
    name: 'Runner X1',
    brand: 'Kazenami',
    description: 'Tênis de corrida com tecnologia de amortecimento avançada. Mesh respirável e solado de borracha expandida.',
    price: 349.9,
    originalPrice: 449.9,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Vermelho', hex: '#dc2626' },
      { name: 'Preto', hex: '#171717' },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: 'corrida',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'urban-flow',
    name: 'Urban Flow',
    brand: 'Kazenami',
    description: 'Casual premium para o dia a dia. Couro sintético macio com palmilha anatômica.',
    price: 279.9,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Azul', hex: '#2563eb' },
      { name: 'Branco', hex: '#fafafa' },
      { name: 'Preto', hex: '#171717' },
    ],
    sizes: [37, 38, 39, 40, 41, 42, 43],
    category: 'casual',
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'trail-grip-pro',
    name: 'Trail Grip Pro',
    brand: 'Kazenami',
    description: 'Para trilhas técnicas. Solado Vibram com tração agressiva e proteção contra pedras.',
    price: 499.9,
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Verde', hex: '#16a34a' },
      { name: 'Cinza', hex: '#78716c' },
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    category: 'trail',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '4',
    slug: 'classic-leather',
    name: 'Classic Leather',
    brand: 'Kazenami',
    description: 'Elegância atemporal. Couro legítimo italiano com acabamento artesanal.',
    price: 599.9,
    originalPrice: 749.9,
    images: [
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Marrom', hex: '#92400e' },
      { name: 'Preto', hex: '#171717' },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    category: 'social',
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'boost-elite',
    name: 'Boost Elite',
    brand: 'Kazenami',
    description: 'Performance máxima. Placa de carbono com espuma reativa para corridas de longa distância.',
    price: 699.9,
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Laranja', hex: '#ea580c' },
      { name: 'Preto', hex: '#171717' },
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    category: 'corrida',
    isNew: true,
  },
  {
    id: '6',
    slug: 'everyday-comfort',
    name: 'Everyday Comfort',
    brand: 'Kazenami',
    description: 'Conforto o dia inteiro. Knit flexível com amortecimento em gel.',
    price: 219.9,
    originalPrice: 289.9,
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Cinza', hex: '#78716c' },
      { name: 'Branco', hex: '#fafafa' },
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    category: 'casual',
  },
  {
    id: '7',
    slug: 'sport-max',
    name: 'Sport Max',
    brand: 'Kazenami',
    description: 'Treino intenso. Suporte lateral reforçado para academia e crossfit.',
    price: 389.9,
    images: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Branco', hex: '#fafafa' },
      { name: 'Preto', hex: '#171717' },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: 'treino',
  },
  {
    id: '8',
    slug: 'slide-zen',
    name: 'Slide Zen',
    brand: 'Kazenami',
    description: 'Recuperação pós-treino. Espuma ultra-macia com suporte de arco.',
    price: 149.9,
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&h=1000&fit=crop&q=80',
    ],
    colors: [
      { name: 'Preto', hex: '#171717' },
      { name: 'Bege', hex: '#d6d3d1' },
    ],
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    category: 'casual',
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured)
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew)
}

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))]
}
