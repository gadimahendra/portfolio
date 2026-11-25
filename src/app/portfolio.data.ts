// All the text on the site lives here. Edit this file to update the portfolio.

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
    "I've been building web apps for a little over four years, mostly in Angular and React with TypeScript. I care about pages that load fast and code the next person can actually read. When a feature needs an API, I'm happy to write the Node.js side too.",
};

export const STATS = [
  { to: 4, suffix: '+', label: 'Years building for the web' },
  { to: 50, suffix: 'k+', label: 'People using apps I worked on' },
  { to: 30, suffix: '%', label: 'Faster first load at Flip Health' },
  { to: 40, suffix: '%', label: 'Fewer regression bugs after adding tests' },
];

/** Big words in the scrolling strip. */
export const MARQUEE_WORDS = ['Angular', 'React', 'TypeScript', 'RxJS', 'Node.js', 'Slate.js', 'Tailwind', 'Performance', 'Testing'];

/** Skills shown with the gauge. Levels are my own honest rating, 0 to 100. */
export const SKILL_TIERS = [
  {
    tier: 'Expert',
    items: [
      { name: 'Angular', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML / SCSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    tier: 'Advanced',
    items: [
      { name: 'React', level: 85 },
      { name: 'RxJS', level: 85 },
      { name: 'Angular Material', level: 85 },
      { name: 'Bootstrap', level: 88 },
      { name: 'NGXS / Redux', level: 80 },
      { name: 'Slate.js', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Jasmine / Karma', level: 75 },
    ],
  },
  {
    tier: 'Comfortable',
    items: [
      { name: 'Node.js', level: 78 },
      { name: 'Express', level: 78 },
      { name: 'MySQL', level: 72 },
      { name: 'Sequelize', level: 70 },
      { name: 'Next.js', level: 70 },
      { name: 'AWS', level: 60 },
      { name: 'Jenkins', level: 60 },
      { name: 'Docker', level: 55 },
    ],
  },
];

/** "What sets me apart" cards. icon: speed | shield | blocks | stack */
export const STRENGTHS = [
  {
    icon: 'speed',
    title: 'Fast by default',
    text: 'I measure before I touch anything. At Flip Health, lazy loading, caching and code splitting took 30% off the first load and improved Core Web Vitals.',
  },
  {
    icon: 'shield',
    title: 'Tested before it ships',
    text: 'I write the tests alongside the feature. Our Jasmine and Karma suites cut regression bugs by about 40% and made releases a lot calmer.',
  },
  {
    icon: 'blocks',
    title: 'Built to be reused',
    text: 'Shared component libraries, one filter component instead of ten, an editor we own instead of a library we fight. Less code for the next person.',
  },
  {
    icon: 'stack',
    title: 'Screen to database',
    text: 'When a feature needs an API, I write it in Node.js and Express with Sequelize and MySQL, so one person can see it through end to end.',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Tech Navitas',
    role: 'Java Frontend Developer',
    period: 'Dec 2025 – Present',
    location: 'US-based company',
    initials: 'TN',
    current: true,
    blurb:
      "I work on HEBA (Healthcare Hub for Enterprise Benefits Administration). It's a large platform that companies use to manage healthcare benefits for their employees across many organizations, plans and user groups.",
    highlights: [
      'Wrote a rich text editor from scratch on Slate.js with custom formatting, nested lists and tables, so the app no longer depends on a third-party editor.',
      'Built benefit workflows with role-based access, configurable validations, effective-dated settings and reports.',
      'Moved deeply nested React state into hooks and Context, which got rid of a lot of prop-drilling.',
      'Used RxJS and Angular services to push live data into the UI and keep business logic out of the components.',
      'Work inside a big monolithic codebase with shared modules and central routing, adding features without breaking what is already there.',
      'Plan, demo and ship every sprint with the onshore team in the US over Jira and Teams.',
    ],
    tags: ['Angular', 'React', 'TypeScript', 'Slate.js', 'RxJS', 'Bootstrap'],
  },
  {
    company: 'Flip Health',
    role: 'Software Development Engineer II',
    period: 'Jan 2022 – Mar 2025',
    location: 'Health-tech, Hyderabad',
    logo: 'assets/download.png',
    initials: 'FH',
    blurb:
      'I led frontend work on Flip Health\'s healthcare apps in Angular and React. These were used by more than 50,000 people.',
    highlights: [
      'Brought initial load time down by 30% with lazy loading, caching and code splitting.',
      'Wrote Jasmine and Karma test suites, which cut regression bugs by about 40%.',
      'Built a shared component library that several of our apps used.',
      'Wrote REST APIs in Node.js and Express with Sequelize and MySQL.',
      'Mentored three junior developers. Our PR turnaround got about twice as fast.',
      'Set up a Git branching and review workflow that reduced merge conflicts by 30%. Also worked with Jenkins, GitHub Actions and Terraform on AWS.',
      'Worked closely with design and product on user journeys, and helped build some AI features for digitising healthcare workflows.',
    ],
    tags: ['Angular', 'React', 'Node.js', 'MySQL', 'AWS', 'Jasmine'],
  },
  {
    company: 'NxtWave',
    role: 'Full Stack Developer (Apprenticeship)',
    period: 'Apr 2021 – Dec 2021',
    location: 'Ed-tech, Hyderabad',
    logo: 'assets/download-1.png',
    initials: 'NW',
    blurb:
      'This is where I learned to build full apps end to end, frontend and backend.',
    highlights: [
      'Built small full-stack apps with MongoDB, Express, React, Node.js, MySQL and Python.',
      'Made an e-commerce site and a task manager that tied the frontend and backend together.',
      'Built role-based dashboards with routing and state management in Next.js.',
      'Got comfortable with REST API design, CRUD and working in Git with a team.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Python'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'HEBA Benefits Platform',
    company: 'Tech Navitas',
    category: 'Enterprise, healthcare',
    summary:
      "The platform I work on today. Employers use it to run healthcare benefits for their staff: who is enrolled in what, which rules apply and when changes take effect.",
    features: [
      'Screens that change based on the user\'s role and permissions.',
      'Validation rules that each organization can configure for itself.',
      'Effective-dated settings, so a plan change goes live on the right day.',
      'Reports that help with data accuracy and compliance.',
      'Standalone components that don\'t depend on their parent, with one source of truth for data.',
    ],
    tech: ['Angular', 'React', 'TypeScript', 'RxJS', 'Bootstrap'],
  },
  {
    title: 'Rich Text Editor',
    company: 'Tech Navitas',
    category: 'Reusable component',
    summary:
      'We needed an editor we fully controlled, so I built one from scratch on Slate.js instead of pulling in another third-party library.',
    features: [
      'Custom text formatting.',
      'Nested ordered and unordered lists.',
      'Tables where you can add and remove rows and columns.',
      'Drops into the existing forms in the app.',
    ],
    tech: ['React', 'Slate.js', 'TypeScript'],
  },
  {
    title: 'Admin Web Application',
    company: 'Flip Health',
    category: 'Internal tool',
    summary:
      "The internal admin app that Flip Health's support, marketing and operations teams used every day. Each team only sees the parts it has permission for.",
    features: [
      'Real-time chat between customers and support agents, plus notifications, using Firebase.',
      'Bulk import for large data sets, so people stopped entering rows by hand.',
      'Support agents can place orders on behalf of patients.',
      'A notes panel on each order, so teams stopped losing context in other chat apps.',
      'Debounced search inputs and API calls to avoid unnecessary requests.',
    ],
    challenges: [
      'Every module had built its own filter UI, so they all looked different and the code was copied everywhere. I replaced them with one filter component and a shared service. A module passes in its config, and the component builds the right UI and query parameters.',
      'Success and error snackbars were also written separately in every component. I moved this into an HTTP interceptor and a small notification service, so every API call gives the same kind of feedback.',
      "Health plans have deeply nested data (features, price tiers, coverage). I modelled them with nested reactive form groups so the form matched what the backend expected.",
    ],
    tech: ['Angular 13', 'RxJS', 'Angular Material', 'ApexCharts', 'Firebase', 'Jasmine'],
  },
  {
    title: 'Client Admin Panel',
    company: 'Flip Health',
    category: 'B2B dashboard',
    summary:
      'A panel for our client companies to look after their own employees: billing, orders, doctor consultations and support tickets, all in one place.',
    features: [
      'Add, edit and remove employees and assign them roles.',
      'See invoices and payment status, and download billing reports.',
      'Book and cancel consultations, and raise and follow support tickets.',
      'A dashboard showing employees onboarded, tickets, orders and cancellations.',
    ],
    challenges: [
      'Each client had a different team structure and different permission needs. I built a role system where permissions are assigned per client, and each client can only ever see its own data. Onboarding a new client became mostly configuration.',
      'As the panel grew, the dashboard got slow. Using browser dev tools I found extra API calls and too much change detection. Removing those calls, lazy loading modules and switching to OnPush made it noticeably faster.',
    ],
    tech: ['Angular 14', 'RxJS', 'Tailwind CSS', 'Angular Material', 'ApexCharts'],
  },
  {
    title: 'Enrollment Flow',
    company: 'Flip Health',
    category: 'Customer-facing',
    summary:
      'The sign-up journey for new customers: create an account, compare plans, pay, and upgrade later if they want.',
    features: [
      'Step-by-step registration.',
      'Plan list and comparison.',
      'Payments through Razorpay.',
      'Plan upgrades and subscription management after purchase.',
    ],
    tech: ['Angular 17', 'RxJS', 'Tailwind CSS', 'Razorpay', 'Firebase'],
  },
  {
    title: 'AI Medical Report Analysis',
    company: 'Flip Health',
    category: 'AI, healthcare',
    summary:
      'A web app that reads medical test results and reports, writes a short summary, and flags possible heart irregularities in ECGs. It runs on models we fine-tuned from Hugging Face.',
    features: [
      'Reads and interprets detailed test reports (DTR).',
      'Summarises medical reports in plain language.',
      'Checks ECGs and highlights possible irregularities.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Hugging Face'],
  },
  {
    title: 'Movie Explorer',
    company: 'Personal project',
    category: 'Side project',
    summary:
      'A small app I built for fun to try React 19 and Vite 7. You can search movies from the TMDB API, and the trending list is based on what people actually search for.',
    features: [
      'Search movies by name.',
      'Trending list built from saved searches (stored in Appwrite).',
      'Handles API errors gracefully, and works on phone and desktop.',
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
  { name: 'German', level: 'A2' },
];
