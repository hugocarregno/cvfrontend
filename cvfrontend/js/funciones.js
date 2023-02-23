let datosPersonales =
  "Nombre: Hugo Ezequiel Carreño <br><br> Direccion: Guayaquil 2477 - San Luis<br><br> Edad: 28 <br><br> Estado civil: Soltero <br><br> Fecha de Nacimiento: 29/01/1995";

let educacion =
  "03/2013 – 12/2018 Universidad Nacional de Villa Mercedes <br><br> Escuela de Ingenieria y Ciencias Ambientales <br><br> Titulo: Analista en Sistemas";

let logros =
  "Solucionar problemas criticos en tiempo y forma";

let experiencia =
  "08/2020 Programador Free lancer <br><br> 01/2021 Reparacion Hardware";

let contacto =
  "Teléfono: (2657) 338741 <br><br> E-mail: hugo.carregno@gmail.com";

document
  .getElementById("datosPersonales")
  .addEventListener("click", function () {
    document.getElementById("desplegar").innerHTML = datosPersonales;
  });

document.getElementById("educacion").addEventListener("click", function () {
  document.getElementById("desplegar").innerHTML = educacion;
});

document.getElementById("logros").addEventListener("click", function () {
  document.getElementById("desplegar").innerHTML = logros;
});

document
  .getElementById("experienciaLaboral")
  .addEventListener("click", function () {
    document.getElementById("desplegar").innerHTML = experiencia;
  });

document.getElementById("contacto").addEventListener("click", function () {
  document.getElementById("desplegar").innerHTML = contacto;
});