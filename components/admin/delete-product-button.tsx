'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { deleteProduct } from '@/lib/actions/products'

export function DeleteProductButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  function handleDelete() {
    if (!confirm('Excluir este produto?')) return
    startTransition(async () => {
      await deleteProduct(id)
      router.refresh()
    })
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      className="text-xs font-semibold text-red-500 hover:text-red-600 transition-colors disabled:opacity-50"
    >
      {isPending ? 'Excluindo...' : 'Excluir'}
    </button>
  )
}
