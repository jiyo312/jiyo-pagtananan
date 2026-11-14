// Shared Tailwind class strings used across portfolio components.

// The subtle divider color used throughout the original design (--line).
export const LINE = 'rgba(180,205,230,0.18)'

// Centered content container (was .wrap).
export const wrap = 'w-[min(1120px,calc(100%-40px))] mx-auto'

// Small uppercase label (was .eyebrow).
export const eyebrow =
  'text-green uppercase tracking-[0.12em] font-extrabold text-[13px]'

// Pill button (was .button). Append `buttonOutline` for the outline variant.
export const button =
  'inline-flex items-center justify-center gap-[9px] px-[18px] py-[11px] rounded-full bg-green-dark text-white font-semibold border border-transparent transition duration-200 hover:-translate-y-0.5 hover:bg-[#20a65c]'

export const buttonOutline =
  'bg-transparent border-[rgba(230,240,255,0.5)] hover:border-green hover:text-green hover:bg-transparent'

// Section vertical rhythm (was `section`).
export const section = 'py-[82px] [scroll-margin-top:82px] max-[620px]:py-[60px]'

// Section heading (h2).
export const heading =
  'text-[clamp(28px,4vw,42px)] tracking-[-0.04em] leading-[1.15] mt-2'
