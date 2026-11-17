'use client'

import { useEffect, useState } from 'react'
import { LuArrowRight, LuSparkles, LuX } from 'react-icons/lu'
import type { Role, RolePoint, RolePointTag } from '../../app/portfolio-data'
import { impactItems, roles } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

const tagStyles: Record<
  RolePointTag,
  { label: string; title: string; className: string }
> = {
  build: {
    label: 'Build',
    title: 'Build — adding new features',
    className:
      'bg-[rgba(67,211,107,0.15)] text-green border-[rgba(67,211,107,0.4)]',
  },
  rebuild: {
    label: 'Rebuild',
    title: 'Rebuild — migrating from legacy to a modern application',
    className:
      'bg-[rgba(118,201,255,0.14)] text-[#76c9ff] border-[rgba(118,201,255,0.4)]',
  },
  maintain: {
    label: 'Legacy application',
    title: 'Legacy application — resolving minor bug fixes and improvements',
    className:
      'bg-[rgba(246,173,85,0.12)] text-[#f6ad55] border-[rgba(246,173,85,0.35)]',
  },
  improve: {
    label: 'Improvement',
    title: 'Improvement — refactoring and enhancements to existing code',
    className:
      'bg-[rgba(192,132,252,0.14)] text-[#c084fc] border-[rgba(192,132,252,0.4)]',
  },
  etl: {
    label: 'ETL',
    title: 'ETL — extract, transform, and load data pipelines',
    className:
      'bg-[rgba(94,234,212,0.12)] text-[#5eead4] border-[rgba(94,234,212,0.4)]',
  },
}

function NotableContributionsModal({
  title,
  items,
  onClose,
}: {
  title: string
  items: NonNullable<RolePoint['notableContributions']>
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/75 backdrop-blur-sm p-4 max-[620px]:p-0"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — notable contributions`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[640px] my-10 max-[620px]:my-0 bg-bg border rounded-[18px] max-[620px]:rounded-none"
        style={{ borderColor: LINE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-[rgba(8,19,33,0.6)] border text-white hover:border-green hover:text-green transition"
          style={{ borderColor: LINE }}
          aria-label="Close"
          onClick={onClose}
        >
          <LuX className="text-[20px]" aria-hidden />
        </button>
        <div className="px-7 py-7 max-[620px]:px-5">
          <div className="text-green uppercase tracking-[0.12em] font-extrabold text-[12px]">
            Notable contributions
          </div>
          <h3 className="text-[22px] font-extrabold tracking-[-0.02em] mt-1 mb-5 pr-10">
            {title}
          </h3>
          <ul className="space-y-3 m-0">
            {items.map((n) => (
              <li
                className="rounded-lg border bg-surface p-4"
                style={{ borderColor: LINE }}
                key={n.outcome}
              >
                <p className="text-[#c8d5e3] text-[14px] leading-relaxed m-0">
                  {n.outcome}
                </p>
                <span className="inline-block mt-2.5 text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#26384e] text-[#aab8c9]">
                  {n.tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PointList({ points }: { points: RolePoint[] }) {
  const [openPoint, setOpenPoint] = useState<RolePoint | null>(null)

  return (
    <div className="grid grid-cols-2 gap-2.5 max-[620px]:grid-cols-1">
      {points.map((point, i) => {
        const badge = tagStyles[point.tag]
        return (
          <div
            className="flex flex-col gap-2 bg-surface border rounded-lg p-3.5 transition hover:border-[rgba(67,211,107,0.5)]"
            style={{ borderColor: LINE }}
            key={point.text + point.tag + i}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#dce8f5] text-[14px] font-semibold leading-snug">
                {point.text}
                {point.abbr ? (
                  <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded-md bg-[#26384e] text-[#aab8c9]">
                    {point.abbr}
                  </span>
                ) : null}
              </span>
              <span
                className={`shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border cursor-help ${badge.className}`}
                title={badge.title}
              >
                {badge.label}
              </span>
            </div>
            {point.description ? (
              <p className="text-muted text-[13px] leading-snug">
                {point.description}
              </p>
            ) : null}
            {point.mergedInto ? (
              <div className="flex items-center gap-1.5">
                <LuArrowRight className="text-green text-[14px]" aria-hidden />
                <span className="text-[11px] text-muted">merged into</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[rgba(118,201,255,0.14)] text-[#76c9ff]">
                  {point.mergedInto}
                </span>
              </div>
            ) : null}
            {point.commitShare ? (
              <CommitShareChart share={point.commitShare} />
            ) : null}
            {point.notableContributions ? (
              <button
                type="button"
                onClick={() => setOpenPoint(point)}
                className="mt-1 inline-flex items-center gap-1.5 self-start text-[12px] font-semibold text-green hover:underline hover:underline-offset-4"
              >
                View notable contributions
                <LuArrowRight className="text-[14px]" aria-hidden />
              </button>
            ) : null}
          </div>
        )
      })}

      {openPoint?.notableContributions ? (
        <NotableContributionsModal
          title={openPoint.text}
          items={openPoint.notableContributions}
          onClose={() => setOpenPoint(null)}
        />
      ) : null}
    </div>
  )
}

function CommitShareChart({
  share,
}: {
  share: NonNullable<RolePoint['commitShare']>
}) {
  const size = 120
  const stroke = 14
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const youLen = (share.percent / 100) * circumference

  return (
    <div
      className="mt-2.5 flex items-center gap-5 max-[620px]:flex-col max-[620px]:text-center rounded-lg border bg-[rgba(8,19,33,0.35)] p-4"
      style={{ borderColor: 'rgba(67,211,107,0.25)' }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="shrink-0 -rotate-90"
        role="img"
        aria-label={`Contributed ${share.percent}% of commits`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#26384e"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#43d36b"
          strokeWidth={stroke}
          strokeDasharray={`${youLen} ${circumference - youLen}`}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          transform={`rotate(90 ${size / 2} ${size / 2})`}
          fill="#f4f7fb"
          fontSize="24"
          fontWeight="800"
        >
          {share.percent}%
        </text>
      </svg>

      <div className="max-[620px]:mt-1">
        <div className="text-green text-[11px] font-extrabold uppercase tracking-[0.12em] mb-1">
          My share
        </div>
        <p className="text-[#dce8f5] text-[14px] font-semibold m-0">
          {share.percent}% {share.label}
        </p>
        <p className="text-muted text-[12px] leading-relaxed m-0 mt-1 max-w-[340px]">
          {share.caption}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[12px] max-[620px]:justify-center">
          <span className="flex items-center gap-1.5 text-[#dce8f5]">
            <span className="w-2.5 h-2.5 rounded-full bg-green" />
            Me ({share.percent}%)
          </span>
          {share.percent < 100 ? (
            <span className="flex items-center gap-1.5 text-muted">
              <span className="w-2.5 h-2.5 rounded-full bg-[#26384e]" />
              Team of {share.teamCount} ({(100 - share.percent).toFixed(1)}%)
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

type TabKey = 'strengths' | 'teamImpact'

function ImpactCard({ role }: { role: Role }) {
  const tabs: { key: TabKey; label: string }[] = []
  if (role.strengths) tabs.push({ key: 'strengths', label: 'Strengths' })
  if (role.teamImpact) tabs.push({ key: 'teamImpact', label: 'Team impact' })

  const [active, setActive] = useState<TabKey | null>(tabs[0]?.key ?? null)

  if (tabs.length === 0 && !role.summary) return null

  return (
    <div
      className="mt-3.5 rounded-xl border overflow-hidden bg-[linear-gradient(135deg,rgba(67,211,107,0.1),rgba(67,211,107,0.02))]"
      style={{ borderColor: 'rgba(67,211,107,0.3)' }}
    >
      <div className="flex items-center gap-2 px-4 pt-3.5">
        <span className="grid place-items-center w-6 h-6 rounded-full bg-[rgba(67,211,107,0.18)]">
          <LuSparkles className="text-green text-[14px]" aria-hidden />
        </span>
        <span className="text-green text-[11px] font-extrabold uppercase tracking-[0.12em]">
          Impact
        </span>
      </div>

      {role.summary ? (
        <ul className="px-4 pt-2 space-y-1.5 m-0">
          {role.summary.map((para) => (
            <li
              className="flex gap-2.5 text-[#c8d5e3] text-[13px] leading-relaxed"
              key={para}
            >
              <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-green" />
              <span>{para}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {tabs.length > 0 ? (
        <div className="px-4 pb-4 pt-3.5">
          <div
            className="flex flex-wrap gap-1.5 border-b pb-2.5"
            style={{ borderColor: LINE }}
            role="tablist"
          >
            {tabs.map((tab) => {
              const isActive = tab.key === active
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.key)}
                  className={`text-[12px] font-semibold px-3 py-1.5 rounded-full transition ${
                    isActive
                      ? 'bg-green text-[#06231a]'
                      : 'text-muted hover:text-[#dce8f5]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="pt-3">
            {active === 'strengths' && role.strengths ? (
              <div className="space-y-4">
                {role.strengths.map((group) => (
                  <div key={group.intro}>
                    <p className="text-[#c8d5e3] text-[13px] leading-relaxed m-0 mb-2.5">
                      {group.intro}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(67,211,107,0.14)] text-green border border-[rgba(67,211,107,0.4)]"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {active === 'teamImpact' && role.teamImpact ? (
              <div className="grid grid-cols-2 gap-2.5 max-[620px]:grid-cols-1">
                {role.teamImpact.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      className="rounded-lg border bg-[rgba(8,19,33,0.35)] p-3"
                      style={{ borderColor: LINE }}
                      key={item.title}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="grid place-items-center w-7 h-7 rounded-md bg-[rgba(118,201,255,0.14)]">
                          <Icon
                            className="text-[#76c9ff] text-[15px]"
                            aria-hidden
                          />
                        </span>
                        <span className="text-[#dce8f5] text-[13px] font-semibold leading-snug">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-muted text-[12px] leading-relaxed m-0">
                        {item.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="pb-4" />
      )}
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className={section}>
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Experience</div>
          <h2 className={heading}>A Journey of Impact at IRRI</h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-[13px] text-muted">
            {(
              ['build', 'rebuild', 'maintain', 'improve', 'etl'] as const
            ).map((tag) => (
              <span className="flex items-center gap-2" key={tag}>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border ${tagStyles[tag].className}`}
                >
                  {tagStyles[tag].label}
                </span>
                {tagStyles[tag].title.split(' — ')[1]}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-[42px] grid-cols-[1.5fr_0.8fr] max-[850px]:grid-cols-1">
          <div className="border-l-2 border-[#2d7d4c] pl-[25px]">
            {roles.map((role) => (
              <article
                className="relative pb-7 before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green before:left-[-32px] before:top-[7px] before:shadow-[0_0_0_5px_rgba(67,211,107,0.12)]"
                key={role.title + role.dateRange}
              >
                <h3 className="text-[18px] m-0">
                  {role.title}
                  {' · '}
                  <span
                    className="relative group text-green font-semibold cursor-help underline decoration-dotted decoration-green/60 underline-offset-4"
                    tabIndex={0}
                  >
                    {role.duration}
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-0 bottom-full mb-2 whitespace-nowrap rounded-md bg-[#0b1726] border px-2.5 py-1.5 text-[12px] font-normal text-[#dce8f5] opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 z-10"
                      style={{ borderColor: LINE }}
                    >
                      {role.dateRange}
                    </span>
                  </span>
                </h3>
                <div className="text-muted text-sm mt-[3px] mb-2.5">
                  {role.location} · {role.workMode}
                </div>
                {(() => {
                  const mainPoints = role.points.filter((p) => !p.sideProject)
                  const sidePoints = role.points.filter((p) => p.sideProject)
                  const hasSide = sidePoints.length > 0
                  return (
                    <>
                      {hasSide ? (
                        <div className="text-muted text-[12px] uppercase tracking-wide font-semibold mb-1.5">
                          Main project
                        </div>
                      ) : null}
                      <PointList points={mainPoints} />
                      {hasSide ? (
                        <>
                          <div className="text-muted text-[12px] uppercase tracking-wide font-semibold mt-3 mb-1.5">
                            Side projects
                          </div>
                          <PointList points={sidePoints} />
                        </>
                      ) : null}
                    </>
                  )
                })()}
                <ImpactCard role={role} />
              </article>
            ))}
          </div>
          <aside
            className="border-l pl-7 max-[850px]:border-l-0 max-[850px]:pl-0"
            style={{ borderColor: LINE }}
          >
            <div className={eyebrow}>Key impact</div>
            {impactItems.map((item) => (
              <div
                className="flex gap-3.5 my-[18px] text-[#d0dce9]"
                key={item.text}
              >
                <span className="text-[23px] text-green">{item.icon}</span>
                <div>{item.text}</div>
              </div>
            ))}
          </aside>
        </div>

      </div>
    </section>
  )
}

export default Experience
