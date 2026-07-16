export function formatPrice(amount: number): string {
  return `AED ${amount.toLocaleString('en-AE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`
}
