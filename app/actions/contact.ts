'use server';

import { Resend } from 'resend';

export async function sendContactEmail(formData: FormData) {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    throw new Error('Please complete all required fields.');
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    throw new Error('Submitted information exceeds the allowed length.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Please provide a valid email address.');
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: ['saieainkhant9@gmail.com'],
    replyTo: email,
    subject: `Portfolio Contact: ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
    `,
  });

  if (error) {
    console.error('Contact email error:', error);
    throw new Error('Unable to send your message. Please try again later.');
  }
}
