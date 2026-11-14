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
        className={`${wrap} flex items-center justify-between gap-6 h-[72px] max-[850px]:h-[64px]`}
      >
        <a
          className="font-bold tracking-[-0.03em] flex items-center gap-3 text-[15px] min-[500px]:text-base"
          href="#home"
        >
          <span className="text-green text-[25px]">✳</span> Jiyo Collin
          Pagtananan
        </a>

        <button
          className="hidden max-[850px]:flex items-center justify-center border text-white bg-transparent px-3 py-2 rounded-[9px] min-h-[44px]"
          style={{ borderColor: LINE }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu ☰
        </button>

        <nav
          className={`flex items-center gap-6 max-[850px]:absolute max-[850px]:top-[64px] max-[850px]:left-0 max-[850px]:right-0 max-[850px]:flex-col max-[850px]:items-stretch max-[850px]:px-[22px] max-[850px]:py-2 max-[850px]:bg-[#0b1726] max-[850px]:border-b ${
            menuOpen ? 'max-[850px]:flex' : 'max-[850px]:hidden'
          }`}
          style={{ borderColor: LINE }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[#d8e1ed] text-sm hover:text-green max-[850px]:py-3 max-[850px]:border-b max-[850px]:border-[rgba(180,205,230,0.1)] max-[850px]:last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="hidden max-[850px]:block text-green font-semibold py-3"
          >
            ◉ GitHub
          </a>
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
