'use client'

import { useRef, useState } from 'react'
import { testimonials, type Testimonial } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

function TestimonialCard({ t }: { t: Testimonial }) {
  const [active, setActive] = useState(0)
  const hasTabs = t.quotes.length > 1

  return (
    <figure
      className="m-0 rounded-2xl border p-8 bg-[rgba(255,255,255,0.02)] max-[620px]:p-5"
      style={{ borderColor: LINE }}
    >
      {hasTabs && (
        <div role="tablist" className="flex gap-2 mb-4">
          {t.quotes.map((_, i) => (
            <button
              key={i}
              role="tab"
              type="button"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold border transition duration-200 ${
                active === i
                  ? 'bg-green-dark text-white border-green'
                  : 'bg-transparent text-[#d0dce9] border-[#6b7a8d] hover:border-green'
              }`}
            >
              Feedback {i + 1}
            </button>
          ))}
        </div>
      )}
      <blockquote
        role={hasTabs ? 'tabpanel' : undefined}
        className="m-0 text-[#d0dce9] text-[16px] leading-relaxed"
      >
        <span
          className="text-green text-[32px] leading-none mr-1"
          aria-hidden
        >
          “
        </span>
        {t.quotes[active]}
      </blockquote>
      <figcaption className="mt-5">
        <div className="font-bold text-[#f0f6fc]">{t.name}</div>
        <div className="text-muted text-[13px] mt-1">
          {t.role}, {t.org}
        </div>
      </figcaption>
    </figure>
  )
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
  }

  const arrowClass =
    'grid place-items-center w-10 h-10 rounded-full border bg-transparent text-white text-[18px] transition duration-200 hover:border-green hover:text-green'

  return (
    <section id="testimonials" className={section}>
      <div className={wrap}>
        <div className="mb-[30px] flex items-end justify-between gap-4">
          <div>
            <div className={eyebrow}>Testimonials</div>
            <h2 className={heading}>What Colleagues Say</h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous testimonials"
              className={arrowClass}
              style={{ borderColor: LINE }}
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
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
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 items-start [scrollbar-width:thin]"
        >
          {testimonials.map((t) => (
            <div
              key={t.name + t.org}
              className="snap-start shrink-0 w-[min(560px,88%)]"
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
