//setTimeout(function () {
//  console.log("Hola mundo");
//}, 1000);
const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Nicola",
  };
  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});
