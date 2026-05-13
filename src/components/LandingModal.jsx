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
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-gray-200 backdrop-blur-md transition hover:bg-white/30 hover:text-white md:bg-gray-100 md:text-gray-500 md:hover:bg-gray-200 md:hover:text-gray-900"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="bg-[#0A2463] p-6 text-white md:p-12">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-200">
                  Exclusive
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight md:mt-6 md:text-4xl">
                  ERP & Digital Marketing
                </h3>
                <p className="mt-3 text-base leading-relaxed text-blue-100 md:mt-4 md:text-lg">
                  Transform your business operations and online presence with our comprehensive suite of tools.
                </p>
                <ul className="mt-6 space-y-3 md:mt-10 md:space-y-5">
                  {[
                    'Custom ERP Implementations',
                    'Process Automation',
                    'Data-Driven Marketing',
                    'Cloud Hosting & Support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 md:gap-4">
                      <FaCheckCircle className="shrink-0 text-lg md:text-xl text-[#4FB3D1]" />
                      <span className="text-base font-medium text-gray-100 md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center bg-white p-6 md:p-12">
                <h2 className="text-2xl font-bold text-[#0A2463] md:text-4xl">
                  Scale Your Business
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600 md:mt-5 md:text-lg">
                  Get a tailored solution designed for your unique operational and marketing challenges. Speak directly with our experts today.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=966546090776"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleClose}
                    className="inline-flex min-h-[48px] md:min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-[#0A2463] px-5 py-2.5 md:px-6 md:py-3 text-base md:text-lg font-semibold text-white shadow-soft transition hover:scale-105 hover:bg-blue-900"
                  >
                    <FaWhatsapp className="text-xl md:text-2xl" />
                    Request a Demo
                  </a>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex min-h-[48px] md:min-h-[52px] flex-1 items-center justify-center rounded-full border-2 border-gray-200 px-5 py-2.5 md:px-6 md:py-3 text-base md:text-lg font-semibold text-gray-600 transition hover:bg-gray-50"
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
