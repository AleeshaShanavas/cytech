import nodemailer from 'nodemailer'

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailHtml(payload) {
  const serviceName = escapeHtml(payload.serviceLabel || payload.service || 'General Inquiry')
  const messageHtml = escapeHtml(payload.message || '').replace(/\n/g, '<br />')
  const name = escapeHtml(payload.name)
  const email = escapeHtml(payload.email)
  const phone = escapeHtml(payload.phone || 'N/A')
  const company = escapeHtml(payload.company || 'N/A')

  return `
    <div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;color:#111827;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
        <div style="padding:18px 24px;background:linear-gradient(90deg,#0B3D91,#164fb5);color:#ffffff;">
          <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:.9;">Kienex Website</div>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">New Contact Form Submission</h1>
        </div>

        <div style="padding:24px;">
          <div style="margin-bottom:20px;padding:14px 16px;border-radius:12px;background:#eff6ff;border:1px solid #dbeafe;">
            <div style="font-size:13px;color:#1d4ed8;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">Inquiry Summary</div>
            <div style="margin-top:6px;font-size:18px;font-weight:700;color:#0B3D91;">${serviceName}</div>
          </div>

          <table role="presentation" style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;width:140px;font-size:13px;font-weight:700;color:#4b5563;vertical-align:top;">Name</td>
              <td style="padding:10px 0;font-size:14px;color:#111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;width:140px;font-size:13px;font-weight:700;color:#4b5563;vertical-align:top;">Email</td>
              <td style="padding:10px 0;font-size:14px;color:#111827;">
                <a href="mailto:${email}" style="color:#0B3D91;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;width:140px;font-size:13px;font-weight:700;color:#4b5563;vertical-align:top;">Phone</td>
              <td style="padding:10px 0;font-size:14px;color:#111827;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;width:140px;font-size:13px;font-weight:700;color:#4b5563;vertical-align:top;">Company</td>
              <td style="padding:10px 0;font-size:14px;color:#111827;">${company}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;width:140px;font-size:13px;font-weight:700;color:#4b5563;vertical-align:top;">Service</td>
              <td style="padding:10px 0;font-size:14px;color:#111827;">${serviceName}</td>
            </tr>
          </table>

          <div style="margin-top:24px;">
            <div style="margin-bottom:10px;font-size:13px;font-weight:700;color:#4b5563;text-transform:uppercase;letter-spacing:.06em;">Message</div>
            <div style="padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;font-size:14px;line-height:1.7;color:#111827;">
              ${messageHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function buildEmailText(payload) {
  const serviceName = payload.serviceLabel || payload.service || 'General Inquiry'

  return [
    'KIENEX CONTACT FORM',
    '===================',
    '',
    `Name     : ${payload.name}`,
    `Email    : ${payload.email}`,
    `Phone    : ${payload.phone || 'N/A'}`,
    `Company  : ${payload.company || 'N/A'}`,
    `Service  : ${serviceName}`,
    '',
    'Message:',
    '--------',
    payload.message || '',
  ].join('\n')
}

export async function sendContactEmail({ env, payload }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  })

  const serviceName = payload.serviceLabel || payload.service || 'General Inquiry'

  await transporter.sendMail({
    from: `"Kienex Website" <${env.SMTP_USER}>`,
    to: env.CONTACT_TO || 'info@kienex.com',
    replyTo: payload.email,
    subject: `New Kienex inquiry: ${serviceName}`,
    text: buildEmailText(payload),
    html: buildEmailHtml(payload),
  })
}
