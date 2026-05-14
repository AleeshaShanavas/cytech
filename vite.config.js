import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './contactEmail.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/cytech/',
    plugins: [
      react(),
      {
        name: 'kienex-contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ message: 'Method not allowed' }))
              return
            }

            try {
              const chunks = []

              for await (const chunk of req) {
                chunks.push(chunk)
              }

              const body = JSON.parse(Buffer.concat(chunks).toString('utf8'))
              await sendContactEmail({
                env,
                payload: body,
              })

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ message: 'Email sent successfully' }))
            } catch (error) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  message: 'Failed to send email',
                  error: error instanceof Error ? error.message : 'Unknown error',
                }),
              )
            }
          })
        },
      },
    ],
  }
})
