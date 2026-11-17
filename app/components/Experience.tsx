import { impactItems, roles } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

function RoleTitle({ title }: { title: string }) {
  const [team, ...rest] = title.split(' · ')
  const role = rest.join(' · ')

  if (!role) {
    return <span className="font-bold text-[#f0f6fc]">{team}</span>
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1">
      <span className="font-bold text-[#f0f6fc]">{team}</span>
      <span className="text-[#2d7d4c]" aria-hidden>
        |
      </span>
      <span className="font-semibold text-[#dce8f5]">{role}</span>
    </span>
  )
}

function Experience() {
  return (
    <section id="experience" className={section}>
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Experience</div>
          <h2 className={heading}>A Journey of Impact at IRRI</h2>
        </div>
        <div className="grid gap-[42px] grid-cols-[1.5fr_0.8fr] max-[850px]:grid-cols-1">
          <div className="border-l-2 border-[#2d7d4c] pl-[25px]">
            {roles.map((role) => (
              <article
                className="relative pb-9 before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green before:left-[-32px] before:top-[6px] before:shadow-[0_0_0_5px_rgba(67,211,107,0.12)]"
                key={role.title + role.dateRange}
              >
                <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-8 gap-y-2 max-[620px]:grid-cols-1">
                  <div>
                    <h3 className="text-[16px] leading-snug m-0">
                      <RoleTitle title={role.title} />
                    </h3>
                    <div className="text-muted text-[13px] mt-1">
                      {role.dateRange}
                    </div>
                  </div>
                  <ul className="m-0 space-y-1.5">
                    {role.points.map((point, i) => (
                      <li
                        className="flex items-start gap-2.5 text-[#d0dce9] text-[14px] leading-snug"
                        key={point.text + point.tag + i}
                      >
                        <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-green" />
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
