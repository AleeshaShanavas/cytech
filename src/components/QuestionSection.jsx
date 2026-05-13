import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { fadeLeft, fadeRight, smoothTransition, viewport } from '../animation.js'

const points = [
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

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="border-t border-blue-50 bg-[#E6F0FF]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
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
          {points.map((point, index) => {
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
    </section>
  )
}
