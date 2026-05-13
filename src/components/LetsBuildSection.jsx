import { motion } from 'framer-motion'
import { fadeUp, smoothTransition, viewport } from '../animation.js'

export default function LetsBuildSection() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={smoothTransition}
        >
          <h2 className="text-4xl font-bold leading-tight text-kienexBlue sm:text-5xl">
            Let&apos;s build something amazing together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Ready to start? Share your requirements or reach out to Kienex for a tailored software discussion.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+966543064677" className="inline-flex min-h-12 items-center justify-center rounded-full border border-blue-100 bg-white px-8 py-3 font-semibold text-kienexBlue shadow-sm transition hover:bg-gray-50">
              Call Now
            </a>
            <button type="button" onClick={scrollToContact} className="inline-flex min-h-12 items-center justify-center rounded-full bg-kienexBlue px-8 py-3 font-semibold text-white shadow-soft">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
