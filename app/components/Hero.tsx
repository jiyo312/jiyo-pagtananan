import { FaLinkedin } from 'react-icons/fa6'
import { SiGmail, SiSubstack } from 'react-icons/si'
import { LuFileText } from 'react-icons/lu'
import heroBgImg from '../assets/portfolio-hero-bg.jpg'
import jiyoPortraitImg from '../assets/jiyo.png'
import { button, buttonOutline, eyebrow, wrap } from '../../app/styles'

const heroBg = heroBgImg.src
const jiyoPortrait = jiyoPortraitImg.src

function Hero() {
  return (
    <section
      className="relative overflow-hidden grid items-center min-h-[520px] max-[620px]:min-h-[470px] [scroll-margin-top:82px] bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:bg-[linear-gradient(100deg,rgba(8,19,33,0.95)_0%,rgba(8,19,33,0.8)_28%,rgba(8,19,33,0.3)_48%,rgba(8,19,33,0)_68%)]"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="home"
    >
      <img
        src={jiyoPortrait}
        alt="Jiyo Collin Pagtananan"
        className="absolute bottom-0 right-0 z-[1] h-full w-auto max-w-[55%] object-contain object-bottom pointer-events-none select-none max-[850px]:opacity-40 max-[620px]:hidden"
      />
      <div className={`${wrap} relative z-[2]`}>
        <div className="relative z-[1] max-w-[690px] py-[75px] max-[620px]:py-[65px]">
          <div className={eyebrow}>Full Stack Engineer · Philippines</div>
          <h1 className="text-[clamp(42px,7vw,76px)] font-extrabold leading-[1.02] tracking-[-0.055em] mt-3 mb-5">
            Jiyo Pagtananan
          </h1>
          <p className="text-[clamp(18px,2.3vw,24px)] max-w-[600px] text-[#d7e2ee] mb-7">
            Building scalable, reliable software that turns complex problems
            into tools people rely on, across any domain.
          </p>
          <div className="flex flex-wrap gap-3 max-[460px]:flex-col max-[460px]:items-stretch">
            <a
              className={`${button} max-[460px]:w-full`}
              href="mailto:jiyocollin@gmail.com"
            >
              <SiGmail className="text-[18px]" aria-hidden />
              Contact Me →
            </a>
            <a
              className={`${button} ${buttonOutline} max-[460px]:w-full`}
              href="https://www.linkedin.com/in/jiyo-pagtananan-5880a0148/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-[18px]" aria-hidden />
              LinkedIn
            </a>
            <a
              className={`${button} ${buttonOutline} max-[460px]:w-full`}
              href="https://codewithjiyo.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiSubstack className="text-[18px]" aria-hidden />
              Blog
            </a>
            <a
              className={`${button} ${buttonOutline} max-[460px]:w-full`}
              href="/JiyoCollin_Pagtananan_SoftwareEngineer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              <LuFileText className="text-[18px]" aria-hidden />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
