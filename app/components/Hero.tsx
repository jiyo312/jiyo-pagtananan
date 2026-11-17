'use client'

import { useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGmail, SiSubstack } from 'react-icons/si'
import { LuFileText } from 'react-icons/lu'
import jiyoPortraitImg from '../assets/jiyo.png'
import { button, buttonOutline, eyebrow, wrap } from '../../app/styles'

const jiyoPortrait = jiyoPortraitImg.src

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
