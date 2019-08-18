const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kbforro@gmail.com',
    subject: 'Thanks for joing in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kbforro@gmail.com',
    subject: 'Sad to say Goodbye',
    text: `Goodbye, ${name}. Let me know what are needed to improve the app.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}