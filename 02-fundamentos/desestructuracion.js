const deadpool = {
  nombre: "wade",
  apellido: "winston",
  poder: "regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido}`;
  },
};

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function impimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  console.log(nombre, apellido, poder, edad);
}
//mpimeHeroe(deadpool);

//const { nombre,apellido,poder, edad = 0  } = deadpool;

//console.log(nombre, apellido, poder, edad)

const heroes = ["Deadpool", "Superman", "Batman"];
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
//console.log(h1,h2,h3)

const [, , h3] = heroes;
console.log(h3);
