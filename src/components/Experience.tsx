import { impactItems, roles } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'

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
                className="relative pb-7 before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green before:left-[-32px] before:top-[7px] before:shadow-[0_0_0_5px_rgba(67,211,107,0.12)]"
                key={role.title + role.date}
              >
                <h3 className="text-[18px] m-0">{role.title}</h3>
                <div className="text-muted text-sm mt-[3px] mb-2.5">
                  {role.date}
                </div>
                <ul className="text-[#c8d5e3] m-0 pl-[18px] list-disc">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
