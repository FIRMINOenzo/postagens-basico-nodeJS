const Sequelize = require("sequelize");

const sequelize = new Sequelize("post_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize,
  sequelize,
};
