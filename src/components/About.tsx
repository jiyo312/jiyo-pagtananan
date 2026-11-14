import { stats } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'

function About() {
  return (
    <section id="about" className={section}>
      <div
        className={`${wrap} grid gap-[38px] items-start grid-cols-[1.3fr_1fr] max-[850px]:grid-cols-1`}
      >
        <div>
          <div className={eyebrow}>About me</div>
          <h2 className={heading}>
            From Rice Research
            <br />
            to Software Engineering
          </h2>
          <p className="text-[#d2deea] text-[17px] mt-3">
            I'm a Full Stack Engineer from the Philippines, with 7+ years of
            experience at the International Rice Research Institute (IRRI). I
            previously worked in rice research and development in Los Baños,
            where I turned complex scientific workflows into scalable web and
            mobile solutions.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 max-[850px]:mt-2.5 max-[620px]:grid-cols-1">
          {stats.map((stat) => (
            <div
              className="px-4 py-2 border-l max-[620px]:border-l-0 max-[620px]:border-t max-[620px]:py-3.5"
              style={{ borderColor: LINE }}
              key={stat.title}
            >
              <div className="text-green text-[27px]">{stat.symbol}</div>
              <strong className="block my-[7px]">{stat.title}</strong>
              <p className="text-muted text-sm m-0">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
