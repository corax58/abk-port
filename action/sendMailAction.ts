"use server";
import { ContactData } from "@/app/_components/ContactMeForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendToTelegram(contactData: ContactData) {
  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID; // Make sure to add this to your .env

  if (!botToken || !chatId) {
    console.error("Telegram BOT_TOKEN or TELEGRAM_CHAT_ID is missing.");
    return;
  }

  // Format the message for Telegram using Markdown
  const message = `
*New Contact Message* 📬
*Name:* ${contactData.full_name}
*Email:* ${contactData.email}

*Message:*
${contactData.description}
  `;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown", // Allows bolding and formatting
        }),
      },
    );

    const body = await res.json();
    console.log(body);
  } catch (error) {
    console.error("Failed to send message to Telegram:", error);
  }
}

export async function sendMainAction(contactData: ContactData) {
  try {
    // Honeypot check (stops simple spam bots)
    if (contactData.company && contactData.company !== "") {
      return { success: true };
    }

    // 1. Send the notification to Telegram
    await sendToTelegram(contactData);

    // 2. Create a pretty HTML template for the Email
    const htmlEmail = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 0;">
          New Contact Submission
        </h2>
        <div style="margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${contactData.full_name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${contactData.email}" style="color: #0070f3;">${contactData.email}</a></p>
        </div>
        <h3 style="color: #555; font-size: 16px;">Message:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; color: #444; line-height: 1.6; white-space: pre-wrap;">${contactData.description}</div>
        <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
          Sent via your portfolio contact form.
        </p>
      </div>
    `;

    // 3. Send the email via Resend
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER_EMAIL!],
      subject: `New message from ${contactData.full_name}`,
      replyTo: contactData.email, // Allows you to hit "Reply" in your email client
      html: htmlEmail, // The pretty HTML version
      text: contactData.description, // Fallback text version for email clients that don't support HTML
    });

    return { success: true };
  } catch (e) {
    if (e instanceof Error) {
      return { success: false, error: e.message };
    } else if (typeof e == "string") {
      return { success: false, error: e };
    } else {
      return { success: false, error: "Something went wrong" };
    }
  }
}
