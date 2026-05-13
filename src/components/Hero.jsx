import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { buttonTap, fadeLeft, fadeRight, smoothTransition, viewport } from '../animation.js'
import { techStackCategories } from '../data.js'

const allTechItems = techStackCategories.flatMap(category => category.items)
const marqueeItems = [...allTechItems, ...allTechItems]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero-grid relative overflow-hidden bg-white pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-16 lg:min-h-[620px] lg:grid-cols-2 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} transition={smoothTransition}>
          <span className="inline-flex items-center rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-bold text-kienexBlue">
            Welcome to Kienex
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-kienexBlue sm:text-5xl lg:text-6xl">
            Complete Software
            <span className="block">
              <span className="text-[#4FB3D1]">Solution</span> Provider
            </span>
          </h1>
          <p className="mt-5 text-2xl font-bold text-kienexBlue/70">
            <motion.span
              animate={{ opacity: [1, 0.55, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Custom Software
            </motion.span>
            <span className="typing-cursor ml-1 inline-block h-7 w-0.5 translate-y-1 bg-kienexBlue" />
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            The Future of Technology Starts Here. We deliver innovative ERP solutions, custom software, cloud platforms, and digital transformation services to elevate your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.button type="button" className="primary-button" onClick={() => scrollTo('services')} whileHover={{ scale: 1.06 }} whileTap={buttonTap}>
              Get Started <FaArrowRight className="ml-2" />
            </motion.button>
            <motion.button type="button" className="secondary-button" onClick={() => scrollTo('services')} whileHover={{ scale: 1.06 }} whileTap={buttonTap}>
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-kienexBlue text-white">
                <FaPlay className="ml-0.5 text-[9px]" />
              </span>
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-10 w-full lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeRight}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          {/* Decorative background glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-kienexBlue/20 to-[#4FB3D1]/20 blur-2xl" />
          
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-md">
            {/* Mac-style Window controls mockup */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3 backdrop-blur-md">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 font-mono text-xs font-semibold text-gray-500">Kienex_ERP_Dashboard</span>
            </div>
            
            {/* Dashboard Image */}
            <div className="relative aspect-[16/10] w-full bg-white">
              <img
                src="/erp_dashboard.png"
                alt="ERP Dashboard Interface"
                className="h-full w-full object-cover object-top"
              />
              
              {/* Overlay gradient to make it blend slightly at the bottom */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2463]/10 to-transparent" />
            </div>
          </div>

          {/* Floating stats badge to keep the dynamic feel */}
          <motion.div
            className="absolute -bottom-6 -right-2 md:-right-6 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4FB3D1]/10 text-[#4FB3D1]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Efficiency</p>
                <p className="font-bold text-kienexBlue">+340%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee Slider */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-100 bg-white/90 py-5 backdrop-blur-md">
        <div className="marquee-container">
          <div className="marquee-content flex items-center justify-around">
            {marqueeItems.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div key={`${tech.name}-${index}`} className="mx-8 flex min-w-[120px] flex-col items-center gap-2 opacity-70 transition-opacity hover:opacity-100">
                  <Icon className="text-3xl text-kienexBlue hover:text-[#4FB3D1] transition-colors" />
                  <span className="text-sm font-semibold text-gray-600">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-1/2 hidden h-8 w-4 -translate-x-1/2 rounded-full border-2 border-kienexBlue/40 md:block">
        <span className="scroll-dot mx-auto mt-1 block h-2 w-1 rounded-full bg-kienexBlue/60" />
      </div>
    </section>
  )
}
