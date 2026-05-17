import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface CartItem {
  name: string
  price: number
}

interface EnquiryPayload {
  fullName: string
  email: string
  phone: string
  eventType: string
  guests: string
  eventDate: string
  vision: string
  cartItems: CartItem[]
  total: number
}


function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}

function buildAdminEmailHTML(data: EnquiryPayload): string {
  const addOnsRows =
    data.cartItems.length > 0
      ? data.cartItems
          .map(
            (item) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #e8ecf4;font-family:'Manrope',sans-serif;font-size:14px;color:#45474c;">${item.name}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #e8ecf4;font-family:'Manrope',sans-serif;font-size:14px;color:#091426;text-align:right;font-weight:600;">${formatCurrency(item.price)}</td>
        </tr>`
          )
          .join('')
      : `<tr><td colspan="2" style="padding:12px 16px;font-family:'Manrope',sans-serif;font-size:14px;color:#45474c;font-style:italic;">No add-ons selected</td></tr>`

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f8f9ff;font-family:'Manrope',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9ff;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e0e9ff;">

      <!-- Header -->
      <tr>
        <td style="background:#091426;padding:32px 40px;">
          <p style="margin:0;font-family:'Georgia',serif;font-size:24px;color:#ffffff;letter-spacing:1px;">House of Bash</p>
          <p style="margin:6px 0 0;font-family:'Manrope',Arial,sans-serif;font-size:11px;letter-spacing:3px;color:#ffdea5;text-transform:uppercase;">New Enquiry Received</p>
        </td>
      </tr>

      <!-- Gold bar -->
      <tr><td style="background:#775a19;height:3px;"></td></tr>

      <!-- Guest Details -->
      <tr>
        <td style="padding:32px 40px 24px;">
          <p style="margin:0 0 20px;font-family:'Manrope',Arial,sans-serif;font-size:12px;letter-spacing:3px;color:#775a19;text-transform:uppercase;font-weight:700;">Guest Details</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ['Full Name', data.fullName],
              ['Email Address', data.email],
              ['Phone Number', data.phone || 'Not provided'],
              ['Event Type', data.eventType],
              ['Number of Guests', data.guests || 'Not specified'],
              ['Preferred Date', data.eventDate || 'Flexible'],
            ]
              .map(
                ([label, value]) => `
            <tr>
              <td style="padding:8px 0;width:40%;font-family:'Manrope',Arial,sans-serif;font-size:12px;letter-spacing:1px;color:#45474c;text-transform:uppercase;vertical-align:top;">${label}</td>
              <td style="padding:8px 0;font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#091426;font-weight:600;">${value}</td>
            </tr>`
              )
              .join('')}
          </table>
        </td>
      </tr>

      <!-- Divider -->
      <tr><td style="padding:0 40px;"><div style="height:1px;background:#e8ecf4;"></div></td></tr>

      <!-- Vision -->
      ${
        data.vision
          ? `
      <tr>
        <td style="padding:24px 40px;">
          <p style="margin:0 0 12px;font-family:'Manrope',Arial,sans-serif;font-size:12px;letter-spacing:3px;color:#775a19;text-transform:uppercase;font-weight:700;">Event Vision</p>
          <p style="margin:0;font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#45474c;line-height:1.7;background:#f0f4ff;padding:16px;border-left:3px solid #775a19;">${data.vision}</p>
        </td>
      </tr>
      <tr><td style="padding:0 40px;"><div style="height:1px;background:#e8ecf4;"></div></td></tr>`
          : ''
      }

      <!-- Add-ons -->
      <tr>
        <td style="padding:24px 40px 0;">
          <p style="margin:0 0 16px;font-family:'Manrope',Arial,sans-serif;font-size:12px;letter-spacing:3px;color:#775a19;text-transform:uppercase;font-weight:700;">Selected Add-ons</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf4;">
            <tr style="background:#f8f9ff;">
              <th style="padding:10px 16px;font-family:'Manrope',Arial,sans-serif;font-size:11px;letter-spacing:2px;color:#45474c;text-transform:uppercase;text-align:left;">Item</th>
              <th style="padding:10px 16px;font-family:'Manrope',Arial,sans-serif;font-size:11px;letter-spacing:2px;color:#45474c;text-transform:uppercase;text-align:right;">Price</th>
            </tr>
            <tr>
              <td style="padding:10px 16px;border-bottom:1px solid #e8ecf4;font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#45474c;">Base Celebration Package</td>
              <td style="padding:10px 16px;border-bottom:1px solid #e8ecf4;font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#091426;text-align:right;font-weight:600;">₹2,500</td>
            </tr>
            ${addOnsRows}
          </table>
        </td>
      </tr>

      <!-- Total -->
      <tr>
        <td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf4;border-top:none;background:#091426;">
            <tr>
              <td style="padding:16px;font-family:'Manrope',Arial,sans-serif;font-size:12px;letter-spacing:3px;color:#ffdea5;text-transform:uppercase;font-weight:700;">Estimated Total</td>
              <td style="padding:16px;font-family:'Georgia',serif;font-size:22px;color:#ffffff;text-align:right;">${formatCurrency(data.total)}</td>
            </tr>
          </table>
          <p style="margin:8px 0 0;font-family:'Manrope',Arial,sans-serif;font-size:10px;color:#75777d;letter-spacing:1px;text-transform:uppercase;">*Final pricing subject to specific event requirements</p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f8f9ff;padding:24px 40px;border-top:1px solid #e8ecf4;text-align:center;">
          <p style="margin:0;font-family:'Manrope',Arial,sans-serif;font-size:12px;color:#45474c;">Please respond to this enquiry within <strong>24 hours</strong>.</p>
          <p style="margin:8px 0 0;font-family:'Manrope',Arial,sans-serif;font-size:10px;color:#75777d;letter-spacing:2px;text-transform:uppercase;">© 2024 House of Bash. All rights reserved.</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`
}

function buildGuestConfirmationHTML(data: EnquiryPayload): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f8f9ff;font-family:'Manrope',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9ff;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e0e9ff;">

      <!-- Header -->
      <tr>
        <td style="background:#091426;padding:40px;text-align:center;">
          <p style="margin:0;font-family:'Georgia',serif;font-size:28px;color:#ffffff;letter-spacing:1px;">House of Bash</p>
          <div style="height:1px;background:#775a19;width:60px;margin:16px auto;"></div>
          <p style="margin:0;font-family:'Manrope',Arial,sans-serif;font-size:11px;letter-spacing:3px;color:#ffdea5;text-transform:uppercase;">Private Theatre Celebrations</p>
        </td>
      </tr>

      <!-- Gold bar -->
      <tr><td style="background:#775a19;height:3px;"></td></tr>

      <!-- Body -->
      <tr>
        <td style="padding:40px;text-align:center;">
          <p style="margin:0 0 8px;font-family:'Manrope',Arial,sans-serif;font-size:12px;letter-spacing:3px;color:#775a19;text-transform:uppercase;">Enquiry Confirmed</p>
          <h1 style="margin:0 0 20px;font-family:'Georgia',serif;font-size:28px;color:#091426;font-weight:normal;">Thank you, ${data.fullName.split(' ')[0]}.</h1>
          <p style="margin:0 0 32px;font-family:'Manrope',Arial,sans-serif;font-size:15px;color:#45474c;line-height:1.8;max-width:460px;margin-left:auto;margin-right:auto;">
            Your enquiry has been received. Our concierge team will reach out within <strong>24 hours</strong> to begin crafting your perfect celebration.
          </p>

          <!-- Summary box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;border:1px solid #e0e9ff;margin:0 0 32px;text-align:left;">
            <tr>
              <td style="padding:20px 24px;border-bottom:1px solid #e0e9ff;">
                <p style="margin:0 0 4px;font-family:'Manrope',Arial,sans-serif;font-size:10px;letter-spacing:3px;color:#775a19;text-transform:uppercase;font-weight:700;">Your Booking Summary</p>
              </td>
            </tr>
            ${[
              ['Event Type', data.eventType],
              ['Preferred Date', data.eventDate || 'To be confirmed'],
              ['Guests', data.guests || 'To be confirmed'],
              ['Estimated Total', formatCurrency(data.total)],
            ]
              .map(
                ([label, value]) => `
            <tr>
              <td style="padding:12px 24px;border-bottom:1px solid #e0e9ff;width:45%;">
                <span style="font-family:'Manrope',Arial,sans-serif;font-size:11px;letter-spacing:1px;color:#75777d;text-transform:uppercase;">${label}</span>
              </td>
              <td style="padding:12px 24px;border-bottom:1px solid #e0e9ff;">
                <span style="font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#091426;font-weight:600;">${value}</span>
              </td>
            </tr>`
              )
              .join('')}
          </table>

          <p style="margin:0 0 24px;font-family:'Manrope',Arial,sans-serif;font-size:13px;color:#45474c;line-height:1.7;">
            If you have any immediate questions, feel free to reach out directly:
          </p>
          <p style="margin:0;font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#091426;font-weight:600;">📞 +91 98765 12345</p>
          <p style="margin:4px 0 0;font-family:'Manrope',Arial,sans-serif;font-size:14px;color:#091426;font-weight:600;">✉️ concierge@houseofbash.in</p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#091426;padding:24px 40px;text-align:center;">
          <p style="margin:0;font-family:'Manrope',Arial,sans-serif;font-size:10px;color:#8590a6;letter-spacing:2px;text-transform:uppercase;">© 2024 House of Bash · Hyderabad · Architectural Minimalist Luxury</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const data: EnquiryPayload = await req.json()

    // Validate required fields
    if (!data.fullName || !data.email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    // Check env vars
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_USER or GMAIL_APP_PASSWORD not set in .env.local')
      return NextResponse.json(
        { error: 'Sorry, we are unable to process enquiries at the moment. Please contact us directly at concierge@houseofbash.in or call +91 98765 12345.' },
        { status: 500 }
      )
    }

    const transporter = createTransporter()

    const notifyEmail = process.env.NOTIFY_EMAIL || process.env.GMAIL_USER

    // 1. Send notification email to business owner
    await transporter.sendMail({
      from: `"House of Bash Website" <${process.env.GMAIL_USER}>`,
      to: notifyEmail,
      subject: `New Enquiry — ${data.eventType} — ${data.fullName}`,
      html: buildAdminEmailHTML(data),
      replyTo: data.email,
    })

    // 2. Send confirmation email to guest
    await transporter.sendMail({
      from: `"House of Bash" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: `Your Enquiry is Confirmed — House of Bash`,
      html: buildGuestConfirmationHTML(data),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}