'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from 'react'
import { LuMail } from 'react-icons/lu'
import jiyoPortraitImg from '../assets/jiyo.png'
import { button, eyebrow, wrap } from '../../app/styles'

const jiyoPortrait = jiyoPortraitImg.src

// Tagline split into parts so "web apps" keeps its green highlight while typing.
const TAGLINE_PARTS = [
  { text: 'Building ', highlight: false },
  { text: 'web apps', highlight: true },
  { text: ' that solve people problems.', highlight: false },
]
const TAGLINE_LENGTH = TAGLINE_PARTS.reduce((n, p) => n + p.text.length, 0)

function renderTagline(count: number) {
  let remaining = count
  return TAGLINE_PARTS.map((part) => {
    const shown = part.text.slice(0, Math.max(0, remaining))
    remaining -= part.text.length
    if (!shown) return null
    return part.highlight ? (
      <span key={part.text} className="text-green font-extrabold">
        {shown}
      </span>
    ) : (
      <span key={part.text}>{shown}</span>
    )
  })
}

function TypedTagline() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(TAGLINE_LENGTH)
      return
    }
    // Type -> hold -> erase -> pause -> repeat.
    const TYPE_MS = 55
    const ERASE_MS = 30
    const HOLD_MS = 2200
    const RESTART_MS = 600
    let i = 0
    let timer: ReturnType<typeof setTimeout>

    const type = () => {
      i += 1
      setCount(i)
      timer = setTimeout(i >= TAGLINE_LENGTH ? hold : type, i >= TAGLINE_LENGTH ? HOLD_MS : TYPE_MS)
    }
    const hold = () => erase()
    const erase = () => {
      i -= 1
      setCount(i)
      timer = setTimeout(i <= 0 ? type : erase, i <= 0 ? RESTART_MS : ERASE_MS)
    }

    timer = setTimeout(type, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Full text for screen readers and crawlers */}
      <span className="sr-only">
        {TAGLINE_PARTS.map((p) => p.text).join('')}
      </span>
      <span className="relative block" aria-hidden>
        {/* Invisible full text reserves the final height so nothing shifts */}
        <span className="invisible">{renderTagline(TAGLINE_LENGTH)}</span>
        <span className="absolute inset-0">
          {renderTagline(count)}
          <span className="typing-caret" />
        </span>
      </span>
    </>
  )
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  // Cursor position within the hero, 0–1 on each axis. Centered by default.
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  const [hovering, setHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const bgStyle = {
    '--mx': `${pos.x * 100}%`,
    '--my': `${pos.y * 100}%`,
  } as CSSProperties

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        setPos({ x: 0.5, y: 0.5 })
      }}
      style={bgStyle}
      className="relative overflow-hidden grid items-center min-h-[520px] max-[620px]:min-h-[470px] [scroll-margin-top:82px] bg-[linear-gradient(180deg,#02060f_0%,#061024_45%,#0a1726_100%)]"
      id="home"
    >
      {/* Aurora bands drifting across the sky */}
      <div className="hero-aurora absolute inset-0 pointer-events-none" aria-hidden />
      {/* Twinkling star field; parallax-shifts slightly toward the cursor */}
      <div
        className="hero-stars absolute inset-0 pointer-events-none transition-[transform] duration-300 ease-out motion-reduce:transition-none"
        style={{
          transform: `translate(${(pos.x - 0.5) * 18}px, ${(pos.y - 0.5) * 18}px)`,
        }}
        aria-hidden
      />
      {/* Soft glow that follows the cursor, fades in only while hovering */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 bg-[radial-gradient(360px_360px_at_var(--mx)_var(--my),rgba(118,201,255,0.16),transparent_70%)]"
        style={{ opacity: hovering ? 1 : 0 }}
        aria-hidden
      />
      <img
        src={jiyoPortrait}
        alt="Jiyo Collin Pagtananan"
        className="absolute bottom-0 right-0 z-[1] h-full w-auto max-w-[55%] object-contain object-bottom pointer-events-none select-none max-[850px]:opacity-40 max-[620px]:hidden"
      />
      {/* Left-to-right fade so the portrait blends into the background */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(100deg,rgba(8,19,33,0.95)_0%,rgba(8,19,33,0.8)_28%,rgba(8,19,33,0.3)_48%,rgba(8,19,33,0)_68%)]"
        aria-hidden
      />
      <div className={`${wrap} relative z-[2]`}>
        <div className="relative z-[1] max-w-[690px] py-[75px] max-[620px]:pt-[40px] max-[620px]:pb-[65px] max-[620px]:text-center">
          {/* Phones: the large side portrait is hidden, so show a round photo above the text */}
          <img
            src={jiyoPortrait}
            alt="Jiyo Collin Pagtananan"
            className="hidden max-[620px]:block w-[112px] h-[112px] rounded-full object-cover object-top border-2 border-green bg-[#0d1a2a] mx-auto mb-6 select-none"
          />
          <div className={eyebrow}>Full Stack Engineer · Philippines</div>
          <h1 className="text-[clamp(42px,7vw,76px)] font-extrabold leading-[1.02] tracking-[-0.055em] mt-3 mb-5">
            Jiyo Pagtananan
          </h1>
          <p className="text-[clamp(18px,2.3vw,24px)] max-w-[600px] text-[#d7e2ee] mb-7">
            <TypedTagline />
          </p>
          <a
            className={`${button} px-7 py-[14px] text-base border-green shadow-[0_8px_24px_rgba(67,211,107,0.25)] hover:shadow-[0_10px_30px_rgba(67,211,107,0.4)] max-[460px]:w-full`}
            href="mailto:jiyocollin@gmail.com?subject=Start%20a%20project"
          >
            <LuMail className="text-[18px]" aria-hidden />
            Let's Solve a Problem
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
