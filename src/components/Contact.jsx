import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa'
import { buttonTap, fadeLeft, fadeRight, smoothTransition, viewport } from '../animation.js'

const initialForm = { name: '', email: '', phone: '', company: '', service: '', message: '' }

const contactItems = [
  { title: 'Email Us', icon: FaEnvelope, details: ['info@kienex.com', 'support@kienex.com'], href: 'mailto:info@kienex.com' },
  { title: 'Call Us', icon: FaPhoneAlt, details: ['+966543064677', 'Available for business inquiries'], href: 'tel:+966543064677' },
  { title: 'Visit Us', icon: FaMapMarkerAlt, details: ['Al Khobar, Saudi Arabia', 'Eastern Province'] },
  { title: 'Working Hours', icon: FaClock, details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'] },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setErrors({ ...errors, [event.target.name]: '' })
    setServerError('')
  }

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.service) nextErrors.service = 'Please select a service.'
    if (form.message.trim().length < 10) nextErrors.message = 'Please add at least 10 characters.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length !== 0) {
      return
    }

    const serviceLabels = {
      erp: 'ERP Software',
      custom: 'Custom Software',
      cloud: 'Cloud Solutions',
      digital: 'Digital Marketing',
    }

    try {
      setSubmitting(true)
      setServerError('')
      setSent(false)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          serviceLabel: serviceLabels[form.service] || form.service,
        }),
      })

      const rawText = await response.text()
      let data = {}

      try {
        data = rawText ? JSON.parse(rawText) : {}
      } catch {
        data = { message: rawText || 'Unexpected server response' }
      }

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send email')
      }

      setSent(true)
      setForm(initialForm)
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Failed to send email')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-gray-100 bg-gray-50">
      <div className="section-shell">
        <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} transition={smoothTransition}>
          <span className="inline-block rounded-full bg-kienexBlue/10 px-4 py-2 text-sm font-medium text-kienexBlue">
            Get In Touch
          </span>
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Have a project in mind? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} transition={smoothTransition}>
            {contactItems.map((item) => (
              <ContactCard key={item.title} item={item} />
            ))}
          </motion.div>

          <motion.form
            className="rounded-2xl bg-gray-50 p-6 md:p-8 lg:col-span-2"
            onSubmit={submit}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeRight}
            transition={{ ...smoothTransition, delay: 0.1 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full Name *" name="name" value={form.name} onChange={updateField} error={errors.name} placeholder="Your name" />
              <Field label="Email Address *" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} placeholder="you@company.com" />
              <Field label="Phone Number" name="phone" value={form.phone} onChange={updateField} placeholder="+966..." />
              <Field label="Company Name" name="company" value={form.company} onChange={updateField} placeholder="Your company" />
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-gray-700">Service Interested In *</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-black outline-none transition focus:border-kienexBlue focus:ring-2 focus:ring-kienexBlue/20"
                >
                  <option value="">Select a service</option>
                  <option value="erp">ERP Software</option>
                  <option value="custom">Custom Software</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="digital">Digital Marketing</option>
                </select>
                {errors.service && <span className="mt-2 block text-sm text-red-600">{errors.service}</span>}
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-gray-700">Your Message *</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-black outline-none transition focus:border-kienexBlue focus:ring-2 focus:ring-kienexBlue/20"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <span className="mt-2 block text-sm text-red-600">{errors.message}</span>}
              </label>
            </div>
            {sent && <p className="mt-5 rounded-lg border border-gray-200 bg-white p-3 text-sm font-semibold text-kienexBlue">Thank you. Your message has been sent successfully.</p>}
            {serverError && <p className="mt-5 rounded-lg border border-red-200 bg-white p-3 text-sm font-semibold text-red-600">{serverError}</p>}
            <motion.button type="submit" disabled={submitting} className="primary-button mt-6 w-full gap-2 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto" whileTap={buttonTap}>
              {submitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-black outline-none transition focus:border-kienexBlue focus:ring-2 focus:ring-kienexBlue/20"
      />
      {error && <span className="mt-2 block text-sm text-red-600">{error}</span>}
    </label>
  )
}

function ContactCard({ item }) {
  const Icon = item.icon
  const content = (
    <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-kienexBlue/5">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kienexBlue/10 text-kienexBlue">
        <Icon />
      </span>
      <div>
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        {item.details.map((detail) => (
          <p key={detail} className="mt-1 text-sm text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  )

  if (item.href) {
    return <a href={item.href}>{content}</a>
  }

  return content
}
