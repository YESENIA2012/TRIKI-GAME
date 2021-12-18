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

  let numRows = document.getElementById("filas").value;
  let numColumns = document.getElementById("columnas").value;

  let scores = drawGame(numRows, numColumns);

  let padre = document.querySelector(".padre");
  padre.addEventListener("click", insertarX);

  var turno = jugador1;

  function insertarX(evento) {
    let imagen = evento.target;
    let atributosImagen = imagen.getAttribute("class");
    let movementPosition = atributosImagen.split("-");
    let row = movementPosition[1];
    let column = movementPosition[2];
    var recorrerDiagonales = recorrerDiagonal(scores);
    var recorrerFilas = recorrerFila(scores);
    var recorrerColumnas = recorrerColumna(scores);

    if (
      recorrerDiagonales == false &&
      recorrerFilas == false &&
      recorrerColumnas == false
    ) {
      if (imagen.hasAttribute("src")) {
        alert("La columna ya esta en uso");
      } else {
        if (turno == jugador1) {
          imagen.style.opacity = "1";
          imagen.src = "x-icon.png";
          turno = jugador2;
          scores[row][column] = "X";
          let recorrerDiagonales = recorrerDiagonal(scores);
          let recorrerFilas = recorrerFila(scores);
          let recorrerColumnas = recorrerColumna(scores);
        } else {
          imagen.style.opacity = "1";
          imagen.src = "o2-icon.png";
          turno = jugador1;
          scores[row][column] = "O";
          let recorrerDiagonales = recorrerDiagonal(scores);
          let recorrerFilas = recorrerFila(scores);
          let recorrerColumnas = recorrerColumna(scores);
        }
      }
    }
  }
}
