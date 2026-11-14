import { useState } from 'react'
import { navLinks } from '../portfolio-data'
import { button, LINE, wrap } from '../styles'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className="sticky top-0 z-10 bg-[rgba(8,19,33,0.92)] backdrop-blur-[14px] border-b"
      style={{ borderColor: LINE }}
    >
      <div
        className={`${wrap} flex items-center justify-between gap-6 h-[72px] max-[620px]:h-[64px]`}
      >
        <a
          className="font-bold tracking-[-0.03em] flex items-center gap-3"
          href="#home"
        >
          <span className="text-green text-[25px]">✳</span> Jiyo Collin
          Pagtananan
        </a>

        <button
          className="hidden max-[620px]:block border text-white bg-transparent px-3 py-2 rounded-[9px]"
          style={{ borderColor: LINE }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu ☰
        </button>

        <nav
          className={`flex items-center gap-6 max-[850px]:gap-[13px] max-[620px]:absolute max-[620px]:top-[64px] max-[620px]:left-0 max-[620px]:right-0 max-[620px]:flex-col max-[620px]:items-start max-[620px]:px-[22px] max-[620px]:py-[18px] max-[620px]:bg-[#0b1726] max-[620px]:border-b ${
            menuOpen ? 'max-[620px]:flex' : 'max-[620px]:hidden'
          }`}
          style={{ borderColor: LINE }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[#d8e1ed] text-sm hover:text-green max-[850px]:text-[13px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className={`${button} max-[850px]:hidden`}
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          ◉ GitHub
        </a>
      </div>
    </header>
  )
}

export default Header
