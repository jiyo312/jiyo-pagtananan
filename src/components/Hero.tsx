import { button, buttonOutline, eyebrow, wrap } from '../styles'

function Hero() {
  return (
    <section
      className="relative overflow-hidden grid items-center min-h-[520px] max-[620px]:min-h-[470px] [scroll-margin-top:82px] bg-[radial-gradient(ellipse_at_72%_35%,#234b47_0,transparent_42%),linear-gradient(110deg,#081321_12%,#102438_62%,#163b35)] after:content-[''] after:absolute after:inset-0 after:opacity-[0.12] after:pointer-events-none after:bg-[length:34px_34px] after:bg-[linear-gradient(135deg,transparent_48%,#8ee6a3_49%,transparent_50%)]"
      id="home"
    >
      <div className={wrap}>
        <div className="relative z-[1] max-w-[690px] py-[75px] max-[620px]:py-[65px]">
          <div className={eyebrow}>Full Stack Engineer · Philippines</div>
          <h1 className="text-[clamp(42px,7vw,76px)] leading-[1.02] tracking-[-0.055em] mt-3 mb-5">
            Jiyo Collin
            <br />
            Pagtananan
          </h1>
          <p className="text-[clamp(18px,2.3vw,24px)] max-w-[600px] text-[#d7e2ee] mb-7">
            Building technology that helps scientists and farmers grow a better
            tomorrow.
          </p>
          <div className="flex flex-wrap gap-3 max-[460px]:flex-col max-[460px]:items-stretch">
            <a
              className={`${button} max-[460px]:w-full`}
              href="mailto:YOUR_EMAIL@example.com"
            >
              ✉ Contact Me →
            </a>
            <a
              className={`${button} ${buttonOutline} max-[460px]:w-full`}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className={`${button} ${buttonOutline} max-[460px]:w-full`}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
