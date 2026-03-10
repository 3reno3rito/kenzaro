import { cn } from '@/lib/utils/cn'

const variants = {
  default: 'bg-foreground text-background',
  secondary: 'bg-secondary text-foreground',
  outline: 'border border-border text-muted-foreground',
  success: 'bg-success/10 text-success',
  destructive: 'bg-destructive/10 text-destructive',
} as const

interface BadgeProps {
  variant?: keyof typeof variants
  className?: string
  children: React.ReactNode
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
