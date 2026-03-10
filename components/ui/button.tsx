import { cn } from '@/lib/utils/cn'

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  dark: 'bg-foreground text-background hover:bg-foreground/90',
  secondary: 'bg-surface text-foreground hover:bg-surface/80',
  outline: 'border border-input bg-transparent hover:bg-surface',
  ghost: 'bg-transparent hover:bg-surface',
  destructive: 'bg-destructive text-white hover:bg-destructive/90',
} as const

const sizes = {
  sm: 'h-8 px-4 text-xs gap-1.5',
  md: 'h-10 px-5 text-sm gap-2',
  lg: 'h-12 px-8 text-sm gap-2.5',
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
        'inline-flex items-center justify-center rounded-full font-bold transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        'active:scale-[0.97] transition-transform duration-100',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
