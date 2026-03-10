import { Container } from '@/components/ui/container'
import { CartContent } from '@/components/cart/cart-content'

export const metadata = {
  title: 'Carrinho',
  description: 'Seu carrinho de compras.',
}

export default function CarrinhoPage() {
  return (
    <Container className="py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">Carrinho</h1>
      <CartContent />
    </Container>
  )
}
