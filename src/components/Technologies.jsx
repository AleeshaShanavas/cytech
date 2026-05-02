import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { technologies } from '../data.js'
import { fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

export default function Technologies() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-br from-[#3f63e8] to-[#3153d1]">
      <div className="section-shell">
        <motion.div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
          <div>
            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">Technologies</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">Modern tools for scalable software.</h2>
            <p className="mt-4 max-w-2xl text-white/85">We build with proven frameworks, cloud platforms, and backend systems that support real business growth.</p>
          </div>
          <Link to="/technologies" className="text-sm font-semibold text-white transition hover:text-blue-100">
            View Full Tech Stack →
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <motion.div key={tech.name} className="rounded-2xl bg-white p-6 text-center shadow-sm" variants={zoomIn}>
                <Icon className="mx-auto text-4xl text-kienexBlue" />
                <p className="mt-4 text-sm font-bold text-gray-800">{tech.name}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
