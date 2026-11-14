import { skillCategories } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'

function Skills() {
  return (
    <section className={`${section} bg-[#0d1a2a]`} id="skills">
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Technical skills</div>
          <h2 className={heading}>Tools and Technologies I Work With</h2>
          <p className="text-muted max-w-[720px] mt-3">
            A full-stack toolkit spanning languages, frameworks, cloud
            infrastructure, and the practices that tie them together.
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-3 skill-scroll snap-x">
          {skillCategories.flatMap((category) =>
            category.items.map((item) => {
              const ItemIcon = item.icon
              return (
                <div
                  className="shrink-0 w-[120px] snap-start flex flex-col items-center justify-center text-center px-2 py-[18px] bg-surface border rounded-xl text-sm"
                  style={{ borderColor: LINE }}
                  key={item.name}
                >
                  {item.fullColor ? (
                    <ItemIcon size={30} className="aws-blend mb-2" aria-hidden />
                  ) : (
                    <ItemIcon
                      className="text-[28px] mb-2"
                      style={{ color: item.color ?? 'var(--color-green)' }}
                      aria-hidden
                    />
                  )}
                  {item.name}
                </div>
              )
            }),
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
