'use client'

import { useEffect } from 'react'
import { LuArrowRight, LuExternalLink, LuX } from 'react-icons/lu'
import type { CaseStudy } from '../portfolio-data'
import { LINE } from '../styles'

interface ProjectModalProps {
  caseStudy: CaseStudy
  onClose: () => void
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="text-green uppercase tracking-[0.12em] font-extrabold text-[12px] mb-4">
      {children}
    </div>
  )
}

function ProjectModal({ caseStudy, onClose }: ProjectModalProps) {
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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/75 backdrop-blur-sm p-4 max-[620px]:p-0"
      role="dialog"
      aria-modal="true"
      aria-label={caseStudy.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] my-10 max-[620px]:my-0 bg-bg border rounded-[20px] max-[620px]:rounded-none overflow-hidden"
        style={{ borderColor: LINE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-9 pt-9 pb-8 max-[620px]:px-5 max-[620px]:pt-6 bg-[radial-gradient(ellipse_at_85%_0%,#234b47_0,transparent_55%),linear-gradient(135deg,#0d1f30,#0a1726)]">
          <button
            className="absolute top-5 right-5 grid place-items-center w-10 h-10 rounded-full bg-[rgba(8,19,33,0.6)] border text-white hover:border-green hover:text-green transition"
            style={{ borderColor: LINE }}
            aria-label="Close"
            onClick={onClose}
          >
            <LuX className="text-[20px]" aria-hidden />
          </button>

          <SectionLabel>Case study</SectionLabel>
          <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.05] max-w-[640px]">
            {caseStudy.title}
          </h2>
          {caseStudy.liveUrl ? (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#76c9ff] hover:text-green mt-2"
            >
              <LuExternalLink className="text-[15px]" aria-hidden />
              Visit live site
            </a>
          ) : null}
          <p className="text-green font-semibold mt-3 max-w-[640px]">
            {caseStudy.tagline}
          </p>
          <p className="text-[#c8d5e3] leading-relaxed mt-4 max-w-[680px]">
            {caseStudy.summary}
          </p>

          {caseStudy.source ? (
            <a
              href={caseStudy.source.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#76c9ff] hover:text-green mt-3"
            >
              <LuExternalLink className="text-[15px]" aria-hidden />
              {caseStudy.source.label}
            </a>
          ) : null}

          <div className="flex flex-wrap gap-2 mt-6">
            {caseStudy.facts.map((fact) => (
              <span
                className="inline-flex items-center gap-1.5 text-[13px] px-3 py-1.5 rounded-full bg-[rgba(8,19,33,0.55)] border"
                style={{ borderColor: LINE }}
                key={fact.label}
              >
                <span className="text-muted">{fact.label}:</span>
                <span className="font-semibold">{fact.value}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Metrics strip */}
        <div
          className="grid grid-cols-4 max-[620px]:grid-cols-2 border-y"
          style={{ borderColor: LINE }}
        >
          {caseStudy.metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <div
                className="flex flex-col items-center text-center px-3 py-5 border-l first:border-l-0 max-[620px]:[&:nth-child(odd)]:border-l-0 max-[620px]:[&:nth-child(n+3)]:border-t"
                style={{ borderColor: LINE }}
                key={i}
              >
                <Icon className="text-green text-[22px] mb-2" aria-hidden />
                <div className="text-[20px] font-extrabold leading-none">
                  {metric.value}
                </div>
                <div className="text-muted text-[12px] mt-1.5">
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>

        <div className="px-9 py-9 max-[620px]:px-5 space-y-10">
          {/* Problem */}
          <section>
            <SectionLabel>The challenge</SectionLabel>
            <p className="text-[#c8d5e3] leading-relaxed mb-4">
              {caseStudy.problem.intro}
            </p>
            <ul className="space-y-2.5">
              {caseStudy.problem.points.map((point) => (
                <li
                  className="flex gap-3 text-[#c8d5e3] leading-relaxed"
                  key={point}
                >
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-green" />
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Legacy limitations */}
          <section>
            <SectionLabel>Limitations of the legacy system</SectionLabel>
            <p className="text-[#c8d5e3] leading-relaxed mb-5">
              {caseStudy.legacy.intro}
            </p>
            <div className="grid grid-cols-3 gap-4 max-[620px]:grid-cols-1">
              {caseStudy.legacy.items.map((item) => (
                <div
                  className="bg-surface border rounded-xl p-5"
                  style={{ borderColor: LINE }}
                  key={item.title}
                >
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-muted text-[13px] mb-2">
                Five independent apps were consolidated into one platform:
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.legacy.consolidatedApps.map((app) => (
                  <span
                    className="text-[12px] font-mono px-2.5 py-1 rounded-md bg-[#26384e] text-[#dce8f5]"
                    key={app}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Extended capabilities */}
          <section>
            <SectionLabel>What added after the rebuild</SectionLabel>
            <p className="text-[#c8d5e3] leading-relaxed mb-5">
              {caseStudy.features.intro}
            </p>
            <div className="grid grid-cols-2 gap-4 max-[620px]:grid-cols-1">
              {caseStudy.features.items.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    className="flex gap-4 bg-surface border rounded-xl p-5 transition hover:border-[rgba(67,211,107,0.55)]"
                    style={{ borderColor: LINE }}
                    key={feature.title}
                  >
                    <div
                      className="shrink-0 grid place-items-center w-11 h-11 rounded-lg bg-[rgba(67,211,107,0.12)]"
                    >
                      <Icon className="text-green text-[22px]" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-muted text-[14px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Modernization before/after */}
          <section>
            <SectionLabel>Technology modernization</SectionLabel>
            <p className="text-[#c8d5e3] leading-relaxed mb-5">
              {caseStudy.modernization.intro}
            </p>
            <div className="space-y-3">
              {caseStudy.modernization.changes.map((change) => (
                <div
                  className="flex items-stretch gap-3 max-[620px]:flex-col"
                  key={change.after}
                >
                  <div
                    className="flex-1 rounded-lg border border-dashed px-4 py-3 text-[14px] text-muted line-through decoration-[rgba(170,184,201,0.5)]"
                    style={{ borderColor: LINE }}
                  >
                    {change.before}
                  </div>
                  <div className="grid place-items-center text-green max-[620px]:rotate-90">
                    <LuArrowRight className="text-[20px]" aria-hidden />
                  </div>
                  <div className="flex-1 rounded-lg border px-4 py-3 text-[14px] font-medium bg-[rgba(67,211,107,0.08)] border-[rgba(67,211,107,0.4)]">
                    {change.after}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section>
            <SectionLabel>The impact</SectionLabel>
            <div className="grid grid-cols-2 gap-4 max-[620px]:grid-cols-1">
              {caseStudy.impact.map((item) => (
                <div
                  className="relative bg-surface border rounded-xl p-5 pl-6 overflow-hidden"
                  style={{ borderColor: LINE }}
                  key={item.audience}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-green" />
                  <div className="text-green font-semibold text-[14px] mb-1.5">
                    {item.audience}
                  </div>
                  <p className="text-[#c8d5e3] text-[14px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
