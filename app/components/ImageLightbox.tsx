'use client'

import { useEffect } from 'react'
import { LuX } from 'react-icons/lu'

interface ImageLightboxProps {
  src: string
  alt: string
  onClose: () => void
}

function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white hover:border-green hover:text-green transition"
        aria-label="Close"
        onClick={onClose}
      >
        <LuX className="text-[22px]" aria-hidden />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default ImageLightbox
