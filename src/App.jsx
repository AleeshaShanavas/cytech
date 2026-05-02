import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import QuestionSection from './components/QuestionSection.jsx'
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

function HomePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <QuestionSection />
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <Products />
      </SectionReveal>
      <SectionReveal>
        <LetsBuildSection />
      </SectionReveal>
      <SectionReveal>
        <Industries />
      </SectionReveal>
      <SectionReveal>
        <Technologies />
      </SectionReveal>
      <Reviews />
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </>
  )
}

function SectionReveal({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.18, once: false })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 42, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 42, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
    </div>
  )
}
