"use server"

import { Resend } from "resend"

// Hoist to module level for one instance per serverless function cold start.
const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactResult =
  | { success: true }
  | { error: string }

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  const firstName = (formData.get("firstName") as string | null)?.trim() ?? ""
  const lastName = (formData.get("lastName") as string | null)?.trim() ?? ""
  const company = (formData.get("company") as string | null)?.trim() ?? ""
  const email = (formData.get("email") as string | null)?.trim() ?? ""
  const projectType = (formData.get("projectType") as string | null)?.trim() ?? ""
  const description = (formData.get("description") as string | null)?.trim() ?? ""

  if (!firstName || !lastName || !email) {
    return { error: "Please fill out all required fields." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." }
  }

  const projectLabel =
    {
      power: "Power Distribution Design",
      lighting: "Lighting Design",
      emergency: "Emergency / Standby Systems",
      "arc-flash": "Short Circuit & Arc Flash Study",
      "street-lighting": "Street & Site Lighting",
      ev: "EV Infrastructure",
      other: "Other / General Inquiry",
    }[projectType] ?? projectType

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
      <h2 style="color: #1a1a2e; border-bottom: 2px solid #4da6ff; padding-bottom: 8px;">
        New Inquiry - Arclight Engineering
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 12px; background: #f4f7fb; font-weight: 600; width: 36%;">Name</td>
          <td style="padding: 8px 12px; background: #f4f7fb;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: 600;">Email</td>
          <td style="padding: 8px 12px;"><a href="mailto:${email}" style="color: #4da6ff;">${email}</a></td>
        </tr>
        ${company ? `
        <tr>
          <td style="padding: 8px 12px; background: #f4f7fb; font-weight: 600;">Company / Agency</td>
          <td style="padding: 8px 12px; background: #f4f7fb;">${company}</td>
        </tr>` : ""}
        ${projectLabel ? `
        <tr>
          <td style="padding: 8px 12px; font-weight: 600;">Solution Area</td>
          <td style="padding: 8px 12px;">${projectLabel}</td>
        </tr>` : ""}
        ${description ? `
        <tr>
          <td style="padding: 8px 12px; background: #f4f7fb; font-weight: 600; vertical-align: top;">Description</td>
          <td style="padding: 8px 12px; background: #f4f7fb; white-space: pre-wrap;">${description}</td>
        </tr>` : ""}
      </table>

      <p style="margin-top: 24px; color: #666; font-size: 13px;">
        This inquiry was submitted via the Arclight Engineering website contact form.
      </p>
    </div>
  `

  const { error } = await resend.emails.send(
    {
      from: "Arclight Engineering <contact@arclight-eng.com>",
      to: ["abram.largoza@arclight-eng.com"],
      replyTo: email,
      subject: `New Inquiry: ${projectLabel || "General"} - ${firstName} ${lastName}`,
      html,
    },
    { idempotencyKey: `contact-inquiry/${email}/${Date.now()}` }
  )

  if (error) {
    console.error("Resend error:", error)
    return { error: "Failed to send your message. Please try again or email us directly." }
  }

  return { success: true }
}
