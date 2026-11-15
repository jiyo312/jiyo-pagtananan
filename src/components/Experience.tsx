import type { RolePoint, RolePointTag } from '../portfolio-data'
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
    label: 'Maintain',
    title: 'Maintain — resolving minor bug fixes and improvements',
    className:
      'bg-[rgba(246,173,85,0.12)] text-[#f6ad55] border-[rgba(246,173,85,0.35)]',
  },
}

function PointList({ points }: { points: RolePoint[] }) {
  return (
    <ul className="text-[#c8d5e3] m-0 space-y-1.5">
      {points.map((point, i) => {
        const badge = tagStyles[point.tag]
        return (
          <li
            className="flex flex-wrap items-center gap-x-2 gap-y-1"
            key={point.text + point.tag + i}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
              {point.text}
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border cursor-help ${badge.className}`}
              title={badge.title}
            >
              {badge.label}
            </span>
          </li>
        )
      })}
    </ul>
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
