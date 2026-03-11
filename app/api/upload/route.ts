import { NextResponse } from 'next/server'
import cloudinary, { extractPublicId } from '@/lib/cloudinary'

const MAX_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']

function uploadBuffer(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'kenzaro',
        resource_type: 'image',
        transformation: [{ quality: 'auto:good' }, { fetch_format: 'auto' }],
      },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error('Upload failed'))
        resolve(result.secure_url)
      },
    )
    stream.end(buffer)
  })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files') as File[]

    if (files.length === 0) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 })
    }

    const urls: string[] = []

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: `Tipo não permitido: ${file.type}. Use JPEG, PNG, WebP ou GIF.` },
          { status: 400 },
        )
      }

      if (file.size > MAX_SIZE) {
        return NextResponse.json({ error: 'Arquivo muito grande. Máximo: 10MB.' }, { status: 400 })
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const url = await uploadBuffer(buffer)
      urls.push(url)
    }

    return NextResponse.json({ urls })
  } catch {
    return NextResponse.json({ error: 'Erro no upload' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { url } = await request.json()
    const publicId = extractPublicId(url)

    if (!publicId) {
      return NextResponse.json({ error: 'URL inválida' }, { status: 400 })
    }

    await cloudinary.uploader.destroy(publicId)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erro ao deletar imagem' }, { status: 500 })
  }
}
