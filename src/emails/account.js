const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "nrksevem@gmail.com",
    subject: "Welcome, thanks for joining us! (Test)",
    text: `I hope the this really gets to you(me) ${name}!`,
  });
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'nrksevem@gmail.com',
    subject: 'Email de Cancelamento',
    text: `Sinto muito que queiras deixar esta comunidade, ${name}. Esperamos ver-te em breve.`
  })
}

module.exports = { sendWelcomeEmail, sendCancelationEmail }