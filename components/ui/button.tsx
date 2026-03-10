import { cn } from '@/lib/utils/cn'

const variants = {
  primary: 'bg-foreground text-background hover:bg-foreground/90',
  secondary: 'bg-secondary text-foreground hover:bg-secondary/80',
  outline: 'border border-border bg-transparent hover:bg-secondary',
  ghost: 'bg-transparent hover:bg-secondary',
  destructive: 'bg-destructive text-white hover:bg-destructive/90',
} as const

const sizes = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
  icon: 'h-10 w-10 p-0',
  'icon-sm': 'h-8 w-8 p-0',
} as const

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        'active:scale-[0.98] transition-transform duration-100',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
