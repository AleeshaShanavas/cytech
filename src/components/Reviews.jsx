import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { reviews } from '../data.js'
import { fadeUp, viewport } from '../animation.js'

const companyNames = ['Gulf Trade', 'HealthCare Plus', 'FoodChain', 'ShipFast', 'BuildRight', 'LogiTech Corp', 'Kienex Partners']

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-blue-50">
      <div className="section-shell max-w-none px-0 sm:px-0 lg:px-0">
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-kienexBlue">Client Reviews</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-kienexBlue sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Teams trust Kienex for dependable software delivery, clear communication, and long-term technology support.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4 overflow-hidden">
          <ReviewRow items={reviews} direction="left" />
          <ReviewRow items={[...reviews].reverse()} direction="right" />
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Trusted by growing companies across Saudi Arabia
          </p>
          <div className="mt-6 overflow-hidden">
            <div className="review-track-left flex w-max items-center gap-10">
              {[...companyNames, ...companyNames].map((name, index) => (
                <span key={`${name}-${index}`} className="shrink-0 text-base font-bold text-gray-300 sm:text-lg">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewRow({ items, direction }) {
  const doubledItems = [...items, ...items]
  const trackClass = direction === 'left' ? 'review-track-left' : 'review-track-right'

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex w-max gap-4 px-4 ${trackClass}`}>
        {doubledItems.map((review, index) => (
          <article
            key={`${direction}-${review.name}-${index}`}
            className="w-[280px] shrink-0 rounded-lg border border-white/10 bg-white p-5 shadow-sm sm:w-[340px]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-kienexBlue text-sm font-bold text-white">
                {review.initials}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-black">{review.name}</h3>
                <p className="truncate text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <FaStar key={starIndex} className="text-sm" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-black">"{review.quote}"</p>
          </article>
        ))}
      </div>
    </div>
  )
}
