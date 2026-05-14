import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { FaBriefcase, FaGlobe, FaStar, FaUsers } from 'react-icons/fa'
import { products } from '../data.js'
import { buttonTap, cardHover, fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

const countStats = [
  { icon: FaUsers, value: 500, suffix: '+', label: 'Happy Clients' },
  { icon: FaGlobe, value: 20, suffix: '+', label: 'Countries' },
  { icon: FaBriefcase, value: 1000, suffix: '+', label: 'Projects' },
  { icon: FaStar, value: 98, suffix: '%', label: 'Satisfaction' },
]

export default function Products() {
  const statsRef = useRef(null)
  const [countRun, setCountRun] = useState(0)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountRun((run) => run + 1)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="border-t border-blue-50">
      <div className="section-shell">
        <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-medium text-kienexBlue">Products</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-kienexBlue sm:text-4xl">ERP and accounting platforms configured for your team.</h2>
          <p className="mt-4 text-gray-600">Powerful business platforms implemented with clean workflows, reporting, and integration support.</p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.article key={product.slug} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-xl" variants={zoomIn} whileHover={cardHover}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-kienexBlue/10 text-kienexBlue transition group-hover:bg-kienexBlue group-hover:text-white">
                    <Icon className="text-2xl" />
                  </span>
                  <span className="signal-light signal-light-slow" style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-kienexBlue">{product.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-black">{product.short}</p>
                <motion.div whileTap={buttonTap}>
                  <Link to={`/products/${product.slug}`} className="secondary-button mt-6 w-full">
                    Learn More
                  </Link>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <div ref={statsRef} className="count-grid relative overflow-hidden bg-white border-t border-blue-50">
        <div className="about-ring pointer-events-none absolute right-12 top-10 h-24 w-24 rounded-full border-2 border-dashed border-kienexBlue/20" />
        <div className="about-ring pointer-events-none absolute left-10 bottom-10 h-16 w-16 rounded-full border-2 border-dashed border-[#4FB3D1]/40" style={{ animationDirection: 'reverse', animationDuration: '9s' }} />
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {countStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center text-gray-900"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 shadow-sm border border-blue-100 text-kienexBlue">
                  <Icon className="text-2xl" />
                </div>
                <p className="mt-5 text-4xl font-bold text-kienexBlue">
                  <CountUp value={stat.value} suffix={stat.suffix} run={countRun} />
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-600">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CountUp({ value, suffix, run }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!run) return undefined

    let frameId
    const duration = 1300
    const startTime = performance.now()
    setCount(0)

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [run, value])

  return <span>{count}{suffix}</span>
}
