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
          className="relative hidden min-h-[390px] lg:block"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeRight}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <div className="float-soft absolute right-8 top-0 h-20 w-20 rounded-xl bg-[#4FB3D1]/20" />
          <div className="float-soft absolute bottom-24 left-0 h-14 w-14 rounded-full bg-kienexBlue/15" style={{ animationDelay: '0.8s' }} />
          <div className="float-side absolute right-0 top-36 h-12 w-12 rotate-45 rounded-lg bg-kienexBlue/20" />

          <motion.div
            className="absolute inset-x-6 top-8 rounded-3xl bg-[#4FB3D1]/10 p-7 shadow-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-3 w-3/4 rounded bg-gray-100" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
                <div className="h-16 rounded-lg bg-[#4FB3D1]/10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-10 w-52 rounded-xl bg-[#071225] p-5 text-white shadow-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <p className="font-mono text-xs text-green-400">// ERP Solution</p>
            <p className="mt-3 font-mono text-sm text-[#4FB3D1]">init()</p>
            <p className="font-mono text-sm text-[#4FB3D1]">deploy()</p>
          </motion.div>

          <motion.div
            className="absolute bottom-12 right-12 w-48 rounded-xl bg-white p-5 shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          >
            <p className="text-xs text-gray-500">Growth</p>
            <p className="mt-2 text-3xl font-bold text-kienexBlue">+127%</p>
            <div className="mt-3 h-2 rounded-full bg-gray-100">
              <div className="h-2 w-4/5 rounded-full bg-[#4FB3D1]" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[360px] lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeRight}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <div className="rounded-3xl bg-[#4FB3D1]/10 p-5 shadow-sm">
            <div className="rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-3 w-3/4 rounded-lg bg-gray-100" />
                <div className="h-3 w-1/2 rounded-lg bg-gray-200" />
                <div className="scan-bar h-16 rounded-lg bg-[#4FB3D1]/10" />
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#071225] p-5 text-white shadow-xl">
              <p className="text-xs text-[#4FB3D1]">// ERP Solution</p>
              <p className="mt-3 font-mono text-sm text-green-300">init()</p>
              <p className="font-mono text-sm text-green-300">deploy()</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xl">
              <p className="text-xs text-gray-500">Growth</p>
              <p className="mt-2 text-3xl font-bold text-kienexBlue">+127%</p>
              <div className="mt-3 h-2 rounded-lg bg-gray-100">
                <div className="h-2 w-4/5 rounded-lg bg-[#4FB3D1]" />
              </div>
            </div>
          </div>
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
