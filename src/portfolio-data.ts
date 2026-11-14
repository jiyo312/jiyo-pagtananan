export interface NavLink {
  href: string
  label: string
}

export interface StatItem {
  symbol: string
  title: string
  description: string
}

export interface Project {
  art: string
  artVariant?: 'blue'
  title: string
  tagline: string
  description: string
  tags: string[]
}

export interface Role {
  title: string
  date: string
  points: string[]
}

export interface ImpactItem {
  icon: string
  text: string
}

export interface Skill {
  icon: string
  name: string
}

export interface ContactLink {
  href: string
  label: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const stats: StatItem[] = [
  {
    symbol: '🌾',
    title: 'My Mission',
    description:
      'Build software that helps scientists and farmers improve rice productivity and food security.',
  },
  {
    symbol: '◎',
    title: 'My Experience',
    description: '7+ years at IRRI working with multidisciplinary teams.',
  },
  {
    symbol: '♡',
    title: 'My Impact',
    description:
      'Supporting better farming practices, improved rice varieties, and a more food-secure world.',
  },
]

export const projects: Project[] = [
  {
    art: '🌾📱',
    title: 'Rice Crop Manager (RCM)',
    tagline: 'Scaling scientific farming recommendations to farmers',
    description:
      "A mobile and web application that delivers IRRI's site-specific fertilizer recommendations to farmers across the Philippines, Indonesia, Myanmar, and India.",
    tags: ['Web', 'Mobile', 'PWA', 'Offline-first'],
  },
  {
    art: '🧬📊',
    artVariant: 'blue',
    title: 'Enterprise Breeding System (EBS)',
    tagline: 'Accelerating rice breeding',
    description:
      'An integrated breeding ecosystem that manages workflows—from experiments to data analysis—helping breeders develop improved varieties faster.',
    tags: ['Enterprise', 'Analytics', 'Data management'],
  },
]

export const roles: Role[] = [
  {
    title: 'Breeding Analytics Team · Software Engineer',
    date: 'Oct 2022 – Present · Los Baños, Philippines',
    points: [
      'Phenotypic Data Manager — development & maintenance',
      'Molecular Data Analysis — greenfield development',
      'Analysis Request Manager — maintenance',
    ],
  },
  {
    title: 'Rice Crop Manager Team · Software Engineer',
    date: 'Jan 2022 – Dec 2022 · Los Baños, Philippines',
    points: [
      'RCM Philippines, RCM PH Statistics, and Mel Builder',
      'Offline-capable mobile and progressive web applications',
      'RCM Myanmar, Indonesia, and Odisha support',
    ],
  },
  {
    title: 'Rice Crop Manager Team · Junior Software Engineer',
    date: 'Jul 2019 – Dec 2021 · Los Baños, Philippines',
    points: [
      'User Registration and RCM PH Statistics (legacy maintenance)',
      'Farmer/Field Registration and Download (legacy & greenfield)',
    ],
  },
]

export const impactItems: ImpactItem[] = [
  { icon: '🌱', text: 'Scaled scientific farming practices to thousands of farmers.' },
  {
    icon: '◎',
    text: 'Supported research across the Philippines, Indonesia, Myanmar, and India.',
  },
  { icon: '👥', text: 'Contributed to improved rice varieties and food security.' },
]

export const skills: Skill[] = [
  { icon: '⚛', name: 'React' },
  { icon: 'TS', name: 'TypeScript' },
  { icon: '⬢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '☁', name: 'AWS' },
  { icon: '▣', name: 'Docker' },
  { icon: '⌘', name: 'Git' },
]

export const contactLinks: ContactLink[] = [
  { href: 'mailto:YOUR_EMAIL@example.com', label: '✉ YOUR_EMAIL@example.com' },
  {
    href: 'https://linkedin.com/in/YOUR_LINKEDIN',
    label: '▣ linkedin.com/in/YOUR_LINKEDIN',
    external: true,
  },
  {
    href: 'https://github.com/YOUR_GITHUB',
    label: '◉ github.com/YOUR_GITHUB',
    external: true,
  },
]
