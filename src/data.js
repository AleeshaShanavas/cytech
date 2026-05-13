import {
  FaAndroid,
  FaCheckCircle,
  FaBullhorn,
  FaCloud,
  FaDatabase,
  FaDocker,
  FaMobileAlt,
  FaJava,
  FaHospital,
  FaIndustry,
  FaLaptopCode,
  FaNodeJs,
  FaPython,
  FaRoute,
  FaStore,
  FaTruckMoving,
  FaUtensils,
} from 'react-icons/fa'
import { SiFlutter, SiGooglecloud, SiKubernetes, SiLaravel, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiReact, SiRedis, SiTailwindcss, SiFirebase, SiExpress, SiDjango, SiAngular, SiVuedotjs, SiRedux, SiSpringboot, SiGraphql } from 'react-icons/si'

export const services = [
  {
    slug: 'erp',
    title: 'ERP Software',
    icon: FaDatabase,
    short: 'Centralized business management for finance, inventory, sales, HR, and operations.',
    description:
      'Kienex designs and deploys ERP systems that connect teams, data, and daily workflows into one reliable operating platform. We help businesses move from spreadsheets and disconnected tools to a secure, role-based system that is easier to measure and scale.',
    features: ['Finance and accounting', 'Inventory and warehouse control', 'Sales and purchase workflows', 'HR and payroll modules', 'Role-based dashboards'],
    benefits: ['Better visibility across departments', 'Faster approvals and reporting', 'Reduced manual data entry', 'Scalable processes for growing teams'],
    technologies: ['ERPNext', 'Odoo', 'PostgreSQL', 'Python', 'React'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software',
    icon: FaLaptopCode,
    short: 'Purpose-built web and mobile systems shaped around exact business needs.',
    description:
      'We build custom applications for companies that need software aligned with their own operations, customer journeys, and growth plans. From portals to internal workflow tools, every build focuses on usability, reliability, and maintainable engineering.',
    features: ['Web applications', 'Customer portals', 'Admin dashboards', 'API integrations', 'Mobile-ready interfaces'],
    benefits: ['Software that fits your workflow', 'Cleaner user experiences', 'Secure integration with existing systems', 'Room for future feature growth'],
    technologies: ['React', 'Node.js', 'Laravel', 'REST APIs', 'MySQL'],
  },
  {
    slug: 'cloud',
    title: 'Cloud Server & Solutions',
    icon: FaCloud,
    short: 'Secure cloud hosting, deployment, backup, and infrastructure management.',
    description:
      'Kienex helps businesses run dependable cloud environments with practical architecture, monitoring, backups, and deployment processes. The result is a faster, more resilient foundation for business applications.',
    features: ['Cloud server setup', 'Application deployment', 'Backup planning', 'Monitoring and uptime checks', 'Security hardening'],
    benefits: ['Improved availability', 'Lower infrastructure overhead', 'Protected business data', 'Flexible resources as demand changes'],
    technologies: ['AWS', 'Azure', 'Linux', 'Docker', 'Nginx'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: FaBullhorn,
    short: 'Search, social, content, and conversion-focused campaigns for measurable growth.',
    description:
      'Our digital marketing services help businesses improve visibility, generate qualified leads, and turn online interest into customer action. We combine strategy, content, analytics, and campaign management.',
    features: ['SEO optimization', 'Social media campaigns', 'Landing pages', 'Analytics setup', 'Lead generation funnels'],
    benefits: ['Higher online visibility', 'Better campaign measurement', 'More qualified leads', 'Consistent brand communication'],
    technologies: ['Google Analytics', 'Search Console', 'Meta Ads', 'Google Ads', 'CMS platforms'],
  },
]

export const products = [
  {
    slug: 'erpnext',
    name: 'ERPNext',
    icon: FaDatabase,
    short: 'Open-source ERP for finance, inventory, HR, CRM, manufacturing, and services.',
    overview:
      'ERPNext is a flexible business management platform suited for companies that want strong ERP capabilities with open-source freedom. Kienex configures, customizes, and supports ERPNext for real operational use.',
    features: ['Accounting', 'Inventory', 'CRM', 'HRMS', 'Manufacturing', 'Project management'],
    useCases: ['Trading operations', 'Manufacturing planning', 'Service businesses', 'Multi-branch inventory'],
    integrations: ['Payment gateways', 'E-commerce platforms', 'POS systems', 'Email and SMS services'],
  },
  {
    slug: 'odoo',
    name: 'Odoo',
    icon: FaStore,
    short: 'Modular business apps for sales, CRM, accounting, inventory, and operations.',
    overview:
      'Odoo provides a modular suite of applications for companies that need a broad business platform. Kienex helps choose the right modules, implement workflows, migrate data, and train teams.',
    features: ['Sales and CRM', 'Accounting', 'Inventory', 'POS', 'Website and e-commerce', 'Helpdesk'],
    useCases: ['Retail chains', 'Distribution businesses', 'Customer service teams', 'Online stores'],
    integrations: ['Shipping providers', 'Accounting tools', 'Bank feeds', 'Marketplace connectors'],
  },
  {
    slug: 'tally',
    name: 'Tally',
    icon: FaIndustry,
    short: 'Trusted accounting and business software for finance, compliance, and inventory.',
    overview:
      'Tally is widely used for accounting, GST/VAT workflows, stock management, and financial reporting. Kienex supports setup, data organization, integration planning, and reporting workflows.',
    features: ['Accounting', 'Tax compliance', 'Inventory tracking', 'Financial reports', 'Multi-company support'],
    useCases: ['Small businesses', 'Trading companies', 'Account teams', 'Inventory-led operations'],
    integrations: ['ERP systems', 'Reporting dashboards', 'Import and export workflows', 'Custom connectors'],
  },
]

export const industries = [
  { name: 'Trading', icon: FaStore },
  { name: 'Logistics', icon: FaTruckMoving },
  { name: 'Manufacturing', icon: FaIndustry },
  { name: 'Healthcare', icon: FaHospital },
  { name: 'Restaurant', icon: FaUtensils },
  { name: 'Distribution', icon: FaRoute },
]

export const reviews = [
  {
    name: 'Ahmed Khan',
    role: 'Operations Manager, Gulf Trade',
    initials: 'AK',
    quote: 'Kienex delivered an ERP workflow that made inventory, purchasing, and reporting much easier for our team.',
  },
  {
    name: 'Sara Al Harbi',
    role: 'Director, HealthCare Plus',
    initials: 'SA',
    quote: 'The custom patient management system is simple to use, reliable, and well supported by the Kienex team.',
  },
  {
    name: 'David Kim',
    role: 'Founder, FoodChain',
    initials: 'DK',
    quote: 'Our restaurant POS and inventory process became faster, cleaner, and easier to monitor after implementation.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, LogiTech Corp',
    initials: 'MC',
    quote: 'Their cloud deployment and software integration work exceeded our expectations on quality and speed.',
  },
  {
    name: 'Fatima Noor',
    role: 'Finance Lead, BuildRight',
    initials: 'FN',
    quote: 'ERPNext was configured around our accounting and approval process without adding unnecessary complexity.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Supply Chain Head, ShipFast',
    initials: 'LT',
    quote: 'Real-time logistics tracking and clean dashboards helped our team reduce follow-up delays.',
  },
  {
    name: 'Omar Tariq',
    role: 'CEO, Prime Logistics',
    initials: 'OT',
    quote: 'Kienex completely overhauled our dispatch systems. The new cloud infrastructure is lightning fast.',
  },
  {
    name: 'Aisha Rahman',
    role: 'Marketing Director, RetailCo',
    initials: 'AR',
    quote: 'Their digital marketing team helped us increase our online conversion rate by 45% within three months.',
  },
  {
    name: 'James Wilson',
    role: 'IT Head, Medix Group',
    initials: 'JW',
    quote: 'The custom integration between our legacy software and the new cloud portal was handled flawlessly.',
  },
  {
    name: 'Mohammed Al-Fayed',
    role: 'Founder, TechStart',
    initials: 'MA',
    quote: 'We partnered with Kienex for a custom mobile app build. Professional, timely, and excellent code quality.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'CFO, Industrial Build',
    initials: 'SJ',
    quote: 'Implementing Odoo through Kienex was the best decision. Financial reporting is now entirely automated.',
  },
  {
    name: 'Hassan Ali',
    role: 'Manager, QuickBite Chain',
    initials: 'HA',
    quote: 'The custom POS and inventory system they built for our restaurants saved us countless hours of manual work.',
  },
  {
    name: 'Emma Stone',
    role: 'VP of Operations, GlobalTrade',
    initials: 'ES',
    quote: "Kienex's ERPNext implementation gave us the multi-branch visibility we were desperately missing.",
  },
  {
    name: 'Rahul Sharma',
    role: 'Lead Engineer, DataCorp',
    initials: 'RS',
    quote: 'Their DevOps and Kubernetes expertise helped us scale our serverless architecture effortlessly.',
  },
  {
    name: 'Zainab Mansoor',
    role: 'HR Director, PeopleFirst',
    initials: 'ZM',
    quote: 'The HR and Payroll modules they configured for us have streamlined our entire onboarding process.',
  },
  {
    name: 'Carlos Mendez',
    role: 'Supply Chain Manager, FreshFoods',
    initials: 'CM',
    quote: 'Thanks to their custom tracking software, our distribution routes are optimized and fully transparent.',
  },
  {
    name: 'Nadia Hussain',
    role: 'Owner, Elegance Boutique',
    initials: 'NH',
    quote: 'They redesigned our e-commerce platform and integrated it perfectly with Tally for accounting.',
  },
  {
    name: 'William Carter',
    role: 'CTO, FutureFin',
    initials: 'WC',
    quote: 'Security and compliance were our top priorities. Kienex delivered a rock-solid cloud infrastructure.',
  },
  {
    name: 'Youssef Ibrahim',
    role: 'Director, BuildMax',
    initials: 'YI',
    quote: 'The transition from spreadsheets to a fully functional ERP was managed expertly by their team.',
  },
  {
    name: 'Chloe Davies',
    role: 'Head of Sales, AutoParts Ltd',
    initials: 'CD',
    quote: 'Our new CRM system is tailored exactly to our sales pipeline. It is incredibly user-friendly.',
  },
  {
    name: 'Tariq Mahmood',
    role: 'Operations Lead, ClearWater',
    initials: 'TM',
    quote: 'Excellent post-launch support and training. They ensured our team was fully confident using the new system.',
  },
]

export const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'React Native', icon: SiReact },
  { name: 'Android', icon: FaAndroid },
  { name: 'iOS', icon: FaMobileAlt },
  { name: 'AWS', icon: FaCloud },
  { name: 'Docker', icon: FaDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Google Cloud', icon: SiGooglecloud },
]

export const techStackCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Angular', icon: SiAngular },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux', icon: SiRedux },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Python', icon: FaPython },
      { name: 'Django', icon: SiDjango },
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Laravel', icon: SiLaravel },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'React Native', icon: SiReact },
      { name: 'Android (Kotlin)', icon: FaAndroid },
      { name: 'iOS (Swift)', icon: FaMobileAlt },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'AWS', icon: FaCloud },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Azure', icon: FaCloud },
      { name: 'CI/CD', icon: FaCheckCircle },
    ],
  },
  {
    title: 'Others',
    items: [
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'WebSockets', icon: FaCloud },
      { name: 'Microservices', icon: FaCloud },
      { name: 'Serverless', icon: FaCloud },
    ],
  },
]
