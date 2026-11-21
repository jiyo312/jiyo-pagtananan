'use client'

import { useState } from 'react'
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
  return (
    <section id="testimonials" className={section}>
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Testimonials</div>
          <h2 className={heading}>What Colleagues Say</h2>
        </div>
        <div className="grid gap-6 grid-cols-2 max-[850px]:grid-cols-1 items-start">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name + t.org} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
