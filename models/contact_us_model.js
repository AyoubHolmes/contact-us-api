const { sequelize } = require(".");

module.exports = (sequelize, Datatype) => {
    const contactUs = sequelize.define('ContactUs', {
        id: {
            type: Datatype.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: Datatype.STRING,
            allowNull: false,
        },
        objective: {
            type: Datatype.STRING,
            allowNull: true,
        },
        body: {
            type: Datatype.STRING(500),
            allowNull: false,
        }
    })
    return contactUs;
}