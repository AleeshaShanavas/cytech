import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaTimes, FaWhatsapp } from 'react-icons/fa'

export default function LandingModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setIsOpen(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 backdrop-blur-md transition hover:bg-white/20 hover:text-white md:bg-gray-100 md:text-gray-500 md:hover:bg-gray-200 md:hover:text-gray-900"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="bg-[#0A2463] p-8 text-white md:p-12">
                <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-200">
                  Exclusive
                </span>
                <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                  ERP & Digital Marketing
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blue-100">
                  Transform your business operations and online presence with our comprehensive suite of tools.
                </p>
                <ul className="mt-10 space-y-5">
                  {[
                    'Custom ERP Implementations',
                    'Process Automation',
                    'Data-Driven Marketing',
                    'Cloud Hosting & Support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <FaCheckCircle className="shrink-0 text-xl text-[#4FB3D1]" />
                      <span className="text-lg font-medium text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center bg-white p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#0A2463] md:text-4xl">
                  Scale Your Business
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Get a tailored solution designed for your unique operational and marketing challenges. Speak directly with our experts today.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://api.whatsapp.com/send/?phone=966546090776"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleClose}
                    className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-full bg-[#0A2463] px-6 py-3 text-lg font-semibold text-white shadow-soft transition hover:scale-105 hover:bg-blue-900"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Request a Demo
                  </a>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full border-2 border-gray-200 px-6 py-3 text-lg font-semibold text-gray-600 transition hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
