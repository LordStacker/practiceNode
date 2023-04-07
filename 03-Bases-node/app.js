const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

require("colors");

console.clear();

//console.log(process.argv);

//Metodo no recomendado
//const [, , arg3] = process.argv;
//const [, base] = arg3.split("=");
//console.log(base);
//hasta aqui el no recomendado

//console.log(argv);

//console.log("base: yargs", argv.b);

//const base = 7;

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
