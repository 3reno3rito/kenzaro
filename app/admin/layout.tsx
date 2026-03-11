'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Package, LayoutDashboard } from 'lucide-react'

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/produtos', label: 'Produtos', icon: Package },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-border bg-surface/50">
        <div className="sticky top-0 flex flex-col h-screen">
          <div className="flex items-center h-14 px-5 border-b border-border">
            <Link href="/admin" className="text-base font-extrabold tracking-tight">
              kenzaro <span className="text-xs font-semibold text-muted-foreground ml-1">admin</span>
            </Link>
          </div>
          <nav className="flex-1 p-3 space-y-0.5">
            {sidebarLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? 'font-bold text-foreground bg-surface'
                      : 'font-medium text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="p-3 border-t border-border">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            >
              Voltar à loja
            </Link>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 min-w-0">
        <div className="p-6 sm:p-8">{children}</div>
      </main>
    </div>
  )
}
