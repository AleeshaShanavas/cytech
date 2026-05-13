import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data.js'
import { buttonTap, cardHover, fadeUp, staggerContainer, viewport, zoomIn } from '../animation.js'

export default function Products() {
  return (
    <section id="products" className="border-t border-blue-50 bg-[#E6F0FF]">
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
    </section>
  )
}
