import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FaLightbulb, FaShieldAlt, FaUsers, FaClock, FaBriefcase, FaGlobe } from 'react-icons/fa'
import { fadeUp, staggerContainer, zoomIn, viewport } from '../animation.js'

const stats = [
  { value: 10, label: 'Years', icon: FaClock, suffix: '+' },
  { value: 500, label: 'Happy Clients', icon: FaUsers, suffix: '+' },
  { value: 50, label: 'Solutions', icon: FaBriefcase, suffix: '+' },
  { value: 24, label: 'Support', icon: FaGlobe, suffix: '/7' },
]

const highlights = [
  { icon: FaLightbulb, title: 'Innovative Solutions', text: 'Cutting-edge approaches to complex problems.' },
  { icon: FaUsers, title: 'Expert Team', text: 'Senior engineers with decades of experience.' },
  { icon: FaShieldAlt, title: 'Reliable Support', text: 'Always here to keep your systems running.' },
]

function Counter({ value, suffix, run }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!run) return undefined

    let frameId
    const duration = 2000
    const startTime = performance.now()
    setCount(0)

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
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

export default function About() {
  const statsRef = useRef(null)
  const [countRun, setCountRun] = useState(false)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountRun(true)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden py-20 font-['Inter',sans-serif]">
      {/* Subtle Mesh Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_0%_0%,#00339908_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_100%_100%,#00339908_0%,transparent_70%)]" />

      <div className="section-shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column (Balanced Image + 2x2 Stats) */}
          <div className="flex flex-col gap-8">
            <motion.div 
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={zoomIn}
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <img 
                  src="./kienex_dashboard.png" 
                  alt="Kienex Dashboard" 
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Compact 2x2 Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center justify-center rounded-xl border border-white bg-white/40 py-4 px-3 text-center shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#00339908] text-[#003399]">
                      <Icon className="text-sm" />
                    </div>
                    <div className="text-2xl font-black text-[#003399]">
                      <Counter value={stat.value} suffix={stat.suffix} run={countRun} />
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Column (The Story) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="flex flex-col lg:pt-4"
          >
            <motion.span variants={fadeUp} className="inline-block w-fit rounded-full bg-[#00339910] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#003399]">
              About Kienex
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-6 text-4xl font-extrabold leading-[1.2] text-[#003399] md:text-5xl">
              Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0066cc]">Technology.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-gray-600">
              At Kienex, we deliver world-class software solutions that drive business growth and operational efficiency. We help organizations transform their digital landscape with reliable, scalable technology.
            </motion.p>

            {/* The "Core Three" Mini Cards */}
            <div className="mt-10 grid gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm transition-all hover:border-[#00339920] hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00339905] text-[#003399]">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003399]">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{item.text}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
