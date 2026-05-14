import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import ServiceDetails from './components/ServiceDetails.jsx'
import Products from './components/Products.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import LetsBuildSection from './components/LetsBuildSection.jsx'
import Industries from './components/Industries.jsx'
import Technologies from './components/Technologies.jsx'
import TechStackPage from './components/TechStackPage.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Chatbot from './components/Chatbot.jsx'
import Footer from './components/Footer.jsx'
import LandingModal from './components/LandingModal.jsx'

function HomePage() {
  return (
    <div className="relative">
      <SectionReveal id="home" bgColor="bg-white z-0" animType="ring">
        <Hero />
      </SectionReveal>
      <SectionReveal id="products" bgColor="bg-[#E6F0FF] z-10" animType="grid">
        <Products />
      </SectionReveal>
      <SectionReveal id="services" bgColor="bg-white z-20" animType="grid">
        <Services />
      </SectionReveal>
      <SectionReveal id="about" bgColor="bg-[#E6F0FF] z-30" animType="grid">
        <About />
      </SectionReveal>
      <SectionReveal id="industries" bgColor="bg-white z-40" animType="grid">
        <Industries />
      </SectionReveal>
      <SectionReveal id="technologies" bgColor="bg-[#E6F0FF] z-50" animType="grid">
        <Technologies />
      </SectionReveal>
      <SectionReveal id="reviews" bgColor="bg-white z-60" animType="grid">
        <Reviews />
      </SectionReveal>
      <SectionReveal id="contact" bgColor="bg-[#E6F0FF] z-70" animType="grid">
        <Contact />
      </SectionReveal>
    </div>
  )
}

function FloatingTech3D({ type }) {
  const renderAnimation = () => {
    switch (type) {
      case 'cube':
        return (
          <motion.div
            className="absolute -top-1/2 left-0 h-[200vh] w-[100vw] flex items-center justify-center opacity-30"
            style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
          >
            <motion.div
              className="h-[80vw] w-[80vw] sm:h-[60vw] sm:w-[60vw] rounded-3xl border border-kienexBlue/20 bg-gradient-to-br from-[#4FB3D1]/5 to-transparent backdrop-blur-[2px]"
              animate={{ rotateX: [0, 360], rotateY: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-[100vw] w-[100vw] sm:h-[80vw] sm:w-[80vw] rounded-full border border-[#4FB3D1]/10"
              animate={{ rotateX: [360, 0], rotateY: [0, 360], rotateZ: [0, 360] }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        )
      case 'orb':
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40 mix-blend-multiply">
            <motion.div
              className="h-[150vw] w-[150vw] sm:h-[100vw] sm:w-[100vw] rounded-full bg-gradient-to-tr from-[#4FB3D1]/20 via-transparent to-kienexBlue/20 blur-[100px]"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        )
      case 'pyramid':
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="relative h-full w-full" style={{ perspective: '1000px' }}>
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4FB3D120_1px,transparent_1px),linear-gradient(to_bottom,#4FB3D120_1px,transparent_1px)] bg-[size:50px_50px]"
                animate={{ 
                  rotateX: [60, 55, 60],
                  y: [0, -50, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center bottom' }}
              />
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`l-${i}`}
                  className="absolute left-1/2 top-1/2 h-[1px] w-[200%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4FB3D1]/40 to-transparent"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ 
                    rotateY: [0, 360],
                    translateZ: [i * 100 - 200, i * 100 - 200],
                    y: [i * 50 - 100, i * 50 - 100]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: i * 2 }}
                />
              ))}
            </div>
          </div>
        )
      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`p-${i}`}
                className="absolute h-[20vh] w-[20vw] rounded-full bg-gradient-to-t from-kienexBlue/10 to-transparent blur-3xl"
                animate={{
                  x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                  y: [window.innerHeight + 200, -200],
                  scale: [1, 3, 1],
                }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>
        )
      case 'helix':
        return (
          <div className="absolute inset-0 flex flex-col justify-around opacity-20">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="h-[10vh] w-[200vw] -ml-[50vw] bg-gradient-to-r from-transparent via-[#4FB3D1]/30 to-transparent"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateX: [0, 360], scaleY: [1, 0.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              />
            ))}
          </div>
        )
      case 'grid':
        return (
          <motion.div
            className="absolute -inset-[100%] bg-[linear-gradient(to_right,#0A246315_2px,transparent_2px),linear-gradient(to_bottom,#0A246315_2px,transparent_2px)] bg-[size:10vw_10vh]"
            style={{ transformStyle: 'preserve-3d', perspective: '500px' }}
            animate={{ rotateX: [60, 60], z: [0, -200, 0], y: [0, 100, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        )
      case 'cylinder':
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <motion.div
              className="h-[200vh] w-[200vw] rounded-full border-[10vw] border-dashed border-[#4FB3D1]/20"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              animate={{ rotateX: [70, 70], rotateZ: [0, 360], scale: [1, 2, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
      case 'wave':
        return (
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden opacity-30">
            <motion.div
              className="h-[150vh] w-[300vw] rounded-[100%] bg-kienexBlue/10 blur-xl"
              animate={{ x: ['-50%', '0%', '-50%'], y: ['20%', '0%', '20%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        )
      case 'torus':
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <motion.div
              className="h-[150vw] w-[150vw] sm:h-[100vw] sm:w-[100vw] rounded-full border-[8vw] border-kienexBlue/20 bg-gradient-to-tr from-[#4FB3D1]/10 to-transparent backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-[80vw] w-[80vw] sm:h-[50vw] sm:w-[50vw] rounded-full border-[4vw] border-dashed border-[#4FB3D1]/40"
              style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
              animate={{ rotateX: [360, 0], rotateY: [0, 360], rotateZ: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
      case 'ring':
      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-25 overflow-hidden">
            <motion.div
              className="absolute h-[150vw] w-[150vw] sm:h-[120vw] sm:w-[120vw] rounded-full border-[2px] border-[#4FB3D1]/20"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full border-[10vw] border-dashed border-[#4FB3D1]/10" />
            </motion.div>
            <motion.div
              className="absolute h-[200vw] w-[200vw] sm:h-[150vw] sm:w-[150vw] rounded-full border-[1px] border-kienexBlue/10"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [360, 0], rotateY: [0, 360], rotateZ: [360, 0] }}
              transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
    }
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0, perspective: '1000px' }}>
      {renderAnimation()}
    </div>
  )
}

function SectionReveal({ children, bgColor = 'bg-white', id, animType = 'ring' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: false })

  return (
    <div id={id} className={`relative min-h-screen w-full overflow-hidden ${bgColor}`}>
      <FloatingTech3D type={animType} />
      <motion.div
        ref={ref}
        className="relative z-10 w-full flex flex-col justify-center pt-24 pb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function NotFound() {
  return (
    <section className="section-shell">
      <p className="section-kicker">Kienex</p>
      <h1 className="section-title">Page not found</h1>
      <p className="mt-4 max-w-2xl leading-7 text-black">
        The page you requested is not available. Return home to explore Kienex services, products, industries, and contact details.
      </p>
      <a href="/" className="primary-button mt-8">Go Home</a>
    </section>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return
    }
    // Delay slightly to ensure React has fully painted the new page before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)
  }, [pathname, hash])

  return null
}



export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technologies" element={<TechStackPage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <LandingModal />
    </div>
  )
}
