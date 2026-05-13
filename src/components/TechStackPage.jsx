import { motion } from 'framer-motion'
import { techStackCategories } from '../data.js'
import { fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

export default function TechStackPage() {
  return (
    <section className="hero-grid relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/70">
      <div className="float-soft absolute right-12 top-28 h-24 w-24 rounded-2xl bg-[#4FB3D1]/20" />
      <div className="float-soft absolute bottom-24 left-8 h-16 w-16 rounded-full bg-kienexBlue/15" style={{ animationDelay: '0.8s' }} />
      <div className="float-side absolute right-24 bottom-36 h-12 w-12 rotate-45 rounded-lg bg-kienexBlue/20" />

      <div className="section-shell relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center glow-panel rounded-lg border border-gray-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Technologies</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-kienexBlue sm:text-5xl">Our Tech Stack</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
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
            <motion.div key={category.title} className="card glow-panel bg-white/90 backdrop-blur-sm" variants={zoomIn}>
              <h2 className="text-2xl font-bold text-kienexBlue">{category.title}</h2>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name} className="flex items-center gap-3 text-black">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-kienexBlue bg-blue-50/50">
                        <Icon />
                      </span>
                      <span className="font-medium">{item.name}</span>
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
