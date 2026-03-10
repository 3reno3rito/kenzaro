import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Kazenami',
    template: '%s | Kazenami',
  },
  description: 'Calzados de alto rendimiento con diseño contemporaneo.',
}

export const viewport: Viewport = {
  themeColor: '#fafaf9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
