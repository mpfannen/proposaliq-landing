import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    replyTo: email,
    to: "support@getproposaliq.com",
    subject: `New Contact Form Submission from ${name}${company ? ` - ${company}` : ""}`,
    text: [
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Company: ${company || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <table style="font-family:sans-serif;font-size:14px;color:#1e3a5f;border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0">${name}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0"><strong>Company</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0">${company || "—"}</td></tr>
        <tr><td colspan="2" style="padding:16px 0 4px"><strong>Message</strong></td></tr>
        <tr><td colspan="2" style="padding:8px 12px;background:#f8fafc;border-radius:6px;white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ ok: true });
}
