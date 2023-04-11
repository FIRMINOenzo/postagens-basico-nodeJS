const db = require("./DataBase");

const Post = db.sequelize.define("posts", {
  id_postagem: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ds_titulo: {
    type: db.Sequelize.STRING,
  },
  ds_conteudo: {
    type: db.Sequelize.TEXT,
  },
});

module.exports = Post;
