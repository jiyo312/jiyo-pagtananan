'use client'

import { useRef, useState } from 'react'
import { LuAward } from 'react-icons/lu'
import { certificates } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'
import ImageLightbox from './ImageLightbox'

function Certificates() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(
    null,
  )

  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  const arrowClass =
    'grid place-items-center w-10 h-10 rounded-full border bg-transparent text-white text-[18px] transition duration-200 hover:border-green hover:text-green'

  return (
    <section id="certificates" className={section}>
      <div className={wrap}>
        <div className="mb-[30px] flex items-end justify-between gap-4">
          <div>
            <div className={eyebrow}>Certificates</div>
            <h2 className={heading}>Verified Learning</h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous certificates"
              className={arrowClass}
              style={{ borderColor: LINE }}
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next certificates"
              className={arrowClass}
              style={{ borderColor: LINE }}
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]"
        >
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className="flex flex-col shrink-0 snap-start w-[min(220px,70%)] bg-surface border rounded-[14px] overflow-hidden transition-[border-color] duration-200 hover:border-[rgba(67,211,107,0.55)]"
              style={{ borderColor: LINE }}
            >
              {cert.image ? (
                <button
                  type="button"
                  className="group relative w-full h-[130px] overflow-hidden cursor-zoom-in"
                  onClick={() =>
                    setPreview({ src: cert.image!, alt: `${cert.title} certificate` })
                  }
                  aria-label={`View ${cert.title} certificate`}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover transition duration-200 group-hover:scale-[1.03]"
                  />
                </button>
              ) : (
                <div className="grid place-items-center h-[130px] bg-[linear-gradient(135deg,#1e4c3e,#152c43)] text-green text-[40px]">
                  <LuAward aria-hidden />
                </div>
              )}
              <div className="flex grow flex-col p-4">
                <h3 className="text-[15px] leading-snug mb-2">{cert.title}</h3>
                {cert.url ? (
                  <a
                    className="mt-auto self-start inline-flex items-center min-h-[36px] text-[13px] text-[#76c9ff] font-semibold hover:text-green"
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cert.linkLabel ?? 'View credential'} →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview ? (
        <ImageLightbox
          src={preview.src}
          alt={preview.alt}
          onClose={() => setPreview(null)}
        />
      ) : null}
    </section>
  )
}

export default Certificates
