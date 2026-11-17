import type { ComponentType, SVGProps } from 'react'
import ebsImage from './assets/ebs.png'
import rcmImage from './assets/rcm.png'
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
  SiSubstack,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import {
  LuBoxes,
  LuCheckCheck,
  LuCloud,
  LuDatabase,
  LuFileText,
  LuGitBranch,
  LuGlobe,
  LuHistory,
  LuLayers,
  LuLayoutGrid,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuPlug,
  LuPuzzle,
  LuRefreshCw,
  LuRocket,
  LuServer,
  LuServerCog,
  LuSmartphone,
  LuTrendingUp,
  LuUsers,
  LuWifiOff,
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

export interface CaseStudyFact {
  label: string
  value: string
}

export interface CaseStudyMetric {
  icon: SkillIcon
  value: string
  label: string
}

export interface CaseStudyFeature {
  icon: SkillIcon
  title: string
  description: string
}

export interface CaseStudyBeforeAfter {
  before: string
  after: string
}

export interface CaseStudyImpact {
  audience: string
  text: string
}

export interface CaseStudySource {
  label: string
  href: string
}

export interface CaseStudy {
  title: string
  /** Optional link to the live product, shown next to the title. */
  liveUrl?: string
  /** One-line hook shown under the title. */
  tagline: string
  summary: string
  /** Optional citation for the figures quoted in the summary/metrics. */
  source?: CaseStudySource
  /** Quick-reference chips (role, timeline, stack, etc.). */
  facts: CaseStudyFact[]
  /** Headline numbers shown in a stat strip. */
  metrics: CaseStudyMetric[]
  /** The problem framing. */
  problem: {
    intro: string
    points: string[]
  }
  /** Legacy limitations, each a titled card. */
  legacy: {
    intro: string
    items: { title: string; description: string }[]
    /** The fragmented legacy apps that were consolidated. */
    consolidatedApps: string[]
  }
  /** Capabilities added when extending/rebuilding the legacy system. */
  features: {
    intro: string
    items: CaseStudyFeature[]
  }
  /** Technology modernization shown as before → after. */
  modernization: {
    intro: string
    changes: CaseStudyBeforeAfter[]
  }
  /** Impact per audience. */
  impact: CaseStudyImpact[]
}

export interface Project {
  id: string
  art: string
  /** Optional screenshot shown in the card art panel. */
  image?: string
  artVariant?: 'blue'
  title: string
  tagline: string
  description: string
  tags: string[]
  caseStudy?: CaseStudy
}

export type RolePointTag = 'build' | 'rebuild' | 'maintain' | 'improve' | 'etl'

export interface RolePointCommitShare {
  percent: number
  label: string
  caption: string
  /** Total number of contributors (used in the chart legend). */
  teamCount: number
}

export interface RolePoint {
  text: string
  tag: RolePointTag
  /** Concise one-line description of the project. */
  description?: string
  /** Optional short code / abbreviation (e.g. "RCMFFR"). */
  abbr?: string
  /** Optional "migrated into" target shown as an arrow (e.g. "RCMAS"). */
  mergedInto?: string
  /** Optional commit-share figure shown as a donut chart under this point. */
  commitShare?: RolePointCommitShare
  /** Notable contributions, each an outcome plus the tech that enabled it. */
  notableContributions?: { outcome: string; tech: string }[]
  /** When true, the point is grouped under a "Side projects" sub-heading. */
  sideProject?: boolean
}

export interface Role {
  title: string
  /** Short duration label shown inline (e.g. "2 years"). */
  duration: string
  /** Full start–end range revealed on hover (e.g. "Oct 2022 – Present"). */
  dateRange: string
  location: string
  /** Remote / onsite breakdown (e.g. "Remote" or "6 mos onsite · 2 yrs remote"). */
  workMode: string
  points: RolePoint[]
  /** Short summary of contributions, as one or more brief paragraphs. */
  summary?: string[]
  /** Strengths demonstrated in this role, as one or more groups. */
  strengths?: {
    intro: string
    items: string[]
  }[]
  /** Team-level impact for this role, as compact titled highlights. */
  teamImpact?: { icon: SkillIcon; title: string; text: string }[]
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
  icon: SkillIcon
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
    id: 'rcm',
    art: '🌾📱',
    image: rcmImage,
    title: 'Rice Crop Manager (RCM)',
    tagline: 'Scaling scientific farming recommendations to farmers',
    description:
      "A mobile and web application that delivers IRRI's site-specific fertilizer recommendations to farmers across the Philippines, Indonesia, Myanmar, and India.",
    tags: ['Web', 'Mobile', 'PWA', 'Offline-first'],
    caseStudy: {
      title: 'Rice Crop Manager Advisory Service',
      liveUrl: 'https://rcm.da.gov.ph/home',
      tagline:
        'Bringing IRRI scientists\u2019 site-specific farming recommendations to millions of farmers.',
      summary:
        'Government extension workers interview farmers about their farm and field practices. The app turns that input into a tailored one-page recommendation on the timing, type, and amount of fertilizer across the rice crop lifecycle \u2014 from planting to harvest. Since 2014, RCMAS has reached more than 2.6 million farmers in the Philippines and generated 3.3 million precision-agriculture recommendations.',
      source: {
        label: 'Source: IRRI News — reaching more farmers through the cluster approach',
        href: 'https://www.irri.org/news-and-events/news/irri-and-da-reach-more-farmers-through-cluster-approach',
      },
      facts: [
        { label: 'Role', value: 'Software Engineer' },
        { label: 'Org', value: 'IRRI' },
        { label: 'Since', value: '2014' },
        { label: 'Platform', value: 'Web · Mobile · PWA' },
      ],
      metrics: [
        { icon: LuUsers, value: '2.6M+', label: 'farmers reached' },
        { icon: LuFileText, value: '3.3M', label: 'recommendations generated' },
        { icon: LuLayoutGrid, value: '5→1', label: 'apps unified into RCMAS' },
        { icon: LuWifiOff, value: 'Offline', label: 'field data collection' },
      ],
      problem: {
        intro:
          'I worked alongside agronomists who develop site-specific farming methods and want to scale them across the Philippines. Turning that science into something every farmer can use is hard:',
        points: [
          'Farming conditions vary by location \u2014 soil, irrigation, and rice varieties all differ field to field.',
          'Weather and fertilizer prices shift over time, making decisions more complex each season.',
          'Farmers and extension workers can\u2019t solve complex agronomic equations before every planting season.',
          'The core challenge: make scientifically developed recommendations accessible, practical, and field-ready.',
        ],
      },
      legacy: {
        intro:
          'A legacy system already solved much of this, but it had real limitations that capped its reach.',
        items: [
          {
            title: 'Limited accessibility',
            description:
              'Built for desktop users with reliable internet \u2014 yet extension workers collect field data in remote areas with little or no connectivity, often on small devices.',
          },
          {
            title: 'No audit trails',
            description:
              'No way to track who created, edited, or updated farmer, field, and worker records \u2014 made hard by many independent apps, each with its own database.',
          },
          {
            title: 'Fragmented apps & databases',
            description:
              'Separate databases complicated migration and maintenance, and forced developers to work across multiple codebases.',
          },
        ],
        consolidatedApps: ['RCMFFR', 'FFRDL', 'RCMPH', 'PHRASTAT', 'RCMSMS'],
      },
      features: {
        intro:
          'After rebuilding the legacy system into a unified platform, we added new capabilities it never had \u2014 closing the gaps that limited the original applications:',
        items: [
          {
            icon: LuWifiOff,
            title: 'Offline capabilities',
            description:
              'Collect and manage farmer and field data in remote locations with no internet connection.',
          },
          {
            icon: LuSmartphone,
            title: 'Mobile application',
            description:
              'A mobile-friendly experience that works comfortably on the small devices used in the field.',
          },
          {
            icon: LuHistory,
            title: 'CRUD audit trails',
            description:
              'Track creation, updates, and modifications across farmer, field, and worker transactions.',
          },
          {
            icon: LuMapPin,
            title: 'Google Maps integration',
            description:
              'Visualize uploaded GPX files directly on Google Maps.',
          },
          {
            icon: LuDatabase,
            title: 'Database consolidation',
            description:
              'Unified fragmented databases to simplify migration, maintenance, and handoff.',
          },
          {
            icon: LuMessageSquare,
            title: 'SMS integration',
            description:
              'Timely reminders that help farmers follow recommended practices across the crop cycle.',
          },
        ],
      },
      modernization: {
        intro:
          'We consolidated the independent apps and databases into one platform \u2014 the Rice Crop Manager Advisory Service (RCMAS) \u2014 and modernized the stack for maintainability and a better user experience.',
        changes: [
          {
            before: 'Vanilla HTML, CSS, jQuery, PHP',
            after: 'Angular, Ionic, PHP Slim Micro Framework',
          },
          {
            before: 'Inconsistent, ad-hoc UI styling',
            after: 'Unified design system (Angular Material + Ionic)',
          },
          {
            before: 'Server-side rendered pages',
            after: 'Responsive Single-Page Application (SPA)',
          },
        ],
      },
      impact: [
        {
          audience: 'Partner organizations',
          text: 'No need to build recommendation systems from scratch. After handoff, they maintain RCMAS, own their data, and run their own implementations.',
        },
        {
          audience: 'Extension workers',
          text: 'Collect farmer and field information in remote locations, even with limited or no internet connectivity.',
        },
        {
          audience: 'Partner developers',
          text: 'Easier to maintain and extend thanks to a unified architecture, consolidated database, and modern stack.',
        },
        {
          audience: 'Partner agronomists',
          text: 'Easier to maintain the complex calculations behind recommendations, so scientific improvements land faster.',
        },
        {
          audience: 'Farmers',
          text: 'Better recommendations that aim to raise rice yields while cutting unnecessary fertilizer costs.',
        },
      ],
    },
  },
  {
    id: 'ebs',
    art: '🧬📊',
    image: ebsImage,
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
    duration: '2 years',
    dateRange: 'Jan 2025 – Dec 2026',
    location: 'Los Baños, Philippines',
    workMode: 'Onsite',
    points: [
      {
        text: 'Phenotypic Data Manager',
        description:
          'Manages field trial observations and phenotypic measurements for breeders.',
        tag: 'maintain',
      },
      {
        text: 'Analysis Request Manager',
        description:
          'Coordinates and tracks breeders’ requests for statistical analysis.',
        tag: 'maintain',
      },
    ],
    summary: [
      'Returned onsite to maintain breeding analytics tools.',
      'I resolved bugs and shipped improvements that keep researchers’ data workflows reliable.',
    ],
  },
  {
    title: 'Breeding Analytics Team · Software Engineer',
    duration: '2 years',
    dateRange: 'Oct 2022 – Sep 2024',
    location: 'Los Baños, Philippines',
    workMode: 'Remote',
    points: [
      {
        text: 'Phenotypic Data Manager',
        description:
          'Built the platform for capturing and managing phenotypic trial data.',
        tag: 'build',
      },
      {
        text: 'Molecular Data Analysis',
        description:
          'Developed tooling to process and analyze molecular marker data.',
        tag: 'build',
      },
    ],
    summary: [
      'Built greenfield analytics tools from the ground up.',
      'These gave breeders new ways to capture phenotypic data and analyze molecular markers, speeding up variety development.',
    ],
  },
  {
    title: 'Rice Crop Manager Team · Software Engineer',
    duration: '1 year',
    dateRange: 'Jan 2022 – Dec 2022',
    location: 'Los Baños, Philippines',
    workMode: 'Remote',
    points: [
      {
        text: 'Rice Crop Manager Advisory Service',
        description:
          'Unified platform delivering site-specific fertilizer recommendations to farmers.',
        tag: 'rebuild',
      },
      {
        text: 'Mel Builder',
        description:
          'Internal tool for building and configuring recommendation logic.',
        tag: 'build',
        sideProject: true,
      },
      {
        text: 'RCM Myanmar',
        description: 'Localized RCM deployment for farmers in Myanmar.',
        tag: 'maintain',
        sideProject: true,
      },
      {
        text: 'RCM Indonesia',
        description: 'Localized RCM deployment for farmers in Indonesia.',
        tag: 'maintain',
        sideProject: true,
      },
      {
        text: 'RCM Odisha (backend)',
        description: 'Rebuilt the backend for the RCM deployment in Odisha, India.',
        tag: 'rebuild',
        sideProject: true,
      },
    ],
    summary: [
      'Contributed to the rebuild of the core advisory platform into the Rice Crop Manager Advisory Service.',
      'Added offline, mobile, PWA, and audit-trail capabilities.',
      'Supported country deployments across Myanmar, Indonesia, and India.',
    ],
  },
  {
    title: 'Rice Crop Manager Team · Junior Software Engineer',
    duration: '2.5 years',
    dateRange: 'Jul 2019 – Dec 2021',
    location: 'Los Baños, Philippines',
    workMode: '6 mos onsite · 2 yrs remote',
    points: [
      {
        text: 'RCM User Registration',
        description:
          'Records user information and manages profiles for extension workers and system accounts.',
        tag: 'maintain',
        commitShare: {
          percent: 56.1,
          label: 'of commits',
          caption:
            'Top contributor to RCM User Registration out of 5 developers, with 87 of 155 commits.',
          teamCount: 5,
        },
        notableContributions: [
          {
            outcome:
              'Resolved authentication and registration defects: inconsistent password hashing, duplicate emails, broken reset links, and disposable email domains.',
            tech: 'Bug Fixes',
          },
          {
            outcome:
              'Kept users supported by updating the in-app training materials served as downloadable PDFs.',
            tech: 'Training Materials',
          },
        ],
      },
      {
        text: 'RCM Farmer and Field Download',
        description:
          'Exports PDF lists of farmers and fields, filtered by region, for field interviews.',
        tag: 'maintain',
        commitShare: {
          percent: 85.5,
          label: 'of commits',
          caption:
            'Top contributor to RCM Farmer and Field Download out of 2 developers, with 47 of 55 commits.',
          teamCount: 2,
        },
        notableContributions: [
          {
            outcome:
              'Refactored the existing authentication into a reusable endpoint shared with RCM Statistics.',
            tech: 'Refactoring',
          },
        ],
      },
      {
        text: 'RCM Statistics',
        description:
          'Aggregates totals for farmers, fields, recommendations, and hectares measured nationwide.',
        tag: 'maintain',
        commitShare: {
          percent: 65.2,
          label: 'of commits',
          caption:
            'Top contributor to RCM Statistics out of 6 developers, with 122 of 187 commits.',
          teamCount: 6,
        },
        notableContributions: [
          {
            outcome:
              'Refactored the existing authentication into a reusable endpoint shared with RCM Farmer and Field Download.',
            tech: 'Refactoring',
          },
          {
            outcome:
              'Restored accurate location filtering by fixing missing dropdown places.',
            tech: 'Bug Fixes',
          },
        ],
      },
       {
        text: 'Rice Crop Manager Advisory Service',
        description:
          'A new modern platform that combine all legacy applications that runs on both web and mobile',
        tag: 'rebuild',
        commitShare: {
          percent: 27.2,
          label: 'of commits',
          caption:
            'Top contributor to the RCMAS rebuild (UI + API) out of 11 developers, with 796 of 2,925 commits.',
          teamCount: 11,
        },
        notableContributions: [
          {
            outcome:
              'Let extension workers collect farmer and field data offline in remote areas with little or no connectivity.',
            tech: 'PWA · Service Workers',
          },
          {
            outcome:
              'Kept farmers on track with their one-page recommendations through automated SMS reminders.',
            tech: 'SMS Integration · Cron Jobs',
          },
          {
            outcome:
              'Sped up stakeholder decision-making with interactive graphs and data tables.',
            tech: 'Data Visualization',
          },
          {
            outcome:
              'Let users reach the RCM team directly with their questions, suggestions, and concerns.',
            tech: 'Contact Us API · Email Integration',
          },
          {
            outcome:
              'Gave users instant access to view their generated one-page recommendation.',
            tech: 'Recommendation API',
          },
          {
            outcome:
              'Persisted a section of the interview form so progress is saved reliably to the database.',
            tech: 'Interview Form API',
          },
          {
            outcome:
              'Secured user access with stateless, token-based authentication across the app.',
            tech: 'JWT Authentication',
          },
          {
            outcome:
              'Made the codebase easier to navigate by splitting an interview-form section into its own module.',
            tech: 'Refactoring',
          },
          {
            outcome:
              'Kept recommendations reliable by fixing crop-management review screens and critical form validations.',
            tech: 'Bug Fixes',
          },
        ],
      },
      {
        text: 'RCMAS DevOps',
        description:
          'A CLI tool that automates RCMAS deployment to AWS, plus database backup and restoration.',
        tag: 'build',
        commitShare: {
          percent: 100,
          label: 'of commits',
          caption: 'Sole contributor — built and maintained the tool end to end.',
          teamCount: 1,
        },
      },
      {
        text: 'TEIN',
        description:
          'Data pipeline that extracts data from multiple CSVs in Google Drive, transforms it, and loads records into a data warehouse for BI visualization and analytics.',
        tag: 'etl',
        commitShare: {
          percent: 10,
          label: 'of work',
          caption: 'Contributor on an 8-member team building the TEIN data pipeline.',
          teamCount: 8,
        },
        notableContributions: [
          {
            outcome:
              'Produced mapping data to align source CSV fields with the data warehouse schema.',
            tech: 'Data Mapping',
          },
          {
            outcome:
              'Brought the ETL scripts under version control for safer, trackable changes.',
            tech: 'Git · Version Control',
          },
          {
            outcome:
              'Collaborated with an outsourced team to deliver the pipeline together.',
            tech: 'Team Collaboration',
          },
        ],
      },
      {
        text: 'RCM Myanmar',
        description: 'Localized RCM deployment and maintenance for farmers in Myanmar.',
        tag: 'maintain',
        commitShare: {
          percent: 15,
          label: 'of work',
          caption: 'Contributor on a 3-member team localizing RCM for Myanmar.',
          teamCount: 3,
        },
        notableContributions: [
          {
            outcome:
              'Localized recommendations into Burmese so farmers receive guidance in their own language.',
            tech: 'Localization',
          },
          {
            outcome:
              'Adjusted the recommendation calculations to fit Myanmar’s local farming conditions.',
            tech: 'Recommendation Logic',
          },
          {
            outcome:
              'Updated the interview questionnaire to match local practices and data needs.',
            tech: 'Interview Form',
          },
        ],
      },
    ],
    strengths: [
      {
        intro:
          'Navigating unfamiliar legacy apps while picking up new tech on the job showed I’m a fast learner. I quickly adopted:',
        items: ['Angular', 'TypeScript', 'Docker', 'Git & Team Branching Strategy'],
      },
      {
        intro:
          'Owning the environments from local to deployment to handoff showed I can take on the responsibility and collaborate when needed to deliver a project. Along the way I learned:',
        items: ['Jenkins', 'AWS EC2', 'AWS S3', 'AWS VPC', 'Terraform', 'Liquibase', 'Team Collaboration'],
      },
      {
        intro:
          'I don’t just ship features — I care about quality without slowing delivery, adding automated UI and API testing. I learned:',
        items: ['Postman', 'CodeceptJS', 'Angular Testing Library'],
      },
      {
        intro:
          'Rebuilding multiple legacy applications into a single app taught me to break problems into smaller pieces, making complex projects doable, organized, and less risky. I learned:',
        items: [
          'Task breakdown',
          'Prioritization',
          'Estimation',
          'Feedback',
          'Iteration',
          'Collaboration',
        ],
      },
    ],
    teamImpact: [
      {
        icon: LuGitBranch,
        title: 'CI/CD for a team of 5–8',
        text: 'Pipeline from local → dev → staging with consistent environments, so the team ships features, reproduces bugs, and tests faster.',
      },
      {
        icon: LuUsers,
        title: 'Smooth IRRI → partner handoff',
        text: 'Ran capacity-building sessions and documented setup, deployment, and database backup/restore.',
      },
      {
        icon: LuWrench,
        title: 'Maintainable codebase',
        text: 'Applied the service/repository pattern and modularized the interview form for easier navigation.',
      },
      {
        icon: LuCheckCheck,
        title: 'Automated test coverage',
        text: 'E2E tests for the interview form (sections 1–6) and API tests for recommendation endpoints — reliable results, faster changes.',
      },
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
  { href: 'mailto:jiyocollin@gmail.com', label: 'jiyocollin@gmail.com', icon: LuMail },
  {
    href: 'https://www.linkedin.com/in/jiyo-pagtananan-5880a0148/',
    label: 'linkedin.com/in/jiyo-pagtananan',
    icon: FaLinkedin,
    external: true,
  },
  {
    href: 'https://codewithjiyo.com',
    label: 'codewithjiyo.com',
    icon: SiSubstack,
    external: true,
  },
]
