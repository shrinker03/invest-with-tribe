import sgMail from '@sendgrid/mail'

const sendMail = (user) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: user.email, 
    from: process.env.EMAIL,
    subject: 'Sending with SendGrid is Fun',
    templateId: 'd-230989d6ebc947749ac21dee6f3968d0'
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

export default sendMail

