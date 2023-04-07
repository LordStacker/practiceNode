const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} ${"x".yellow} ${i} ${"=".yellow} ${base * i}\n`;
    }
    if (listar) {
      console.log("======================".green);
      console.log("     Tabla del:".green, colors.blue(base));
      console.log("======================".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt Creada`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
