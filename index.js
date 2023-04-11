const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

const bodyParser = require("body-parser");

const Post = require("./models/Post");

// CONFIG
// Template Engine
app.engine("hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Post.findAll({ order: [["id_postagem", "DESC"]] }).then((posts) => {
    res.render("home", { posts });
  });
});

// Rotas
app.get("/cad", (req, res) => {
  res.render("form");
});

app.post("/add", (req, res) => {
  Post.create({
    ds_titulo: req.body.title,
    ds_conteudo: req.body.content,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(`Erro: ${err}.`);
    });
});

app.get("/deletar/:id", (req, res) => {
  Post.destroy({
    where: {
      id_postagem: req.params.id,
    },
  })
    .then(() => {
      res.send("Postagem deletada!");
    })
    .catch(() => {
      res.send("Erro ao apagar!");
    });
});

app.listen(8081, () => {
  console.log("Server ON");
});
