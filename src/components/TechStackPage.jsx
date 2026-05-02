import { motion } from 'framer-motion'
import { techStackCategories } from '../data.js'
import { fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

export default function TechStackPage() {
  return (
    <section className="min-h-screen bg-white">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold leading-tight text-kienexBlue sm:text-5xl">Our Tech Stack</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We leverage the latest and most reliable technologies to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {techStackCategories.map((category) => (
            <motion.div key={category.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" variants={zoomIn}>
              <h2 className="text-2xl font-bold text-kienexBlue">{category.title}</h2>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name} className="flex items-center gap-3 text-gray-700">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-kienexBlue">
                        <Icon />
                      </span>
                      <span>{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
