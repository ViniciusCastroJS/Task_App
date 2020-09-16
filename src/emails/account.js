
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendingWelcome = (UserEmail, name) => {
    sgMail.send({
        to: UserEmail,
        from: "vskgamer@gmail.com",
        text: "Welcome to Task App, "+name,
        subject: "Welcome to Task App!"
    })
}

const CancelationEmail = (UserEmail, name) => {
    sgMail.send({
        to: UserEmail,
        from: "vskgamer@gmail.com",
        text: `What happen ${name}? We miss you!`,
        subject: "Hey! What's is going on, buddy?"
    })
}


module.exports = {
    sendingWelcome, CancelationEmail
}