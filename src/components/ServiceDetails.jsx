import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import { services } from '../data.js'
import { cardHover, fadeLeft, fadeRight, fadeUp, smoothTransition, viewport, zoomIn } from '../animation.js'

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <section className="section-shell">
        <h1 className="section-title">Service not found</h1>
        <Link to="/#services" className="primary-button mt-8">Back to Services</Link>
      </section>
    )
  }

  const Icon = service.icon

  return (
    <section className="hero-grid relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/70">
      <div className="float-soft absolute right-12 top-28 h-24 w-24 rounded-2xl bg-[#4FB3D1]/20" />
      <div className="float-soft absolute bottom-24 left-8 h-16 w-16 rounded-full bg-kienexBlue/15" style={{ animationDelay: '0.8s' }} />
      <div className="float-side absolute right-24 bottom-36 h-12 w-12 rotate-45 rounded-lg bg-kienexBlue/20" />

      <div className="section-shell relative z-10">
        <Link to="/#services" className="secondary-button">
          <FaArrowLeft className="mr-2" /> Back to Services
        </Link>

        <motion.div
          className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={smoothTransition}
        >
          <motion.div className="glow-panel rounded-lg border border-gray-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm" variants={fadeLeft} whileHover={{ y: -5 }}>
            <div className="flex items-start justify-between gap-4">
              <Icon className="text-5xl text-kienexBlue" />
              <span className="signal-light signal-light-fast" />
            </div>
            <p className="section-kicker mt-8">Service Detail</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-kienexBlue">{service.title}</h1>
            <p className="mt-5 leading-7 text-black">{service.description}</p>
          </motion.div>

          <motion.div className="grid gap-6" variants={fadeRight}>
            <DetailBlock title="Key Features" items={service.features} />
            <DetailBlock title="Benefits" items={service.benefits} />
            <DetailBlock title="Technologies Used" items={service.technologies} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function DetailBlock({ title, items }) {
  return (
    <motion.div className="card" initial="hidden" whileInView="visible" viewport={viewport} variants={zoomIn} whileHover={cardHover}>
      <h2 className="text-2xl font-bold text-kienexBlue">{title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-black">
            <FaCheckCircle className="mt-1 shrink-0 text-kienexBlue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
