module.exports = function () {
  const fileName = "products";

  fs.writeFile(
    process.env.APPDATA + `\\folder\\${fileName}.json`,
    JSON.stringify(products),
    (err) => {
      if (err) {
        console.error("Erro ao inserir o JSON.", err);
        return;
      }
      console.log("Json salvo com sucesso!");
    }
  );

  return true;
};
