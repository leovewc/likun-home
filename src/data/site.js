import { computed, ref } from 'vue'

const content = {
  en: {
    locale: 'en',
    languageLabel: 'EN',
    nextLanguageLabel: '中文',
    pageTitles: {
      Home: 'LINKUN | Intelligent Software Company',
      Projects: 'Projects | LINKUN',
      Publish: 'Product Releases | LINKUN',
      Blog: 'Blog | LINKUN',
      About: 'About | LINKUN',
    },
    nav: [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Publish', to: '/publish' },
      { label: 'Blog', href: 'https://blog.likun.vip' },
      { label: 'About', to: '/about' },
    ],
    profile: {
      name: 'LINKUN',
      handle: 'LINKUN',
      title: 'Independent AI software company',
      shortTitle: 'AI Software Company',
      email: 'hello@linkun.dev',
      github: 'https://github.com/linkun',
      blog: 'https://blog.likun.vip',
      resume: '/company-profile.pdf',
      location: 'China',
      headline: 'Intelligent software for modern businesses.',
      subheadline:
        'LINKUN designs AI-native tools, operational web systems, desktop products, and cloud-ready software for teams that need practical automation without enterprise friction.',
    },
    hero: {
      eyebrow: 'LINKUN / AI Software Company',
      actions: {
        projects: 'View Projects',
        releases: 'Product Releases',
        profile: 'Company Profile',
      },
      panels: {
        topEyebrow: 'Adaptive Layer',
        topTitle: 'AI Systems',
        topText: 'Vision, automation, inference, internal tools.',
        bottomEyebrow: 'Product Surface',
        bottomTitle: 'Web / Cloud / Desktop',
        bottomText: 'Interfaces and release workflows for real operations.',
      },
    },
    heroMetrics: [
      { value: 'AI', label: 'Applied intelligence and computer vision workflows' },
      { value: 'Systems', label: 'Full-stack platforms, APIs, and desktop products' },
      { value: 'Cloud', label: 'Deployment, data, release, and operational tooling' },
    ],
    projects: [
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
    ],
    skillGroups: [
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
    ],
    releases: [
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
    ],
    focusAreas: [
      'AI-assisted business systems',
      'Practical computer vision products',
      'Cloud-ready full-stack platforms',
      'Desktop software release workflows',
    ],
    common: {
      github: 'GitHub',
      email: 'Email',
      blog: 'Blog',
      details: 'Details',
      download: 'Download',
      viewDetails: 'View Details',
      comingSoon: 'Coming Soon',
      version: 'Version',
      platform: 'Platform',
    },
    home: {
      featuredEyebrow: 'Featured Projects',
      featuredTitle: 'Product and engineering work across AI, cloud, desktop, and immersive systems.',
      allProjects: 'All Projects',
      skillsEyebrow: 'Skills / Tech Stack',
      skillsTitle: 'The operating stack behind LINKUN software systems.',
      releasesEyebrow: 'Publish / Releases',
      releasesTitle: 'Recent product builds, demos, and company resources.',
      downloadCenter: 'Open Download Center',
      contactEyebrow: 'Contact',
      contactTitle: 'Building an AI workflow, internal platform, or operational product?',
      contactText:
        'LINKUN works on intelligent systems, full-stack product builds, cloud deployment, and release-ready software for focused teams.',
    },
    projectsPage: {
      eyebrow: 'Portfolio',
      title: 'Projects',
      text:
        'A glass-styled portfolio of software products, AI experiments, cloud deployments, and immersive interaction prototypes.',
    },
    publishPage: {
      eyebrow: 'Download Center',
      title: 'Product Releases',
      text: 'Download software builds, demos, and portfolio resources.',
      latestEyebrow: 'Latest Build',
      latestTitle: 'LkPOS Desktop v1.0.0',
      latestText:
        'A beta Windows release for a practical desktop POS workflow. Download links are preserved as placeholders until the final build assets are uploaded.',
      downloadLatest: 'Download Latest',
    },
    aboutPage: {
      eyebrow: 'About',
      title: 'LINKUN is an independent software company for intelligent business systems.',
      text:
        'We work at the intersection of AI engineering, full-stack product development, cloud deployment, and polished user-facing software.',
      cards: [
        {
          eyebrow: 'Background',
          title: 'Practical engineering with a product mindset.',
          text:
            'Our work focuses on turning technical ideas into usable software: clean interfaces, reliable services, useful automation, and release flows that make a project feel real.',
        },
        {
          eyebrow: 'Engineering Interests',
          title: 'AI systems, web platforms, and desktop products.',
          text:
            'LINKUN is especially interested in computer vision, AI-assisted workflows, full-stack architecture, cloud operations, and interaction-heavy applications.',
        },
        {
          eyebrow: 'Current Focus',
          title: 'Building a portfolio of intelligent application systems.',
        },
        {
          eyebrow: 'Contact',
          title: 'Open to collaboration and engineering conversations.',
          emailLabel: 'Email',
          githubLabel: 'GitHub',
        },
      ],
    },
    blogPage: {
      eyebrow: 'Blog',
      title: 'Field notes from building AI software products.',
      text:
        'A future home for concise engineering notes, release writeups, and practical lessons from building intelligent applications.',
      posts: [
        {
          title: 'Designing AI features that feel practical',
          summary: 'Notes on moving from impressive demos to useful software workflows.',
          tag: 'AI Product',
        },
        {
          title: 'Shipping desktop software with a web stack',
          summary: 'A short field note on Vue, Vite, Electron, and release packaging.',
          tag: 'Engineering',
        },
        {
          title: 'Cloud deployment as a product skill',
          summary: 'Why deployment, monitoring, and data flow matter for independent builders.',
          tag: 'Cloud',
        },
      ],
    },
    footer: {
      text: 'Independent AI software company building practical intelligent systems.',
    },
  },
  zh: {
    locale: 'zh-CN',
    languageLabel: '中文',
    nextLanguageLabel: 'EN',
    pageTitles: {
      Home: 'LINKUN | 智能软件公司',
      Projects: '项目 | LINKUN',
      Publish: '产品发布 | LINKUN',
      Blog: '博客 | LINKUN',
      About: '关于 | LINKUN',
    },
    nav: [
      { label: '首页', to: '/' },
      { label: '项目', to: '/projects' },
      { label: '发布', to: '/publish' },
      { label: '博客', href: 'https://blog.likun.vip' },
      { label: '关于', to: '/about' },
    ],
    profile: {
      name: 'LINKUN',
      handle: 'LINKUN',
      title: '独立 AI 软件公司',
      shortTitle: 'AI 软件公司',
      email: 'hello@linkun.dev',
      github: 'https://github.com/linkun',
      blog: 'https://blog.likun.vip',
      resume: '/company-profile.pdf',
      location: 'China',
      headline: '为现代商业构建智能软件。',
      subheadline:
        'LINKUN 设计 AI 原生工具、运营型 Web 系统、桌面产品与云端软件，为需要实用自动化能力的团队提供更轻量的工程交付。',
    },
    hero: {
      eyebrow: 'LINKUN / AI 软件公司',
      actions: {
        projects: '查看项目',
        releases: '产品发布',
        profile: '公司资料',
      },
      panels: {
        topEyebrow: '自适应智能层',
        topTitle: 'AI 系统',
        topText: '视觉、自动化、推理与内部工具。',
        bottomEyebrow: '产品界面层',
        bottomTitle: 'Web / Cloud / Desktop',
        bottomText: '面向真实业务的界面与发布流程。',
      },
    },
    heroMetrics: [
      { value: 'AI', label: '应用智能与计算机视觉工作流' },
      { value: '系统', label: '全栈平台、API 与桌面产品' },
      { value: '云端', label: '部署、数据、发布与运营工具' },
    ],
    projects: [
      {
        title: 'LkPOS Desktop',
        description: '面向 Windows 的桌面 POS 产品，关注清晰交易流程、库存可视化与实际发布打包。',
        tags: ['Vue', 'Vite', 'Electron', 'MySQL'],
        status: 'Beta',
        category: '桌面产品',
        featured: true,
        github: 'https://github.com/likun/lkpos-desktop',
        demo: '/publish',
      },
      {
        title: 'MIRAGE HOI Detection',
        description: '人体-物体交互检测系统，探索视觉推理、模型推理与评估流程。',
        tags: ['AI', 'Computer Vision', 'Python', 'PyTorch'],
        status: '研究演示',
        category: 'AI / 视觉',
        featured: true,
        github: 'https://github.com/likun/mirage-hoi',
        demo: '/projects',
      },
      {
        title: 'AWS Cloud Deployment',
        description: '云部署参考项目，用于服务打包、基础设施配置和稳定后端工作负载交付。',
        tags: ['AWS', 'Linux', 'Spring Boot', 'MySQL'],
        status: '生产实践',
        category: '云工程',
        featured: true,
        github: 'https://github.com/likun/aws-cloud-deployment',
        demo: '/projects',
      },
      {
        title: 'Unity VR Interaction Demo',
        description: '空间交互原型，用于沉浸式训练场景、手势控制与 VR 体验快速验证。',
        tags: ['Unity', 'VR', 'C#', '交互设计'],
        status: '原型',
        category: '沉浸式技术',
        featured: true,
        github: 'https://github.com/likun/unity-vr-demo',
        demo: '/projects',
      },
    ],
    skillGroups: [
      {
        title: 'AI / 计算机视觉',
        items: ['HOI 检测', '模型推理', '数据集流程', '评估'],
      },
      {
        title: 'Python / PyTorch',
        items: ['训练脚本', 'FastAPI 服务', '实验流程', '自动化'],
      },
      {
        title: 'Java Spring Boot',
        items: ['REST API', '业务逻辑', '服务架构', '后端交付'],
      },
      {
        title: 'Vue / Vite / Electron',
        items: ['玻璃 UI', '桌面应用', 'SPA 路由', '发布构建'],
      },
      {
        title: 'AWS / MySQL',
        items: ['部署', '云端运维', '关系型数据', 'Linux 服务器'],
      },
      {
        title: 'Unity / VR',
        items: ['交互演示', '场景逻辑', 'C# 原型', '空间体验'],
      },
    ],
    releases: [
      {
        title: 'LkPOS Desktop',
        version: 'v1.0.0',
        platform: 'Windows',
        status: 'Beta',
        type: '桌面应用',
        description: 'Windows 桌面 POS 构建版本，包含收银、商品、库存与发布打包流程。',
        download: '/downloads/LkPOS-v1.0.0.zip',
        github: 'https://github.com/likun/lkpos-desktop',
        details: '/projects',
      },
      {
        title: 'AI Engine Service',
        version: 'v0.1.0',
        platform: 'Python / FastAPI',
        status: '实验版',
        type: 'AI 服务',
        description: '轻量级 AI 推理 API 服务，用于实验、流程集成和内部演示。',
        download: '/downloads/ai-engine-v0.1.0.zip',
        github: 'https://github.com/likun/ai-engine-service',
        details: '/projects',
      },
      {
        title: 'Company Profile',
        version: 'PDF',
        platform: '公司资料',
        status: '可下载',
        type: '文档',
        description: '用于项目沟通、合作洽谈和技术介绍的简洁公司资料。',
        download: '/company-profile.pdf',
        github: 'https://github.com/linkun',
        details: '/about',
      },
    ],
    focusAreas: [
      'AI 辅助业务系统',
      '实用计算机视觉产品',
      '云端全栈平台',
      '桌面软件发布流程',
    ],
    common: {
      github: 'GitHub',
      email: '邮箱',
      blog: '博客',
      details: '详情',
      download: '下载',
      viewDetails: '查看详情',
      comingSoon: '即将发布',
      version: '版本',
      platform: '平台',
    },
    home: {
      featuredEyebrow: '精选项目',
      featuredTitle: '覆盖 AI、云端、桌面与沉浸式系统的产品与工程实践。',
      allProjects: '全部项目',
      skillsEyebrow: '能力 / 技术栈',
      skillsTitle: '支撑 LINKUN 软件系统的工程能力。',
      releasesEyebrow: '发布 / 下载',
      releasesTitle: '近期产品构建、演示与公司资料。',
      downloadCenter: '打开下载中心',
      contactEyebrow: '联系',
      contactTitle: '正在构建 AI 工作流、内部平台或运营型产品？',
      contactText: 'LINKUN 为专注的团队构建智能系统、全栈产品、云部署与可发布的软件。',
    },
    projectsPage: {
      eyebrow: '作品集',
      title: '项目',
      text: '以玻璃质感呈现的软件产品、AI 实验、云部署与沉浸式交互原型。',
    },
    publishPage: {
      eyebrow: '下载中心',
      title: '产品发布',
      text: '下载软件构建、演示版本与公司资料。',
      latestEyebrow: '最新构建',
      latestTitle: 'LkPOS Desktop v1.0.0',
      latestText: '面向实际桌面 POS 工作流的 Windows Beta 版本。下载链接会先作为占位保留，等待最终构建文件上传。',
      downloadLatest: '下载最新版',
    },
    aboutPage: {
      eyebrow: '关于',
      title: 'LINKUN 是一家面向智能业务系统的独立软件公司。',
      text: '我们工作在 AI 工程、全栈产品开发、云部署和高质感用户界面的交叉点。',
      cards: [
        {
          eyebrow: '背景',
          title: '以产品思维推进实用工程。',
          text: '我们的工作重点是把技术想法变成可用软件：清晰界面、可靠服务、实用自动化，以及让项目真正可发布的流程。',
        },
        {
          eyebrow: '工程兴趣',
          title: 'AI 系统、Web 平台与桌面产品。',
          text: 'LINKUN 关注计算机视觉、AI 辅助工作流、全栈架构、云端运维和强交互应用。',
        },
        {
          eyebrow: '当前重点',
          title: '构建一组智能应用系统。',
        },
        {
          eyebrow: '联系',
          title: '欢迎交流合作与工程问题。',
          emailLabel: '邮箱',
          githubLabel: 'GitHub',
        },
      ],
    },
    blogPage: {
      eyebrow: '博客',
      title: '关于 AI 软件产品构建的现场笔记。',
      text: '这里将用于沉淀简洁的工程笔记、版本发布记录，以及构建智能应用过程中的实践经验。',
      posts: [
        {
          title: '设计真正实用的 AI 功能',
          summary: '从惊艳演示走向可用软件工作流的一些笔记。',
          tag: 'AI 产品',
        },
        {
          title: '用 Web 技术发布桌面软件',
          summary: '关于 Vue、Vite、Electron 与发布打包的简短实践记录。',
          tag: '工程',
        },
        {
          title: '云部署也是产品能力',
          summary: '为什么部署、监控和数据流对独立构建者同样重要。',
          tag: '云端',
        },
      ],
    },
    footer: {
      text: '独立 AI 软件公司，构建实用的智能系统。',
    },
  },
}

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem('linkun-language')
  if (saved === 'en' || saved === 'zh') return saved

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export const language = ref(getInitialLanguage())
export const siteContent = computed(() => content[language.value])

export const setLanguage = (nextLanguage) => {
  if (!content[nextLanguage]) return

  language.value = nextLanguage

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('linkun-language', nextLanguage)
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = content[nextLanguage].locale
  }
}

export const toggleLanguage = () => {
  setLanguage(language.value === 'en' ? 'zh' : 'en')
}

setLanguage(language.value)
