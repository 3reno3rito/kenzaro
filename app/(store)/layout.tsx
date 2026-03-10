import { Suspense } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/lib/cart/cart-context'
import { ToastProvider } from '@/components/ui/toast'

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ToastProvider>
        <Suspense>
          <Header />
        </Suspense>
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </ToastProvider>
    </CartProvider>
  )
}
