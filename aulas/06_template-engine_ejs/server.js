const express = require("express");
// const path = require('path');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver apolicações/serviçoes de forma fácil",
    },
    {
      title: "E",
      message: "JS usa JavaScript para redenrizar HTML",
    },
    {
      title: "M",
      message: "uito fácil de usar",
    },
    {
      title: "A",
      message: "prendendo muito com a Rocketseat",
    },
    {
      title: "I",
      message: "nstall ejs",
    },
    {
      title: "S",
      message: "intaxe simples",
    },
  ];

  const subtitle =
    "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";

  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
  // res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
