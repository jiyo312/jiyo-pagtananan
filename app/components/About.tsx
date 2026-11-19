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
            Engineering software
            <br />
            that people rely on
          </h2>
          <p className="text-[#d2deea] text-[17px] mt-3 max-w-[520px]">
            Full Stack Engineer building web app systems for 7+ years.
          </p>
          <ul className="list-none p-0 mt-5 mb-0 grid gap-3 text-[#d2deea] text-[16px]">
            {[
              'Based in Los Baños, Philippines',
              'Most experience in agricultural research and development',
              'Adaptable across domains, open to any sector',
            ].map((point) => (
              <li className="flex items-start gap-3" key={point}>
                <span className="text-green mt-[2px]" aria-hidden>
                  ◆
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3 max-[850px]:mt-2.5 max-[620px]:grid-cols-1">
          {stats.map((stat) => (
            <div
              className={`px-4 py-2 border-l max-[620px]:border-l-0 max-[620px]:border-t max-[620px]:py-3.5 min-w-0 ${
                stat.points ? 'col-span-2 max-[620px]:col-span-1' : ''
              }`}
              style={{ borderColor: LINE }}
              key={stat.title}
            >
              <div className="text-green text-[27px]">{stat.symbol}</div>
              <strong className="block my-[7px]">{stat.title}</strong>
              {stat.description && (
                <p className="text-muted text-sm m-0">{stat.description}</p>
              )}
              {stat.points && (
                <ul className="list-none p-0 m-0 mt-3 flex gap-3 overflow-x-auto pb-3 skill-scroll snap-x snap-mandatory">
                  {stat.points.map((point) => (
                    <li
                      key={point.who}
                      className="shrink-0 w-[240px] snap-start flex flex-col p-4 bg-surface border rounded-xl text-sm"
                      style={{ borderColor: LINE }}
                    >
                      <span className="text-muted text-[13px]">
                        {point.who}
                      </span>
                      <span className="text-green font-extrabold text-[22px] leading-tight my-1.5">
                        {point.value}
                      </span>
                      <span className="text-muted">{point.detail}</span>
                      {(point.note || point.source) && (
                        <span className="mt-auto pt-3 flex flex-wrap items-center gap-2">
                          {point.note && (
                            <span
                              className="px-2 py-0.5 rounded-full border text-[11px] text-green"
                              style={{ borderColor: LINE }}
                            >
                              {point.note}
                            </span>
                          )}
                          {point.source && (
                            <a
                              href={point.source}
                              target="_blank"
                              rel="noreferrer"
                              className="text-green text-[12px] underline underline-offset-2"
                            >
                              Source
                            </a>
                          )}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {stat.footnote && (
                <p className="text-muted text-[12px] leading-snug mt-3 mb-0">
                  {stat.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
