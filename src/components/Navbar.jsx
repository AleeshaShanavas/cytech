import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from 'react-icons/fa'

const links = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Products', target: 'products' },
  { label: 'Industries', target: 'industries' },
  { label: 'Contact', target: 'contact' },
]

const socialLinks = [
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'Twitter', icon: FaTwitter, href: '#' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (target) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate(`/#${target}`)
      return
    }
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#040d1a]/95 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-kienexBlue text-xl font-bold text-white">
            K
          </span>
          <span className="text-xl font-bold text-white">Kienex</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <motion.button
                key={link.target}
                type="button"
                onClick={() => goToSection(link.target)}
                className="animated-underline relative text-sm font-semibold text-gray-300 transition hover:text-white"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
          <div className="group relative">
            <button type="button" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-white/10">
              Social
            </button>
            <div className="pointer-events-none absolute right-0 top-11 w-48 translate-y-2 rounded-lg border border-white/10 bg-[#040d1a] p-3 opacity-0 shadow-soft transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="-mt-3 mb-3 inline-flex rounded-b-lg bg-kienexBlue px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Social
              </div>
              <div className="flex gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-kienexBlue hover:text-white"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <motion.button type="button" className="primary-button px-6 py-2.5" onClick={() => goToSection('contact')} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            Get Started
          </motion.button>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#040d1a] px-4 pb-4 shadow-sm md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
            {links.map((link) => (
              <motion.button
                key={link.target}
                type="button"
                onClick={() => goToSection(link.target)}
                className="min-h-11 rounded-lg px-3 text-left text-sm font-semibold text-gray-200 transition hover:bg-white/5 hover:text-white"
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.button>
            ))}
            <NavLink
              to="/#contact"
              onClick={() => setOpen(false)}
              className="primary-button mt-2 w-full"
            >
              Get Started
            </NavLink>
            <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="-mt-3 mb-3 inline-flex rounded-b-lg bg-kienexBlue px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Social
              </div>
              <div className="flex gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-300 shadow-sm ring-1 ring-white/10 hover:bg-kienexBlue hover:text-white hover:ring-0 transition"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
