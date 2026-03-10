import { cn } from '@/lib/utils/cn'

const variants = {
  default: 'bg-foreground text-background',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-surface text-foreground',
  outline: 'border border-input text-muted-foreground',
  success: 'bg-success/15 text-success',
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
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
