import { useState } from 'react'
import { LuArrowRight, LuCode, LuSparkles, LuUsers, LuZap } from 'react-icons/lu'
import type { Role, RolePoint, RolePointTag } from '../portfolio-data'
import { impactItems, roles } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'

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
}

function PointList({ points }: { points: RolePoint[] }) {
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
          </div>
        )
      })}
    </div>
  )
}

type TabKey = 'contribution' | 'strengths' | 'teamImpact'

function ImpactCard({ role }: { role: Role }) {
  const tabs: { key: TabKey; label: string }[] = []
  if (role.strengths) tabs.push({ key: 'strengths', label: 'Strengths' })
  if (role.teamImpact) tabs.push({ key: 'teamImpact', label: 'Team impact' })
  if (role.contribution) tabs.push({ key: 'contribution', label: 'Contribution' })

  const [active, setActive] = useState<TabKey | null>(tabs[0]?.key ?? null)

  if (!role.summary) return null

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
            {active === 'contribution' && role.contribution ? (
              <ul className="space-y-3 m-0">
                {role.contribution.map((c, i) => (
                  <li
                    className="flex flex-col gap-1.5 text-[#c8d5e3] text-[13px] leading-relaxed"
                    key={c.label + i}
                  >
                    <span
                      className={`self-start text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${tagStyles[c.tag].className}`}
                    >
                      {c.label}
                    </span>
                    <span>{c.text}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {active === 'strengths' && role.strengths ? (
              <>
                <p className="text-[#c8d5e3] text-[13px] leading-relaxed m-0 mb-2.5">
                  {role.strengths.intro}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.strengths.items.map((item) => (
                    <span
                      className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(67,211,107,0.14)] text-green border border-[rgba(67,211,107,0.4)]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            ) : null}

            {active === 'teamImpact' && role.teamImpact ? (
              <p className="text-[#c8d5e3] text-[13px] leading-relaxed m-0">
                {role.teamImpact}
              </p>
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
            {(['build', 'rebuild', 'maintain'] as const).map((tag) => (
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
