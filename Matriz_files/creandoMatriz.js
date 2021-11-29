let players = document.querySelector(".jugadores");
let jugador1 = document.createElement("div");
let attJugador1 = document.createAttribute("class");
attJugador1.value = "jugador1";
jugador1.setAttributeNode(attJugador1);
let textoJugador1 = document.createTextNode("JUGADOR X");
jugador1.appendChild(textoJugador1);
players.appendChild(jugador1);

let jugador2 = document.createElement("div");
let attjugador2 = document.createAttribute("class");
attjugador2.value = "jugador2";
jugador2.setAttributeNode(attjugador2);
let textojugador2 = document.createTextNode("JUGADOR O");
jugador2.appendChild(textojugador2);
players.appendChild(jugador2);

var iniciar = 0;
function matriz() {
  iniciar = 1;
  console.log(iniciar);

  let numFilas = document.getElementById("filas").value;
  let numColumnas = document.getElementById("columnas").value;

  for (a = 0; a < numFilas; a++) {
    let divPadre = document.querySelector(".padre");
    let rowElement = document.createElement("div");
    let atributo = document.createAttribute("class");
    atributo.value = "row";
    rowElement.setAttributeNode(atributo);
    divPadre.appendChild(rowElement);

    for (b = 0; b < numColumnas; b++) {
      let columnElement = document.createElement("div");
      let atributo2 = document.createAttribute("class");
      atributo2.value = "column row" + [a + 1] + "-" + "column" + [b + 1];
      columnElement.setAttributeNode(atributo2);
      rowElement.appendChild(columnElement);
    }
  }

  let padre = document.querySelector(".padre");

  function insertarX(elements) {
    let atributos = elements.target.getAttribute("class");

    if (atributos == null) {
      alert("La columna ya se esta usando");
    } else if (atributos.includes("column")) {
      let imagen = document.createElement("img");
      imagen.setAttribute("src", "x-icon.png");
      elements.target.appendChild(imagen);
      console.log("El elemento resultante es", elements.target);
    }
  }

  function insertarO(elements) {
    let atributos = elements.target.getAttribute("class");

    if (atributos == null) {
      alert("La columna ya se esta usando");
    } else if (atributos.includes("column")) {
      let imagen = document.createElement("img");
      imagen.setAttribute("src", "o2-icon.png");
      elements.target.appendChild(imagen);
      console.log("El elemento resultante es", elements.target);
    }
  }

  if (turno == jugador1) {
    padre.addEventListener("click", insertarX);
  } else if (turno == jugador2) {
    padre.addEventListener("click", insertarO);
  }
}
let turno = 0;
if (iniciar == 1) {
  /*  let jugadores = 2; */
  /* for (contador = 0; contador < jugadores; contador++) { */
  let jug = false;
  if (jug == false) {
    turno = jugador1;
    jug = true;
    console.log(jug);
    console.log(turno);
  } else if (jug == true) {
    turno = jugador2;
  }
}
