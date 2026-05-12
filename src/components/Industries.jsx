import { motion } from 'framer-motion'
import { industries } from '../data.js'
import { cardHover, fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

export default function Industries() {
  return (
    <section id="industries" className="border-t border-gray-100 bg-white">
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
      </div>
    </section>
  )
}
