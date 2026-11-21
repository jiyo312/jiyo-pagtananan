'use client'

import { useEffect, useRef, useState } from 'react'
import { impactItems, roles } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

function RoleTitle({ title }: { title: string }) {
  const [team, ...rest] = title.split(' · ')
  const role = rest.join(' · ')

  if (!role) {
    return <span className="font-bold text-[#f0f6fc]">{team}</span>
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1">
      <span className="font-bold text-[#f0f6fc]">{team}</span>
      <span className="text-[#2d7d4c]" aria-hidden>
        |
      </span>
      <span className="font-semibold text-[#dce8f5]">{role}</span>
    </span>
  )
}

function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  // Height of the green progress line, and how many role dots are lit.
  const [fill, setFill] = useState('0px')
  const [litCount, setLitCount] = useState(0)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return
    const items = itemRefs.current.filter(Boolean) as HTMLElement[]

    // Reduced motion: show everything at once, no drawing or sliding.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFill('100%')
      setLitCount(items.length)
      items.forEach((el) => {
        el.dataset.visible = 'true'
      })
      return
    }

    // Roles fade and rise into view as they enter the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          ;(entry.target as HTMLElement).dataset.visible = 'true'
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    items.forEach((el) => observer.observe(el))

    // The green line grows to a point 60% down the viewport; a dot lights
    // up once the line reaches it.
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.6
      const box = timeline.getBoundingClientRect()
      const px = Math.min(Math.max(line - box.top, 0), box.height)
      setFill(`${px}px`)
      let count = 0
      items.forEach((el) => {
        if (el.getBoundingClientRect().top + 12 <= line) count += 1
      })
      setLitCount(count)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="experience" className={section}>
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Experience</div>
          <h2 className={heading}>A Journey of Impact at IRRI</h2>
        </div>
        <div className="grid gap-[42px] grid-cols-[1.5fr_0.8fr] max-[850px]:grid-cols-1">
          <div ref={timelineRef} className="relative pl-[27px]">
            {/* Faint track, with the green progress line drawn over it */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px]"
              style={{ background: LINE }}
              aria-hidden
            />
            <div
              className="absolute left-0 top-0 w-[2px] bg-[#2d7d4c]"
              style={{ height: fill }}
              aria-hidden
            />
            {roles.map((role, i) => (
              <article
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                data-lit={i < litCount}
                className="relative pb-9 opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 motion-reduce:transition-none before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-[#2b3d55] before:left-[-32px] before:top-[6px] before:transition-[background-color,box-shadow] before:duration-500 data-[lit=true]:before:bg-green data-[lit=true]:before:shadow-[0_0_0_5px_rgba(67,211,107,0.12)]"
                key={role.title + role.dateRange}
              >
                <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-8 gap-y-2 max-[620px]:grid-cols-1">
                  <div>
                    <h3 className="text-[16px] leading-snug m-0">
                      <RoleTitle title={role.title} />
                    </h3>
                    <div className="text-muted text-[13px] mt-1">
                      {role.dateRange}
                    </div>
                  </div>
                  <ul className="m-0 space-y-1.5">
                    {role.points.map((point, j) => (
                      <li
                        className="flex items-start gap-2.5 text-[#d0dce9] text-[14px] leading-snug"
                        key={point.text + point.tag + j}
                      >
                        <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-green" />
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <aside
            className="border-l pl-7 max-[850px]:border-l-0 max-[850px]:pl-0"
            style={{ borderColor: LINE }}
          >
            <div className={eyebrow}>Key impact</div>
            {impactItems.map((item) => (
              <div
                className="flex gap-3.5 my-[18px] text-[#d0dce9]"
                key={item.text}
              >
                <span className="text-[23px] text-green">{item.icon}</span>
                <div>{item.text}</div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Experience
