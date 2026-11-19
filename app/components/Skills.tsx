import { skillCategories, type SkillItem } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

// Only these skills are shown, grouped into stacks. Names must match portfolio-data.ts.
const stacks = [
  {
    label: 'Stack 1',
    sub: 'Modern full stack',
    names: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    label: 'Stack 2',
    sub: 'Cross-platform full stack',
    names: ['Angular', 'Ionic Framework', 'Slim PHP', 'MySQL', 'MongoDB', 'AWS'],
  },
  {
    label: 'Stack 3',
    sub: 'Traditional full stack',
    names: ['Laravel', 'Bootstrap'],
  },
  {
    label: 'Extra',
    sub: undefined,
    names: ['Git', 'Docker', 'Liquibase', 'Nginx', 'Terraform', 'Jenkins'],
  },
]

const allItems = skillCategories.flatMap((category) => category.items)
const findItem = (name: string) => allItems.find((item) => item.name === name)

function SkillCard({ item }: { item: SkillItem }) {
  const ItemIcon = item.icon
  return (
    <div
      className="shrink-0 w-[120px] snap-start flex flex-col items-center justify-center text-center px-2 py-[18px] bg-surface border rounded-xl text-sm"
      style={{ borderColor: LINE }}
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
}

function Skills() {
  return (
    <section className={`${section} bg-[#0d1a2a]`} id="skills">
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Technical skills</div>
          <h2 className={heading}>Tools and Technologies I Work With</h2>
          <p className="text-muted max-w-[720px] mt-3">
            Three full-stack setups I build with, plus the tools I use across
            all of them.
          </p>
        </div>

        <div className="grid gap-6">
          {stacks.map((stack) => (
            <div key={stack.label}>
              <div className="text-green uppercase tracking-[0.12em] font-extrabold text-[13px] mb-3">
                {stack.label}
                {stack.sub && (
                  <span className="text-muted normal-case tracking-normal font-semibold">
                    {' '}
                    · {stack.sub}
                  </span>
                )}
              </div>
              <div className="flex gap-3 overflow-x-auto pb-3 skill-scroll snap-x">
                {stack.names.map((name) => {
                  const item = findItem(name)
                  return item ? <SkillCard item={item} key={name} /> : null
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
