const empleados = [
  {
    id: 1,
    nombre: "Nicola",
  },
  {
    id: 2,
    nombre: "Fer",
  },
  {
    id: 3,
    nombre: "Rob",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
  return promesa;
};
const getSalario = (id) => {
  const promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario ? resolve(salario) : reject(`No existe salario con id ${id}`);
  });
  return promesa;
};
const id = 4;
//PRIMERA OPCION HELL
//getEmpleado(id)
//  .then((empleado) => console.log(empleado))
//  .catch((err) => console.log(err));
//getSalario(id)
//  .then((salario) => console.log(salario))
//  .catch((err) => console.log(err));

//HELLCODE
//getEmpleado(id)
//  .then((empleado) => {
//  getSalario(id)
//  .then((salario) => {
//  console.log("El empleado:", empleado, "tiene un salario de: ", salario);
//})
//.catch((err) => console.log(err));
// })
//.catch((err) => console.log(err));

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado:", nombre, "tiene un salario de:", salario)
  )
  .catch((err) => console.log(err));
