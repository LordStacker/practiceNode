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

const getInfoUsuario = async () => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (error) {
    throw error;
  }
};
const id = 3;
getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
