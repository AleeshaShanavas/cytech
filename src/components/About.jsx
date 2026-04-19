import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaBriefcase, FaCheckCircle, FaGlobe, FaLightbulb, FaShieldAlt, FaStar, FaUsers } from 'react-icons/fa'
import { fadeLeft, fadeRight, smoothTransition, viewport } from '../animation.js'

const stats = [
  { value: '10+', label: 'Years of Excellence', className: 'bg-white text-kienexBlue' },
  { value: '500+', label: 'Happy Clients', className: 'bg-kienexBlue text-white' },
  { value: '50+', label: 'Solutions', className: 'bg-[#4FB3D1] text-white' },
  { value: '24/7', label: 'Support', className: 'bg-white text-kienexBlue' },
]

const points = ['ISO 9001:2015 Certified Company', 'Award-winning Software Solutions', 'Trusted by Global Clients', 'Custom & Scalable Solutions']

const highlights = [
  { icon: FaLightbulb, title: 'Innovative Solutions' },
  { icon: FaUsers, title: 'Expert Team' },
  { icon: FaShieldAlt, title: 'Reliable Support' },
]

const countStats = [
  { icon: FaUsers, value: 500, suffix: '+', label: 'Happy Clients' },
  { icon: FaGlobe, value: 20, suffix: '+', label: 'Countries' },
  { icon: FaBriefcase, value: 1000, suffix: '+', label: 'Projects' },
  { icon: FaStar, value: 98, suffix: '%', label: 'Satisfaction' },
]

export default function About() {
  const aboutRef = useRef(null)
  const [countRun, setCountRun] = useState(0)

  useEffect(() => {
    const node = aboutRef.current
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
    <section id="about" ref={aboutRef} className="border-t border-gray-100 bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} transition={smoothTransition}>
          <div className="relative rounded-2xl bg-[#4FB3D1]/10 p-6">
            <div className="about-ring pointer-events-none absolute -right-5 -top-8 h-24 w-24 rounded-full border-2 border-dashed border-kienexBlue/20" />
            <div className="about-ring pointer-events-none absolute -left-6 bottom-8 h-16 w-16 rounded-full border-2 border-dashed border-[#4FB3D1]/30" style={{ animationDirection: 'reverse', animationDuration: '9s' }} />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className={`rounded-xl p-6 shadow-lg ${stat.className}`}>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-5 leading-7 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeRight}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <span className="inline-block rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-medium text-kienexBlue">
            About Us
          </span>
          <h2 className="text-3xl font-bold leading-tight text-kienexBlue md:text-4xl">
            Transforming Businesses Through Technology
          </h2>
          <p>
            At Kienex, we are committed to delivering world-class software solutions that drive business growth and operational efficiency. We help organizations transform their digital landscape with reliable technology.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="shrink-0 text-[#4FB3D1]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-4 pt-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-xl bg-gray-50 p-4 text-center">
                  <Icon className="mx-auto text-2xl text-kienexBlue" />
                  <p className="mt-3 text-sm font-bold text-gray-800">{item.title}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <div className="count-grid bg-kienexBlue">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {countStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center text-white"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="text-2xl" />
                </div>
                <p className="mt-5 text-4xl font-bold">
                  <CountUp value={stat.value} suffix={stat.suffix} run={countRun} />
                </p>
                <p className="mt-2 text-sm font-semibold text-white/85">{stat.label}</p>
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
