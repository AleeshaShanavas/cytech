import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaCheckCircle, FaPlug } from 'react-icons/fa'
import { products } from '../data.js'
import { cardHover, fadeUp, smoothTransition, viewport, zoomIn } from '../animation.js'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <section className="section-shell">
        <h1 className="section-title">Product not found</h1>
        <Link to="/#products" className="primary-button mt-8">Back to Products</Link>
      </section>
    )
  }

  const Icon = product.icon

  return (
    <section className="hero-grid relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/70">
      <div className="float-soft absolute right-12 top-28 h-24 w-24 rounded-2xl bg-[#4FB3D1]/20" />
      <div className="float-soft absolute bottom-24 left-8 h-16 w-16 rounded-full bg-kienexBlue/15" style={{ animationDelay: '0.8s' }} />
      <div className="float-side absolute right-24 bottom-36 h-12 w-12 rotate-45 rounded-lg bg-kienexBlue/20" />

      <div className="section-shell relative z-10">
        <Link to="/#products" className="secondary-button">
          <FaArrowLeft className="mr-2" /> Back to Products
        </Link>

        <motion.div
          className="glow-panel mt-10 rounded-lg border border-gray-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          variants={zoomIn}
          transition={smoothTransition}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start justify-between gap-4">
            <Icon className="text-5xl text-kienexBlue" />
            <span className="signal-light signal-light-fast" />
          </div>
          <p className="section-kicker mt-8">Product Overview</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-kienexBlue">{product.name}</h1>
          <p className="mt-5 max-w-4xl leading-7 text-black">{product.overview}</p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <ProductBlock title="Features" items={product.features} />
          <ProductBlock title="Use Cases" items={product.useCases} />
          <ProductBlock title="Integration Details" items={product.integrations} icon="plug" />
        </div>
      </div>
    </section>
  )
}

function ProductBlock({ title, items, icon }) {
  const Marker = icon === 'plug' ? FaPlug : FaCheckCircle

  return (
    <motion.div className="card" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} whileHover={cardHover}>
      <h2 className="text-2xl font-bold text-kienexBlue">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-black">
            <Marker className="mt-1 shrink-0 text-kienexBlue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
