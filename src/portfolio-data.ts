import type { ComponentType, SVGProps } from 'react'
import {
  ArchitectureServiceAmazonAPIGateway,
  ArchitectureServiceAmazonEC2,
  ArchitectureServiceAmazonSimpleQueueService,
  ArchitectureServiceAmazonSimpleStorageService,
  ArchitectureServiceAmazonVirtualPrivateCloud,
  ArchitectureServiceAWSLambda,
} from 'aws-react-icons'
import {
  SiAngular,
  SiBitbucket,
  SiConfluence,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHostinger,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJquery,
  SiLaravel,
  SiLiquibase,
  SiMongodb,
  SiMysql,
  SiNamecheap,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'
import {
  LuBoxes,
  LuCheckCheck,
  LuCloud,
  LuDatabase,
  LuGitBranch,
  LuGlobe,
  LuLayers,
  LuPlug,
  LuPuzzle,
  LuRefreshCw,
  LuRocket,
  LuServer,
  LuServerCog,
  LuSmartphone,
  LuTrendingUp,
  LuWrench,
} from 'react-icons/lu'

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

export type SkillIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>

export interface SkillItem {
  icon: SkillIcon
  name: string
  /** Official brand color, when the icon is a monochrome brand mark. */
  color?: string
  /** True for official multi-color icons (e.g. AWS) that bring their own colors. */
  fullColor?: boolean
}

export interface SkillCategory {
  label: string
  icon: SkillIcon
  items: SkillItem[]
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

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: LuLayers,
    items: [
      { icon: SiJavascript, name: 'JavaScript', color: '#f7df1e' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
      { icon: SiPhp, name: 'PHP', color: '#777bb4' },
      { icon: SiPython, name: 'Python', color: '#3776ab' },
    ],
  },
  {
    label: 'Frontend',
    icon: LuLayers,
    items: [
      { icon: SiReact, name: 'React', color: '#61dafb' },
      { icon: SiAngular, name: 'Angular', color: '#dd0031' },
      { icon: SiJquery, name: 'jQuery', color: '#0769ad' },
      { icon: SiHtml5, name: 'HTML5', color: '#e34f26' },
      { icon: SiCss, name: 'CSS3', color: '#663399' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' },
    ],
  },
  {
    label: 'Mobile',
    icon: LuSmartphone,
    items: [{ icon: SiIonic, name: 'Ionic Framework', color: '#3880ff' }],
  },
  {
    label: 'Backend',
    icon: LuServer,
    items: [
      { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
      { icon: SiLaravel, name: 'Laravel', color: '#ff2d20' },
      { icon: LuPuzzle, name: 'Slim Microframework' },
      { icon: LuPlug, name: 'REST APIs' },
    ],
  },
  {
    label: 'Cloud & Serverless',
    icon: LuCloud,
    items: [
      { icon: ArchitectureServiceAWSLambda, name: 'AWS Lambda', fullColor: true },
      {
        icon: ArchitectureServiceAmazonSimpleQueueService,
        name: 'SQS',
        fullColor: true,
      },
      {
        icon: ArchitectureServiceAmazonSimpleStorageService,
        name: 'S3',
        fullColor: true,
      },
      { icon: ArchitectureServiceAmazonEC2, name: 'EC2', fullColor: true },
      {
        icon: ArchitectureServiceAmazonAPIGateway,
        name: 'API Gateway',
        fullColor: true,
      },
      {
        icon: ArchitectureServiceAmazonVirtualPrivateCloud,
        name: 'VPC',
        fullColor: true,
      },
    ],
  },
  {
    label: 'Databases',
    icon: LuDatabase,
    items: [
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169e1' },
      { icon: SiMysql, name: 'MySQL', color: '#4479a1' },
      { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
      { icon: SiLiquibase, name: 'Liquibase', color: '#2962ff' },
    ],
  },
  {
    label: 'DevOps & Infrastructure',
    icon: LuWrench,
    items: [
      { icon: SiDocker, name: 'Docker', color: '#2496ed' },
      { icon: SiDocker, name: 'Docker Compose', color: '#2496ed' },
      { icon: SiJenkins, name: 'Jenkins', color: '#d24939' },
      { icon: LuBoxes, name: 'Docker Swarm' },
      { icon: SiTerraform, name: 'Terraform', color: '#7b42bc' },
    ],
  },
  {
    label: 'Hosting & Domains',
    icon: LuGlobe,
    items: [
      { icon: LuServerCog, name: 'Bluehost' },
      { icon: SiHostinger, name: 'Hostinger', color: '#673de6' },
      { icon: SiNamecheap, name: 'Namecheap', color: '#de3723' },
    ],
  },
  {
    label: 'Engineering Practices',
    icon: LuRocket,
    items: [
      { icon: LuLayers, name: 'Full-Stack Development' },
      { icon: LuWrench, name: 'System Modernization' },
      { icon: LuRocket, name: 'Performance Optimization' },
      { icon: LuTrendingUp, name: 'Scalability' },
      { icon: LuRefreshCw, name: 'Background Processing' },
      { icon: LuCheckCheck, name: 'Automated Testing' },
    ],
  },
  {
    label: 'Collaboration & Tools',
    icon: LuGitBranch,
    items: [
      { icon: SiGit, name: 'Git', color: '#f05032' },
      { icon: SiGithub, name: 'GitHub' },
      { icon: SiBitbucket, name: 'Bitbucket', color: '#0052cc' },
      { icon: SiJira, name: 'Jira', color: '#0052cc' },
      { icon: SiConfluence, name: 'Confluence', color: '#172b4d' },
      { icon: LuRefreshCw, name: 'Agile/Scrum' },
    ],
  },
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
