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

        <div className="flex flex-col gap-9">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div key={category.label}>
                <h3 className="text-green font-semibold text-[15px] mb-4 flex items-center gap-2">
                  <CategoryIcon className="text-[18px]" aria-hidden />
                  {category.label}
                </h3>
                <div className="grid grid-cols-8 gap-3 max-[850px]:grid-cols-4 max-[620px]:grid-cols-2">
                  {category.items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <div
                        className="flex flex-col items-center text-center px-2 py-[18px] bg-surface border rounded-xl text-sm"
                        style={{ borderColor: LINE }}
                        key={item.name}
                      >
                        {item.fullColor ? (
                          <ItemIcon
                            size={34}
                            className="mb-2 rounded-md"
                            aria-hidden
                          />
                        ) : (
                          <ItemIcon
                            className="text-[28px] mb-2"
                            style={{
                              color: item.color ?? 'var(--color-green)',
                            }}
                            aria-hidden
                          />
                        )}
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
