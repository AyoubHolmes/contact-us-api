const express = require('express');
const contactUsCtl = require('../Controllers/contact-us-ctr');
const router = express.Router();
const db = require('../models');

router.post('/createMessage', contactUsCtl.createMessage);
router.delete('/deleteMessage/:id', contactUsCtl.deleteMessage);
router.get('/getMessageByEmail/:email', contactUsCtl.getMessageByEmail);
router.get('/getMessages', contactUsCtl.getMessages);

module.exports = router;