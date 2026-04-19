import { Link } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const footerLinks = {
  Services: ['ERP Software', 'Custom Software', 'Cloud Solutions', 'Digital Marketing'],
  Products: ['ERPNext', 'Odoo', 'Tally Integration', 'Custom Solutions'],
  Company: ['About Us', 'Industries', 'Contact', 'Careers'],
}

const footerHref = {
  'ERP Software': '/services/erp',
  'Custom Software': '/services/custom-software',
  'Cloud Solutions': '/services/cloud',
  'Digital Marketing': '/services/digital-marketing',
  ERPNext: '/products/erpnext',
  Odoo: '/products/odoo',
  'Tally Integration': '/products/tally',
  'Custom Solutions': '/#services',
  'About Us': '/#about',
  Industries: '/#industries',
  Contact: '/#contact',
  Careers: '/#contact',
}

export default function Footer() {
  return (
    <footer className="bg-[#071225] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-kienexBlue text-lg font-bold text-white">
              K
            </span>
            <span className="text-2xl font-bold">Kienex</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-gray-300">
            Your trusted partner for complete software solutions. We help businesses transform digitally with ERP, cloud, custom software, and marketing systems.
          </p>
          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <FooterContact icon={FaEnvelope} text="info@kienex.com" href="mailto:info@kienex.com" />
            <FooterContact icon={FaPhoneAlt} text="+966543064677" href="tel:+966543064677" />
            <FooterContact icon={FaMapMarkerAlt} text="Al Khobar, Saudi Arabia" />
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href={footerHref[link]} className="text-sm text-gray-300 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">© 2026 Kienex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterContact({ icon: Icon, text, href }) {
  const content = (
    <>
      <Icon className="shrink-0 text-kienexBlue" />
      <span>{text}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 transition hover:text-white">
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-3">{content}</div>
}
