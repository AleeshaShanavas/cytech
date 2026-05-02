import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
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
  return (
    <section className="border-t border-white/10 bg-[#071225]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} transition={smoothTransition}>
          <p className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Seeking a <span className="text-[#6ea8ff] italic">Technical Partner?</span>
          </p>
          <p className="mt-6 max-w-xl leading-8 text-white/75">
            Work with a team that builds practical business software with clarity, speed, and engineering discipline.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold text-white">Why Kienex?</h3>
            <p className="mt-4 leading-8 text-white/75">
              We combine ERP consulting, custom development, cloud experience, and product thinking to build systems that teams actually enjoy using.
            </p>
          </div>
        </motion.div>

        <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} transition={{ ...smoothTransition, delay: 0.1 }}>
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <FaCheckCircle className="mt-1 shrink-0 text-xl text-[#4FB3D1]" />
              <div>
                <h3 className="text-2xl font-bold text-white">{point.title}</h3>
                <p className="mt-2 leading-7 text-white/75">{point.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
