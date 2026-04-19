import { useState } from 'react'
import { FaComments, FaEnvelope, FaPaperPlane, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonTap } from '../animation.js'

const quickPrompts = ['Services', 'Pricing', 'ERP', 'Contact']

const getAssistantReply = (message) => {
  const text = message.toLowerCase()

  if (text.includes('price') || text.includes('cost') || text.includes('pricing') || text.includes('rate')) {
    return 'Kienex pricing depends on project scope, number of users, modules, hosting, and integrations. Share your requirement and our team can prepare a clear estimate.'
  }

  if (text.includes('erp') || text.includes('erpnext') || text.includes('odoo') || text.includes('tally')) {
    return 'Kienex provides ERPNext, Odoo, and Tally solutions with setup, customization, reporting, migration, and integration support.'
  }

  if (text.includes('service') || text.includes('software') || text.includes('cloud') || text.includes('marketing')) {
    return 'Our main services are ERP software, custom software development, cloud server solutions, and digital marketing for business growth.'
  }

  if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('whatsapp')) {
    return 'You can call or WhatsApp Kienex at +966543064677, email info@kienex.com, or visit us in Al Khobar, Saudi Arabia.'
  }

  if (text.includes('industry') || text.includes('trading') || text.includes('logistics') || text.includes('healthcare') || text.includes('restaurant')) {
    return 'Kienex supports trading, logistics, manufacturing, healthcare, restaurant, and distribution businesses with practical software solutions.'
  }

  return 'I can help with Kienex services, ERP products, pricing, cloud solutions, custom software, industries, and contact details. Tell me what you are looking for.'
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi, I am Kienex AI Assistant. Ask me about services, ERP, pricing, cloud, or contact details.' }])

  const sendMessage = (messageText = input) => {
    const cleanMessage = messageText.trim()
    if (!cleanMessage) return

    setInput('')
    setMessages((items) => [...items, { from: 'user', text: cleanMessage }])
    setTyping(true)

    window.setTimeout(() => {
      setMessages((items) => [...items, { from: 'bot', text: getAssistantReply(cleanMessage) }])
      setTyping(false)
    }, 650)
  }

  const submit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  return (
    <>
      <div className="fixed bottom-24 right-5 z-40 grid gap-3">
        <a
          href="https://wa.me/966543064677"
          target="_blank"
          rel="noreferrer"
          aria-label="Connect on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white shadow-soft transition hover:scale-105 hover:shadow-glow"
        >
          <FaWhatsapp className="text-xl" />
        </a>
        <a
          href="mailto:info@kienex.com"
          aria-label="Send email to Kienex"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-kienexBlue shadow-soft ring-1 ring-gray-200 transition hover:scale-105 hover:shadow-glow"
        >
          <FaEnvelope className="text-xl" />
        </a>
      </div>

      <button
        type="button"
        aria-label="Open Kienex chat"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-kienexBlue text-white shadow-soft transition hover:scale-105 hover:shadow-glow"
        onClick={() => setOpen(true)}
      >
        <FaComments className="text-2xl" />
        <span className="signal-light signal-light-fast absolute -right-1 -top-1 border-2 border-white" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end bg-black/20 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <div>
                  <h2 className="font-bold text-kienexBlue">Kienex AI Assistant</h2>
                  <p className="text-sm text-black">Ask anything about Kienex</p>
                </div>
                <button type="button" className="min-h-11 min-w-11 rounded-lg text-kienexBlue" onClick={() => setOpen(false)} aria-label="Close chat">
                  <FaTimes className="mx-auto" />
                </button>
              </div>

              <div className="max-h-72 space-y-3 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={`${message.from}-${index}`}
                    className={`rounded-lg p-3 text-sm leading-6 ${message.from === 'bot' ? 'border border-gray-200 bg-white text-black' : 'ml-auto bg-kienexBlue text-white'}`}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.22 }}
                  >
                    {message.text}
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-3 text-sm text-black"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="signal-light signal-light-fast" />
                    <span className="signal-light" />
                    <span className="signal-light signal-light-slow" />
                  </motion.div>
                )}
              </div>

              <div className="grid gap-2 border-t border-gray-100 p-4">
                <div className="grid grid-cols-4 gap-2">
                  {quickPrompts.map((prompt) => (
                    <motion.button key={prompt} type="button" className="rounded-lg border border-gray-200 px-2 py-2 text-xs font-semibold text-kienexBlue transition hover:bg-gray-50" onClick={() => sendMessage(prompt)} whileTap={buttonTap}>
                      {prompt}
                    </motion.button>
                  ))}
                </div>
                <form onSubmit={submit} className="flex gap-2">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Type your question..."
                    className="min-h-11 flex-1 rounded-lg border border-gray-300 px-3 text-sm text-black outline-none focus:border-kienexBlue focus:ring-2 focus:ring-kienexBlue/20"
                  />
                  <motion.button type="submit" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg bg-kienexBlue text-white" whileTap={buttonTap} aria-label="Send message">
                    <FaPaperPlane />
                  </motion.button>
                </form>
                <div className="grid grid-cols-2 gap-2">
                  <a href="https://wa.me/966543064677" target="_blank" rel="noreferrer" className="primary-button w-full">
                    <FaWhatsapp className="mr-2" /> WhatsApp
                  </a>
                  <a href="mailto:info@kienex.com" className="secondary-button w-full">
                    <FaEnvelope className="mr-2" /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
