/*let titulo = document.getElementById("encabezado");*/
//console.log(titulo.innerHTML);

const primerTitulo = document.getElementById("encabezdo");
primerTitulo.innerHTML = "El pirata de la historia es Peter Pan";

let concepto = document.getElementById("concepto");
concepto.style.color = "orange";
//console.log(concepto.innerHTML);

let caracteristicas = document.getElementsByTagName("p");
caracteristicas[0].style.textAlign = "letf";
//console.log(caracteristicas[0].innerHTML);

let nuevoParrafo = document.createElement("p");
let textParrafo = document.createTextNode(
  "Aquí debe ir el texto que queramos "
);
let datoNuevo = document.getElementById("datos");
datoNuevo.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(textParrafo);

let title2 = document.createElement("p");
let textoDentro = document.createTextNode(
  "El pirata es el pirata de Peter Pan"
);

let tituloNuevo = document.getElementById("tituloNuevo");
tituloNuevo.appendChild(title2);
title2.appendChild(textoDentro);

document.getElementById("Yesenia").innerHTML =
  "Hola mi nombre es Paola Gonzalez";

function validar() {
  let nombre = document.getElementById("nombre").value;
  let radios = document.getElementsByName("programar");
  let estudia = document.getElementById("estudiante");
  let valorRadio = "";

  for (let a = 0; a < radios.length; a++) {
    if (radios[a].checked) {
      valorRadio = radios[a].value;
    }
  }
  if (estudia.checked) {
    estudia = "SI";
  } else {
    estudia = "NO";
  }
  console.log(
    "Nombre:" +
      nombre +
      "\nSabe programar: " +
      valorRadio +
      "\nEs estudiante:" +
      estudia
  );
}
function limpiar() {
  document.getElementById("nombre").value = "";
  let radios = document.getElementsByName("programar");

  for (let a = 0; a < radios.length; a++) {
    if (radios[a].checked) {
      radios[a].checked = false;
    }
  }
  let estudia = document.getElementById("estudiante");
  estudia.checked = false;
}
