"use strict";
const nodemailer = require("nodemailer");

const sendMail = async(email, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'email', //// EMAIL here is the same as 
            pass: 'password'
        }
    });

    var mailOptions = {
        from: 'email', /// HEEERRE
        to: `${email}`,
        subject: 'Confirmation email: We got your message',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



module.exports = sendMail;