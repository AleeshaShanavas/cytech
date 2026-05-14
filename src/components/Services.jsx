import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data.js'
import { buttonTap, cardHover, fadeUp, staggerContainer, viewport } from '../animation.js'
import LetsBuildSection from './LetsBuildSection.jsx'

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <section id="services">
        <div className="section-shell pb-0 lg:pb-0">
          <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-medium text-kienexBlue">Services & Solutions</span>
            <h2 className="section-title">Built to simplify systems and support growth.</h2>
            <p className="mt-4 text-gray-600">Comprehensive technology services designed for operational clarity and measurable business growth.</p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article key={service.slug} className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-xl" variants={fadeUp} whileHover={cardHover}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-kienexBlue/10 text-kienexBlue transition group-hover:bg-kienexBlue group-hover:text-white">
                      <Icon className="text-2xl" />
                    </span>
                    <span className="signal-light" style={{ animationDelay: `${index * 0.4}s` }} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-kienexBlue">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-black">{service.short}</p>
                  <motion.div whileTap={buttonTap}>
                    <Link to={`/services/${service.slug}`} className="secondary-button mt-6 w-full">
                      Learn More
                    </Link>
                  </motion.div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      <LetsBuildSection />
    </div>
  )
}
