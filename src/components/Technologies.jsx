import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { technologies } from '../data.js'
import { fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

export default function Technologies() {
  return (
    <section className="border-t border-gray-100">
      <div className="section-shell">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-medium text-kienexBlue">
              Technologies
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-kienexBlue sm:text-4xl">
              Modern tools for scalable software.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              We build with proven frameworks, cloud platforms, and backend systems that support real business growth.
            </p>
          </div>
          <Link
            to="/technologies"
            className="inline-flex items-center gap-2 rounded-lg border border-kienexBlue/20 bg-white px-5 py-2.5 text-sm font-semibold text-kienexBlue shadow-sm transition hover:bg-kienexBlue hover:text-white"
          >
            View Full Stack →
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                className="group flex items-center gap-4 rounded-xl border border-blue-100 bg-white px-5 py-4 shadow-sm transition hover:border-kienexBlue/30 hover:shadow-md"
                variants={zoomIn}
                whileHover={{ y: -2 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-kienexBlue/10 text-kienexBlue transition group-hover:bg-kienexBlue group-hover:text-white">
                  <Icon className="text-xl" />
                </span>
                <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
