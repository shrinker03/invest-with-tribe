import nodemailer from 'nodemailer'

const sendMail = (user) => {
    const transporter = nodemailer.createTransport({
        url: 'https://invest-tribe.herokuapp.com/',
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      });
      
    const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Welcome to invest with Tribe! Your investment journey starts here...',
        text: `We're glad to onboard you.`,
        html : { path: 'C:/Users/Acer/Workspace/React-Course/invest-with-tribe/date-filter/back-end/utils/mail-templates/beefree-la5dgdmfhr.html' },
    };    

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

export default sendMail

