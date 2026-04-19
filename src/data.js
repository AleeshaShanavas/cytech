import {
  FaBullhorn,
  FaCloud,
  FaDatabase,
  FaHospital,
  FaIndustry,
  FaLaptopCode,
  FaRoute,
  FaStore,
  FaTruckMoving,
  FaUtensils,
} from 'react-icons/fa'

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
]
