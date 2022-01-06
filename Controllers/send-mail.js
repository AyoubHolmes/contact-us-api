"use strict";
const nodemailer = require("nodemailer");

const sendMail = async(email, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'boulbaz147@gmail.com', //// EMAIL here is the same as 
            pass: 'yami_@1470'
        }
    });

    var mailOptions = {
        from: 'boulbaz147@gmail.com', /// HEEERRE
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