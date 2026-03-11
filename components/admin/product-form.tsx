'use client'

import { useState, useCallback, useRef, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ImagePlus, Loader2, X } from 'lucide-react'
import { createProduct, updateProduct } from '@/lib/actions/products'
import type { Product } from '@/lib/types/product'

const categories = ['corrida', 'casual', 'trail', 'social', 'treino']
const allSizes = Array.from({ length: 32 }, (_, i) => i + 16)

const inputClass =
  'w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-foreground transition-colors'

const labelClass = 'block text-xs font-medium text-muted-foreground mb-1.5'

type ImageItem =
  | { type: 'uploaded'; url: string }
  | { type: 'uploading'; preview: string }

interface ProductFormProps {
  product?: Product
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter()
  const isEditing = !!product
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()

  const [name, setName] = useState(product?.name ?? '')
  const [slug, setSlug] = useState(product?.slug ?? '')
  const [brand, setBrand] = useState(product?.brand ?? 'Kenzaro')
  const [description, setDescription] = useState(product?.description ?? '')
  const [price, setPrice] = useState(product?.price?.toString() ?? '')
  const [originalPrice, setOriginalPrice] = useState(product?.originalPrice?.toString() ?? '')
  const [category, setCategory] = useState(product?.category ?? '')
  const [images, setImages] = useState<ImageItem[]>(
    product?.images?.map((url) => ({ type: 'uploaded' as const, url })) ?? [],
  )
  const [selectedSizes, setSelectedSizes] = useState<number[]>(product?.sizes ?? [])
  const [isNew, setIsNew] = useState(product?.isNew ?? false)
  const [isFeatured, setIsFeatured] = useState(product?.isFeatured ?? false)

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  function handleNameChange(value: string) {
    setName(value)
    setSlug(generateSlug(value))
  }

  function toggleSize(size: number) {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size].sort((a, b) => a - b),
    )
  }

  const uploadFile = useCallback(async (file: File, preview: string) => {
    const formData = new FormData()
    formData.append('files', file)
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      if (!res.ok) throw new Error('Upload failed')
      const { urls } = await res.json()
      setImages((prev) =>
        prev.map((img) =>
          img.type === 'uploading' && img.preview === preview
            ? { type: 'uploaded' as const, url: urls[0] }
            : img,
        ),
      )
    } catch {
      setImages((prev) => prev.filter((img) => !(img.type === 'uploading' && img.preview === preview)))
    } finally {
      URL.revokeObjectURL(preview)
    }
  }, [])

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files) return

    for (const file of Array.from(files)) {
      const preview = URL.createObjectURL(file)
      setImages((prev) => [...prev, { type: 'uploading', preview }])
      uploadFile(file, preview)
    }

    e.target.value = ''
  }

  async function removeImage(index: number) {
    const img = images[index]
    if (img.type === 'uploaded') {
      await fetch('/api/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: img.url }),
      })
    }
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const uploadedUrls = images
      .filter((img): img is { type: 'uploaded'; url: string } => img.type === 'uploaded')
      .map((img) => img.url)

    const input = {
      slug,
      name,
      brand,
      description,
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : null,
      images: uploadedUrls,
      colors: [] as { name: string; hex: string }[],
      sizes: selectedSizes,
      category,
      isNew,
      isFeatured,
    }

    startTransition(async () => {
      if (isEditing) {
        await updateProduct(product.id, input)
      } else {
        await createProduct(input)
      }
    })
  }

  const uploading = images.some((img) => img.type === 'uploading')
  const saving = isPending

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sidebar — Fotos */}
      <div className="lg:col-span-1 order-first">
        <div className="lg:sticky lg:top-20 space-y-6">
          <div className="bg-background border border-border rounded-xl p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Fotos do produto
            </h2>

            {/* Image grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-surface group">
                    {img.type === 'uploaded' ? (
                      <>
                        <Image src={img.url} alt={`Foto ${i + 1}`} fill sizes="150px" className="object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1.5 right-1.5 size-6 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="size-3.5" />
                        </button>
                        {i === 0 && (
                          <span className="absolute bottom-1.5 left-1.5 text-[10px] font-bold bg-foreground text-background px-1.5 py-0.5 rounded">
                            Principal
                          </span>
                        )}
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="size-5 animate-spin text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Upload button */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full aspect-[3/1] rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1.5 text-muted-foreground hover:border-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <ImagePlus className="size-5" />
              <span className="text-xs font-medium">Adicionar fotos</span>
            </button>
          </div>

          {/* Visibilidade */}
          <div className="bg-background border border-border rounded-xl p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">Visibilidade</h2>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={isNew}
                  onChange={(e) => setIsNew(e.target.checked)}
                  className="w-4 h-4 accent-foreground"
                />
                Novo
              </label>
              <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 accent-foreground"
                />
                Destaque
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main — Informações */}
      <div className="lg:col-span-2 space-y-6">
        {/* Info */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">Informações</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className={labelClass}>Nome</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                className={inputClass}
                placeholder="Runner X1"
              />
            </div>
            <div>
              <label htmlFor="brand" className={labelClass}>Marca</label>
              <input
                id="brand"
                type="text"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className={inputClass}
                placeholder="Kenzaro"
              />
            </div>
            <div>
              <label htmlFor="description" className={labelClass}>Descrição</label>
              <textarea
                id="description"
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Descrição do produto..."
              />
            </div>
          </div>
        </div>

        {/* Categoria */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">Categoria</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-2 rounded-lg border text-sm font-medium transition-all capitalize ${
                  category === cat
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Preço */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">Preço</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className={labelClass}>Preço (R$)</label>
              <input
                id="price"
                type="number"
                step="0.01"
                min="0"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={inputClass}
                placeholder="349.90"
              />
            </div>
            <div>
              <label htmlFor="originalPrice" className={labelClass}>Preço original (R$)</label>
              <input
                id="originalPrice"
                type="number"
                step="0.01"
                min="0"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className={inputClass}
                placeholder="449.90 (opcional)"
              />
            </div>
          </div>
        </div>

        {/* Tamanhos */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">Tamanhos</h2>
          <div className="flex flex-wrap gap-2">
            {allSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                className={`w-11 h-11 rounded-lg border text-sm font-medium transition-all ${
                  selectedSizes.includes(size)
                    ? 'bg-foreground border-foreground text-background'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={uploading || saving}
            className="px-6 py-2.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {uploading ? 'Enviando fotos...' : saving ? 'Salvando...' : isEditing ? 'Salvar alterações' : 'Criar produto'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  )
}
