const currencyFmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatCurrency(value: number): string {
  return currencyFmt.format(value)
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`
}
