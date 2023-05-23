module.exports = function () {
  const fileName = "products";
  const fileData = fs.readFileSync(
    process.env.APPDATA + `/folder/${fileName}.json`,
    { encoding: "utf8" }
  );

  return fileData;
};
