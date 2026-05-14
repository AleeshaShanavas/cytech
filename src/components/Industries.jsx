import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { industries } from '../data.js'
import { cardHover, fadeUp, staggerContainer, viewport, zoomIn, fadeLeft, fadeRight, smoothTransition } from '../animation.js'

const questionPoints = [
  {
    title: 'Flexible, Transparent Delivery',
    text: 'We keep communication clear, timelines practical, and project visibility strong from start to launch.',
  },
  {
    title: '360° Engineering Support',
    text: 'From planning and design to development and QA, Kienex supports every stage with a dependable team.',
  },
  {
    title: 'Modern Tech Expertise',
    text: 'We apply scalable engineering practices, secure stacks, and maintainable architecture for long-term value.',
  },
]

export default function Industries() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="industries" className="border-t border-blue-50">
      <div className="section-shell">
        <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-medium text-kienexBlue">Industries We Serve</span>
          <h2 className="section-title">Solutions Across Industries</h2>
          <p className="mt-4 text-gray-600">Technology solutions built for practical workflows across multiple business verticals.</p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div key={industry.name} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" variants={zoomIn} whileHover={cardHover}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kienexBlue/10 text-kienexBlue">
                  <Icon />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-kienexBlue">{industry.name}</h3>
                </div>
                <span className="signal-light signal-light-slow" style={{ animationDelay: `${index * 0.28}s` }} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Reverted Seeking a Technical Partner Section (Old Design) */}
        <div className="mt-10 grid gap-10 border-t border-white/40 pt-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} transition={smoothTransition}>
            <p className="text-3xl font-bold leading-tight text-kienexBlue sm:text-4xl">
              Seeking a <span className="text-[#4FB3D1] italic">Technical Partner?</span>
            </p>
            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Work with a team that builds practical business software with clarity, speed, and engineering discipline.
            </p>
            <div className="mt-8 rounded-2xl border border-white bg-white/50 shadow-sm p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-kienexBlue">Why Kienex?</h3>
              <p className="mt-4 leading-8 text-gray-600">
                We combine ERP consulting, custom development, cloud experience, and product thinking to build systems that teams actually enjoy using.
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} transition={{ ...smoothTransition, delay: 0.1 }}>
            {questionPoints.map((point, index) => {
              const isOpen = index === openIndex
              return (
                <div key={point.title} className="overflow-hidden rounded-2xl border border-white bg-white/80 shadow-sm backdrop-blur-sm transition-all">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <h3 className="text-xl font-bold text-kienexBlue">{point.title}</h3>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-kienexBlue/50 shrink-0 ml-4">
                      <FaChevronDown />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-gray-600"
                      >
                        {point.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
