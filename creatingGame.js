function matriz() {
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

  let numFilas = document.getElementById("filas").value;
  let numColumnas = document.getElementById("columnas").value;

  var arrayGanador = [];

  for (a = 0; a < numFilas; a++) {
    let divPadre = document.querySelector(".padre");
    let rowElement = document.createElement("div");
    let atributo = document.createAttribute("class");
    atributo.value = "row";
    rowElement.setAttributeNode(atributo);
    divPadre.appendChild(rowElement);

    arrayGanador[a] = [];

    for (b = 0; b < numColumnas; b++) {
      let columnElement = document.createElement("div");
      let atributo2 = document.createAttribute("class");
      atributo2.value = "column";
      columnElement.setAttributeNode(atributo2);

      let imagen = document.createElement("img");
      let atributoImagen = document.createAttribute("class");
      atributoImagen.value = "row" + "-" + [a] + "-" + [b];
      imagen.setAttributeNode(atributoImagen);

      columnElement.appendChild(imagen);
      rowElement.appendChild(columnElement);

      arrayGanador[a][b] = "";
    }
  }

  let padre = document.querySelector(".padre");
  padre.addEventListener("click", insertarX);

  var turno = jugador1;

  function insertarX(evento) {
    let imagen = evento.target;

    var atributosImagen = imagen.getAttribute("class");
    console.log("esta es la cadena", atributosImagen);

    let cadena = atributosImagen.split("-");
    console.log("esta es la cadena", cadena);
    console.log("número de fila", cadena[1], "número de columna", cadena[2]);

    if (imagen.hasAttribute("src")) {
      alert("La columna ya esta en uso");
    } else {
      if (turno == jugador1) {
        imagen.style.opacity = "1";
        imagen.src = "x-icon.png";
        turno = jugador2;
        arrayGanador[cadena[1]][cadena[2]] = "X";
        console.log(arrayGanador);
      } else {
        imagen.style.opacity = "1";
        imagen.src = "o2-icon.png";
        turno = jugador1;
        arrayGanador[cadena[1]][cadena[2]] = "O";
        console.log(arrayGanador);
      }
    }
  }
}
