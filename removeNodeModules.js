// no diretório "node-js", rodar no terminal: node removeNodeModules.js
const fs = require("fs");
const path = require("path");

function removeNodeModules(dir) {
  const subDirs = fs.readdirSync(dir);

  subDirs.forEach((subDir) => {
    const fullPath = path.join(dir, subDir);
    const nodeModulesPath = path.join(fullPath, "node_modules");

    if (
      fs.existsSync(nodeModulesPath) &&
      fs.lstatSync(nodeModulesPath).isDirectory()
    ) {
      fs.rmSync(nodeModulesPath, { recursive: true, force: true });
      console.log(`Removido: ${nodeModulesPath}`);
    } else if (fs.lstatSync(fullPath).isDirectory()) {
      removeNodeModules(fullPath); // Recurse into subdirectories
    }
  });
}

// removeNodeModules(__dirname);
