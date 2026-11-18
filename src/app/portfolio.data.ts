// Single source of truth for all portfolio content (sourced from the resume).

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  blurb: string;
  logo?: string;
  initials: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
}

export interface Project {
  title: string;
  company: string;
  category: string;
  summary: string;
  features: string[];
  challenges?: string[];
  tech: string[];
  link?: string;
}

export const PROFILE = {
  name: 'Mahendra Gadi',
  role: 'Software Development Engineer',
  location: 'Hyderabad, India',
  email: 'mahendragadi66@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahendra-gadi/',
  github: 'https://github.com/gadimahendra',
  resume: 'assets/Mahendra-resume.pdf',
  photo: 'assets/profile-pic.jpg',
  summary:
    'Frontend-focused engineer with 4+ years building responsive, scalable, high-performance web applications in Angular, React and TypeScript — with the Node.js and Express know-how to own features end to end.',
};

export const STATS = [
  { to: 4, suffix: '+', label: 'Years of experience' },
  { to: 50, suffix: 'k+', label: 'Users served' },
  { to: 30, suffix: '%', label: 'Faster initial load' },
  { to: 40, suffix: '%', label: 'Fewer regression bugs' },
];

/** Self-assessed proficiency (0–100) — tweak freely. */
export const SKILL_LEVELS = [
  { name: 'Angular', level: 92 },
  { name: 'TypeScript', level: 90 },
  { name: 'HTML & CSS / SCSS', level: 95 },
  { name: 'React', level: 85 },
  { name: 'RxJS & State (NGXS, Redux)', level: 85 },
  { name: 'Tailwind CSS & Bootstrap', level: 90 },
  { name: 'Node.js & Express', level: 78 },
  { name: 'MySQL & Sequelize', level: 72 },
  { name: 'Testing (Jasmine, Karma)', level: 75 },
  { name: 'DevOps (Git, CI/CD, AWS)', level: 65 },
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML', 'CSS / SCSS'],
  },
  {
    title: 'State & UI',
    items: ['RxJS', 'NGXS', 'Redux', 'Slate.js', 'Angular Material', 'Tailwind CSS', 'Bootstrap', 'PrimeReact'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'Sequelize', 'MySQL', 'SQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'DevOps & Quality',
    items: ['Git', 'Docker', 'Jenkins', 'GitHub Actions', 'AWS (EC2, S3, Lambda)', 'Terraform', 'Jasmine', 'Karma', 'Jira', 'Agile / Scrum'],
  },
];

export const MARQUEE = [
  { name: 'Angular', img: 'angularjs' },
  { name: 'React', img: 'atom' },
  { name: 'JavaScript', img: 'java-script-logo' },
  { name: 'Tailwind CSS', img: 'icons8-tailwind-css-50' },
  { name: 'Bootstrap', img: 'bootstrap' },
  { name: 'HTML5', img: 'html' },
  { name: 'CSS3', img: 'css-3' },
  { name: 'Node.js', img: 'developer' },
  { name: 'Express', img: 'icons8-express-js-48' },
  { name: 'MySQL', img: 'mysql' },
  { name: 'Sequelize', img: 'sequelize' },
  { name: 'Terraform', img: 'terraform' },
  { name: 'AWS', img: 'file' },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Tech Navitas',
    role: 'Java Frontend Developer',
    period: 'Dec 2025 — Present',
    location: 'US-based company',
    initials: 'TN',
    current: true,
    blurb:
      'Building HEBA (Healthcare Hub for Enterprise Benefits Administration), an enterprise platform that automates healthcare benefit management across organizations, plans and user groups.',
    highlights: [
      'Built a full-featured rich text editor from scratch with Slate.js — custom formatting, nested lists and dynamic tables — removing the dependency on third-party editors.',
      'Delivered centralized benefit workflows with role-based access, configurable validations, effective-dated configurations and reporting modules.',
      'Managed complex state across deeply nested trees with React hooks and Context API, eliminating prop-drilling.',
      'Wired RxJS observables and Angular services for real-time data streaming and reactive UI updates.',
      'Organized a large monolithic front end into scoped feature folders, shared libraries and core modules — faster onboarding, safer changes.',
      'Shipped on schedule with a US onshore team through Agile sprint planning, standups and retros (Jira, Teams).',
    ],
    tags: ['Angular', 'React', 'TypeScript', 'Slate.js', 'RxJS', 'Bootstrap'],
  },
  {
    company: 'Flip Health',
    role: 'Software Development Engineer II',
    period: 'Jan 2022 — Mar 2025',
    location: 'Health-tech · Hyderabad',
    logo: 'assets/download.png',
    initials: 'FH',
    blurb:
      'Led front-end development in Angular and React for healthcare platforms serving 50k+ users.',
    highlights: [
      'Cut initial load time by 30% with lazy loading, caching and code-splitting, improving Core Web Vitals.',
      'Built Jasmine/Karma UI test suites that reduced regression bugs by 40%.',
      'Created reusable component libraries that accelerated feature delivery across multiple apps.',
      'Built RESTful APIs with Node.js, Express, Sequelize and MySQL.',
      'Mentored 3 junior developers — PR turnaround improved by 50%.',
      'Introduced Git workflows that cut merge conflicts by 30%; worked with Jenkins, GitHub Actions and Terraform on AWS.',
      'Partnered with design and product to lift feature adoption by 15%; contributed to AI-powered automation features.',
    ],
    tags: ['Angular', 'React', 'Node.js', 'MySQL', 'AWS', 'Jasmine'],
  },
  {
    company: 'NxtWave',
    role: 'Full Stack Developer — Apprenticeship',
    period: 'Apr 2021 — Dec 2021',
    location: 'Ed-tech · Hyderabad',
    logo: 'assets/download-1.png',
    initials: 'NW',
    blurb:
      'Intensive full-stack program building and shipping real applications end to end.',
    highlights: [
      'Built full-stack apps with MongoDB, Express, React, Node.js, MySQL and Python.',
      'Shipped e-commerce and task-management apps integrating frontend and backend.',
      'Implemented role-based dashboards, dynamic routing and state management in Next.js.',
      'Designed CRUD-focused REST APIs and practiced disciplined Git workflows.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Python'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'HEBA — Benefits Administration',
    company: 'Tech Navitas',
    category: 'Enterprise · Healthcare',
    summary:
      'An enterprise healthcare and benefits administration platform that streamlines employee and member benefit management across multiple organizations, plans and user groups.',
    features: [
      'Role-based access and configurable validation rules per organization.',
      'Effective-dated configurations so plan changes roll out on the right day.',
      'Reporting modules that improve data accuracy and regulatory compliance.',
      'Standalone, loosely coupled components with a single source of truth for data.',
    ],
    tech: ['Angular', 'React', 'TypeScript', 'RxJS', 'Bootstrap'],
  },
  {
    title: 'Rich Text Editor',
    company: 'Tech Navitas',
    category: 'Component · Editor',
    summary:
      'A full-featured rich text editor built from scratch on Slate.js, replacing third-party editor libraries and giving the product full control over UX.',
    features: [
      'Custom inline and block formatting with keyboard shortcuts.',
      'Nested ordered and unordered lists with correct indent/outdent behaviour.',
      'Dynamic tables — insert and remove rows and columns in place.',
      'Serializable document model that plugs straight into existing forms.',
    ],
    tech: ['React', 'Slate.js', 'TypeScript'],
  },
  {
    title: 'Admin Web Application',
    company: 'Flip Health',
    category: 'Internal tools',
    summary:
      'A scalable admin application with granular role-based access for support, marketing and operations teams.',
    features: [
      'Real-time messaging, notifications and support-ticket chat via Firebase.',
      'Bulk import pipeline for large data sets, cutting manual data entry.',
      'Support agents can raise orders on behalf of patients.',
      'Order-level notes component that keeps cross-team context in one place.',
    ],
    challenges: [
      'Replaced per-module filter UIs with one configurable filter component and service that builds API query params — consistent UX, far less duplicated code.',
      'Centralized success/error feedback using HTTP interceptors and a BehaviorSubject-driven notification component.',
      'Modelled complex nested health-plan data with nested Reactive Form groups for reliable plan creation.',
    ],
    tech: ['Angular 13', 'RxJS', 'Angular Material', 'ApexCharts', 'Firebase', 'Jasmine'],
  },
  {
    title: 'Client Admin Panel',
    company: 'Flip Health',
    category: 'B2B · Dashboard',
    summary:
      'A self-service panel for client organizations to manage employees, billing, orders, consultations and support from one place.',
    features: [
      'Employee management with roles and activity tracking.',
      'Invoices, payment status and billing reports.',
      'Consultation scheduling and support ticket tracking.',
      'Usage dashboard: onboarded employees, tickets, orders and cancellations.',
    ],
    challenges: [
      'Built a dynamic, client-specific authorization model with strict data segregation, making new client onboarding scalable.',
      'Fixed slow dashboard loads by removing redundant API calls, lazy loading modules and adopting OnPush change detection.',
    ],
    tech: ['Angular 14', 'RxJS', 'Tailwind CSS', 'Angular Material', 'ApexCharts'],
  },
  {
    title: 'Enrollment Flow',
    company: 'Flip Health',
    category: 'Customer-facing',
    summary:
      'A guided onboarding experience: sign up, compare health plans, pay securely and upgrade any time.',
    features: [
      'Step-by-step registration and onboarding.',
      'Plan browsing and side-by-side comparison.',
      'Razorpay checkout with secure payment handling.',
      'Subscription management and in-place plan upgrades.',
    ],
    tech: ['Angular 17', 'RxJS', 'Tailwind CSS', 'Razorpay', 'Firebase'],
  },
  {
    title: 'AI Medical Analysis',
    company: 'Flip Health',
    category: 'AI · Healthcare',
    summary:
      'A platform that analyzes test results, summarizes medical reports and flags potential heart irregularities from ECGs using fine-tuned Hugging Face models.',
    features: [
      'DTR analysis that interprets detailed test reports automatically.',
      'Report analyzer producing plain-language summaries.',
      'ECG analyzer that highlights potential irregularities.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Hugging Face'],
  },
  {
    title: 'Movie Explorer',
    company: 'Personal project',
    category: 'Side project',
    summary:
      'A fast, responsive movie discovery app on the TMDB API with trending titles driven by real search activity.',
    features: [
      'Search and filter movies by name.',
      'Trending list computed from tracked searches (Appwrite).',
      'Robust API error handling and fully responsive UI.',
    ],
    tech: ['React 19', 'Vite 7', 'Tailwind CSS', 'TMDB API', 'Appwrite'],
    link: 'https://movies-web-app-koy7.vercel.app',
  },
];

export const CERTIFICATES = [
  'Full Stack Developer',
  'Node.js',
  'Git & Command Line',
  'SQL',
  'Python',
];

export const LANGUAGES = [
  { name: 'English', level: 'Fluent' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Deutsch', level: 'A2' },
];
