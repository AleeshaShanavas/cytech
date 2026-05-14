import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaUsers, FaChevronDown, FaClock, FaBriefcase, FaGlobe } from 'react-icons/fa'
import { fadeUp, staggerContainer, zoomIn, viewport } from '../animation.js'

const stats = [
  { value: '10+', label: 'Years', icon: FaClock },
  { value: '500+', label: 'Happy Clients', icon: FaUsers },
  { value: '50+', label: 'Solutions', icon: FaBriefcase },
  { value: '24/7', label: 'Support', icon: FaGlobe },
]

const highlights = [
  { icon: FaLightbulb, title: 'Innovative Solutions', text: 'Cutting-edge approaches to complex problems.' },
  { icon: FaUsers, title: 'Expert Team', text: 'Senior engineers with decades of experience.' },
  { icon: FaShieldAlt, title: 'Reliable Support', text: 'Always here to keep your systems running.' },
]

const questionPoints = [
  {
    title: 'Transparent Delivery',
    text: 'We keep communication clear, timelines practical, and project visibility strong from start to launch.',
  },
  {
    title: 'Engineering Support',
    text: 'From planning and design to development and QA, Kienex supports every stage with a dependable team.',
  },
  {
    title: 'Modern Tech Expertise',
    text: 'We apply scalable engineering practices, secure stacks, and maintainable architecture for long-term value.',
  },
]

export default function About() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative overflow-hidden font-['Inter',sans-serif]">
      {/* Subtle Mesh Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_0%_0%,#00339908_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_100%_100%,#00339908_0%,transparent_70%)]" />

      <div className="section-shell relative z-10">
        {/* 1. The Impact Bar (Top Section) */}
        <motion.div 
          className="mb-20 overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-1 shadow-[0_8px_32px_rgba(0,51,153,0.05)] backdrop-blur-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 divide-gray-200/50 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="flex items-center justify-center gap-4 py-6 px-4 transition-colors hover:bg-white/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00339910] text-[#003399]">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <p className="text-2xl font-black leading-none text-[#003399]">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* 2. The Narrative Zone (Bottom Section) */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column (3D Visual / Dashboard) */}
          <motion.div 
            className="group relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={zoomIn}
          >
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#00339910] to-[#00339905] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="/kienex_dashboard.png" 
                alt="Kienex Dashboard" 
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00339920] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </motion.div>

          {/* Right Column (The Story) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="flex flex-col"
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
