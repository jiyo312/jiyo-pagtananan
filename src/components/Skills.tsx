import { skills } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'

function Skills() {
  return (
    <section className={`${section} bg-[#0d1a2a]`} id="skills">
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Technical skills</div>
          <h2 className={heading}>Tools and Technologies I Work With</h2>
          <p className="text-muted max-w-[720px] mt-3">
            Replace or expand these with your exact stack and strengths.
          </p>
        </div>
        <div className="grid grid-cols-8 gap-3 max-[850px]:grid-cols-4 max-[620px]:grid-cols-2">
          {skills.map((skill) => (
            <div
              className="text-center px-2 py-[18px] bg-surface border rounded-xl text-sm"
              style={{ borderColor: LINE }}
              key={skill.name}
            >
              <span className="block text-green text-[25px] mb-1.5">
                {skill.icon}
              </span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
