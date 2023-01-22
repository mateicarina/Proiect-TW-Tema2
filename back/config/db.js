
const Sequelize = require('sequelize');
const models = require('../models');

const sequelize = new Sequelize('local', 'root', 'root', {
  host: 'localhost',
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});
sequelize.authenticate()
  .then(() => {
    console.log("sequelize has successfully connected to the database")
  })

  .catch(err => console.error("Unable to connect to the database:" + err));


sequelize.sync({ force: false, alter: true }).then(() => { console.log("Sync completed") }).catch(err => console.log("Error at creating: ") + err);


module.exports = sequelize;