const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const serverPort = process.env.PORT || 5000;
const db = require('./models');
const routesApi = require('./routes/serverRoutes');

// enabling CORS and parsing the requests

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())

// ------------ the routes -----------
app.use('/api', routesApi);

db.sequelize.sync().then(() => {
    app.listen(serverPort, () => {
        console.log("Listening succesfully")
    });
})