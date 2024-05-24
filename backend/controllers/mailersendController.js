const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");
require("dotenv/config");



module.exports.sendEmail = async (
  recipientEmail,
  recipientName,
  subject,
  html,
  text
) => {
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
  });

  const sentFrom = new Sender(
    process.env.MAILERSEND_EMAIL,
    "Medikart"
  );
  const recipients = [new Recipient(recipientEmail, recipientName)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setHtml(html)
    .setText(text);

  try {
    await mailerSend.email.send(emailParams);
    console.log("Email sent successfully to:", recipientEmail);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
