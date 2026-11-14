import footerBg from '../assets/portfolio-footer-bg.jpg'
import { contactLinks } from '../portfolio-data'
import { button, eyebrow, LINE, wrap } from '../styles'

const year = new Date().getFullYear()

function Contact() {
  return (
    <section
      className="relative overflow-hidden pt-[65px] pb-[35px] [scroll-margin-top:82px] bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:bg-[linear-gradient(180deg,rgba(13,26,42,0.88),rgba(7,17,30,0.94))]"
      style={{ backgroundImage: `url(${footerBg})` }}
      id="contact"
    >
      <div className={`${wrap} relative z-[1]`}>
        <div className="flex items-center justify-between gap-7 max-[620px]:flex-col max-[620px]:items-start">
          <div>
            <div className={eyebrow}>Let's connect</div>
            <h2 className="text-[clamp(25px,3.5vw,36px)] font-extrabold tracking-[-0.04em] leading-[1.15] mt-2">
              Have a project in mind?
              <br />
              Let's build something impactful.
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-[#c7d5e4] text-sm">
            {contactLinks.map((link) => {
              const LinkIcon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2.5 hover:text-green"
                  {...(link.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <LinkIcon className="text-green text-[18px]" aria-hidden />
                  {link.label}
                </a>
              )
            })}
          </div>
          <a
            className={`${button} max-[620px]:w-full`}
            href="mailto:jiyocollin@gmail.com"
          >
            Get in Touch →
          </a>
        </div>
        <footer
          className="border-t mt-[45px] pt-5 text-center text-[#8293a7] text-[13px]"
          style={{ borderColor: LINE }}
        >
          © {year} Jiyo Collin Pagtananan · Building technology for a food-secure
          future 🌾
        </footer>
      </div>
    </section>
  )
}

export default Contact
