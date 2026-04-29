export const profile = {
  name: 'LINKUN',
  handle: 'LINKUN',
  title: 'Independent AI software company',
  shortTitle: 'AI Software Company',
  email: 'hello@linkun.dev',
  github: 'https://github.com/linkun',
  blog: '/blog',
  resume: '/company-profile.pdf',
  location: 'China',
  headline: 'Intelligent software for modern businesses.',
  subheadline:
    'LINKUN designs AI-native tools, operational web systems, desktop products, and cloud-ready software for teams that need practical automation without enterprise friction.',
}

export const heroMetrics = [
  { value: 'AI', label: 'Applied intelligence and computer vision workflows' },
  { value: 'Systems', label: 'Full-stack platforms, APIs, and desktop products' },
  { value: 'Cloud', label: 'Deployment, data, release, and operational tooling' },
]

export const projects = [
  {
    title: 'LkPOS Desktop',
    description:
      'A Windows desktop POS product focused on clean transaction flows, inventory visibility, and practical release packaging.',
    tags: ['Vue', 'Vite', 'Electron', 'MySQL'],
    status: 'Beta',
    category: 'Desktop Product',
    featured: true,
    github: 'https://github.com/likun/lkpos-desktop',
    demo: '/publish',
  },
  {
    title: 'MIRAGE HOI Detection',
    description:
      'A human-object interaction detection system exploring visual reasoning, model inference, and evaluation pipelines.',
    tags: ['AI', 'Computer Vision', 'Python', 'PyTorch'],
    status: 'Research Demo',
    category: 'AI / CV',
    featured: true,
    github: 'https://github.com/likun/mirage-hoi',
    demo: '/projects',
  },
  {
    title: 'AWS Cloud Deployment',
    description:
      'A deployment reference for packaging services, configuring infrastructure, and shipping stable backend workloads.',
    tags: ['AWS', 'Linux', 'Spring Boot', 'MySQL'],
    status: 'Production Practice',
    category: 'Cloud Engineering',
    featured: true,
    github: 'https://github.com/likun/aws-cloud-deployment',
    demo: '/projects',
  },
  {
    title: 'Unity VR Interaction Demo',
    description:
      'A spatial interaction prototype for immersive training scenes, gesture-based controls, and fast VR validation.',
    tags: ['Unity', 'VR', 'C#', 'Interaction Design'],
    status: 'Prototype',
    category: 'Immersive Tech',
    featured: true,
    github: 'https://github.com/likun/unity-vr-demo',
    demo: '/projects',
  },
]

export const skillGroups = [
  {
    title: 'AI / Computer Vision',
    items: ['HOI detection', 'model inference', 'dataset workflows', 'evaluation'],
  },
  {
    title: 'Python / PyTorch',
    items: ['training scripts', 'FastAPI services', 'experiments', 'automation'],
  },
  {
    title: 'Java Spring Boot',
    items: ['REST APIs', 'business logic', 'service architecture', 'backend delivery'],
  },
  {
    title: 'Vue / Vite / Electron',
    items: ['glass UI', 'desktop apps', 'SPA routing', 'release builds'],
  },
  {
    title: 'AWS / MySQL',
    items: ['deployment', 'cloud operations', 'relational data', 'Linux servers'],
  },
  {
    title: 'Unity / VR',
    items: ['interaction demos', 'scene logic', 'C# prototypes', 'spatial UX'],
  },
]

export const releases = [
  {
    title: 'LkPOS Desktop',
    version: 'v1.0.0',
    platform: 'Windows',
    status: 'Beta',
    type: 'Desktop App',
    description:
      'A Windows desktop POS build with cashier, product, inventory, and release packaging workflows.',
    download: '/downloads/LkPOS-v1.0.0.zip',
    github: 'https://github.com/likun/lkpos-desktop',
    details: '/projects',
  },
  {
    title: 'AI Engine Service',
    version: 'v0.1.0',
    platform: 'Python / FastAPI',
    status: 'Experimental',
    type: 'AI Service',
    description:
      'A lightweight API service for AI inference experiments, workflow integration, and internal demos.',
    download: '/downloads/ai-engine-v0.1.0.zip',
    github: 'https://github.com/likun/ai-engine-service',
    details: '/projects',
  },
  {
    title: 'Company Profile',
    version: 'PDF',
    platform: 'Company Resource',
    status: 'Available',
    type: 'Document',
    description:
      'A concise company profile for project conversations, partnerships, and technical introductions.',
    download: '/company-profile.pdf',
    github: 'https://github.com/linkun',
    details: '/about',
  },
]

export const focusAreas = [
  'AI-assisted business systems',
  'Practical computer vision products',
  'Cloud-ready full-stack platforms',
  'Desktop software release workflows',
]
