'use client'

import { useState } from 'react'
import { LuGraduationCap } from 'react-icons/lu'
import { awards, education } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'
import ImageLightbox from './ImageLightbox'

const cardClass =
  'flex gap-6 items-center h-full bg-surface border rounded-[18px] p-6 transition-[border-color] duration-200 hover:border-[rgba(67,211,107,0.55)] max-[620px]:flex-col max-[620px]:items-start'

function Awards() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(
    null,
  )

  return (
    <section id="awards" className={section}>
      <div
        className={`${wrap} grid gap-10 grid-cols-2 max-[850px]:grid-cols-1`}
      >
        <div>
          <div className="mb-[30px]">
            <div className={eyebrow}>Awards</div>
            <h2 className={heading}>Recognition</h2>
          </div>
          <div className="grid gap-5">
            {awards.map((award) => (
              <article
                key={award.title}
                className={cardClass}
                style={{ borderColor: LINE }}
              >
                <button
                  type="button"
                  className="group shrink-0 w-[140px] h-[186px] rounded-xl overflow-hidden cursor-zoom-in max-[620px]:w-full max-[620px]:h-[240px]"
                  onClick={() =>
                    setPreview({
                      src: award.image,
                      alt: `${award.title} award`,
                    })
                  }
                  aria-label={`View ${award.title} award`}
                >
                  <img
                    src={award.image}
                    alt={`${award.title} award`}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-200 group-hover:scale-[1.03]"
                  />
                </button>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[22px] leading-snug mb-3">
                    {award.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed m-0">
                    {award.context}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[30px]">
            <div className={eyebrow}>Education</div>
            <h2 className={heading}>Academic Background</h2>
          </div>
          <div className="grid gap-5">
            {education.map((item) => (
              <article
                key={item.degree}
                className={cardClass}
                style={{ borderColor: LINE }}
              >
                <div
                  className="shrink-0 grid place-items-center w-[140px] h-[186px] rounded-xl bg-[linear-gradient(135deg,#1e4c3e,#152c43)] text-green text-[56px] max-[620px]:w-full max-[620px]:h-[120px]"
                  aria-hidden
                >
                  <LuGraduationCap />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[22px] leading-snug mb-3">
                    {item.degree}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed m-0">
                    {item.school}, {item.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
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

export default Awards
