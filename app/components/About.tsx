import { stats } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

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
            I'm a Full Stack Engineer based in Los Baños, Philippines, with 7+
            years of experience in agricultural research and development. I
            create scalable digital solutions that
            empower researchers to develop improved crop varieties faster and
            help bring innovative farming practices to more farmers.
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
