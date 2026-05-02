import { sendContactEmail } from '../contactEmail.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    await sendContactEmail({
      env: process.env,
      payload,
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
