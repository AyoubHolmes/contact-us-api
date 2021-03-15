const db = require('../models');
const sendMail = require('./send-mail');
const sendmail = require('./send-mail');

createMessage = async(req, res) => {
    console.log(req.body)
    const adminMail = "admin@domain.com"
    db.ContactUs.create({
        email: req.body.email,
        objective: req.body.objective,
        body: req.body.body
    }).then((submittedMessage) => {
        sendMail(req.body.email, '') /////// Here write the content of the message that should be sent to the client
        sendMail(adminMail, '') /////// Here write the content of the message that should be sent to the admin
        res.send(submittedMessage)
    });
}

deleteMessage = (req, res) => {
    db.ContactUs.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("deleted"));
}

getMessageByEmail = (req, res) => {
    db.ContactUs.findAll({
        where: {
            email: req.params.email
        }
    }).then(email => res.send(email));
}

getMessages = (req, res) => db.ContactUs.findAll().then(contactus => res.send(contactus))


module.exports = {
    createMessage: createMessage,
    deleteMessage: deleteMessage,
    getMessageByEmail: getMessageByEmail,
    getMessages: getMessages
}