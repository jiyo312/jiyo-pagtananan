import { LuArrowUp, LuMail } from 'react-icons/lu'
import { contactLinks } from '../../app/portfolio-data'
import { button, eyebrow, LINE, wrap } from '../../app/styles'

const year = new Date().getFullYear()

function Contact() {
  return (
    <section
      className="relative overflow-hidden pt-[65px] pb-[35px] [scroll-margin-top:82px] bg-[linear-gradient(180deg,#0a1726_0%,#061024_55%,#02060f_100%)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(600px_300px_at_15%_0%,rgba(67,211,107,0.10),transparent_70%)]"
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
            className={`${button} px-7 py-[14px] text-base border-green shadow-[0_8px_24px_rgba(67,211,107,0.25)] hover:shadow-[0_10px_30px_rgba(67,211,107,0.4)] max-[620px]:w-full`}
            href="mailto:jiyocollin@gmail.com?subject=Let%27s%20solve%20a%20problem"
          >
            <LuMail className="text-[18px]" aria-hidden />
            Let's solve a problem
          </a>
        </div>
        <footer
          className="border-t mt-[45px] pt-5 flex items-center justify-between gap-4 text-[#8293a7] text-[13px] max-[620px]:flex-col-reverse max-[620px]:text-center"
          style={{ borderColor: LINE }}
        >
          <span>
            © {year} Jiyo Collin Pagtananan · Building web apps that solve
            people problems
          </span>
          <a
            href="#home"
            aria-label="Back to top"
            className="shrink-0 inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border text-[#d8e1ed] transition duration-200 hover:-translate-y-0.5 hover:border-green hover:text-green"
            style={{ borderColor: LINE }}
          >
            <LuArrowUp className="text-[16px]" aria-hidden />
            Back to top
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Contact
