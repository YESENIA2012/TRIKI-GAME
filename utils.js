function drawGame(numRows, numColumns) {
  var scoresMatriz = [];
  for (a = 0; a < numRows; a++) {
    let divPadre = document.querySelector(".padre");
    let rowElement = document.createElement("div");
    let atributo = document.createAttribute("class");
    atributo.value = "row";
    rowElement.setAttributeNode(atributo);
    divPadre.appendChild(rowElement);

    scoresMatriz[a] = [];

    for (b = 0; b < numColumns; b++) {
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

      scoresMatriz[a][b] = "";
    }
  }
  return scoresMatriz;
}
function findWinnerInDiagonals(scores) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let contadorXDiagSecundaria = 1;
  let contadorODiagSecundaria = 1;
  let winnerPlayer = 0;

  for (contador = 0; contador < scores.length; contador++) {
    let fila = scores[contador];

    for (
      contador2 = 0;
      contador2 < fila.length && ganador == false;
      contador2++
    ) {
      let columna = fila[contador2];

      if (contador == contador2) {
        if (scores[contador][contador2] != "") {
          if (columna == "X") {
            contadorX = contadorX + 1;
          } else if (columna == "O") {
            contadorO = contadorO + 1;
          }
        }
      } else if (contador + contador2 == scores.length - 1) {
        if (scores[contador][contador2] != "") {
          if (columna == "X") {
            contadorXDiagSecundaria = contadorXDiagSecundaria + 1;
          } else if (columna == "O") {
            contadorODiagSecundaria = contadorODiagSecundaria + 1;
          }
        }
      }
    }
  }
  if (contadorX == scores.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    winnerPlayer = "X";
    ganador = true;
  } else if (contadorO == scores.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    winnerPlayer = "O";
    ganador = true;
  } else if (contadorXDiagSecundaria == scores.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    winnerPlayer = "X";
    ganador = true;
  } else if (contadorODiagSecundaria == scores.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    winnerPlayer = "O";
    ganador = true;
  } else {
    ganador = false;
  }
  return { winner: ganador, winnerPlayer: winnerPlayer };
}

function findWinnerInRows(scores) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let winnerPlayer = 0;

  for (contador = 0; contador < scores.length; contador++) {
    var fila = scores[contador];

    for (
      contador2 = 0;
      contador2 < fila.length && ganador == false;
      contador2++
    ) {
      var columna = fila[contador2];

      if (fila[contador2] != "") {
        if (columna == "X") {
          contadorX = contadorX + 1;
          if (contadorX == fila.length) {
            console.log("El ganador es el jugador X FILAS");
            winnerPlayer = "X";
            ganador = true;
          }
        } else if (columna == "O") {
          contadorO = contadorO + 1;
          if (contadorO == fila.length) {
            console.log("El ganador es el jugador O FILAS");
            winnerPlayer = "O";
            ganador = true;
          }
        } else {
          ganador = false;
        }
      }
    }
    contadorX = 0;
    contadorO = 0;
  }
  return { winner: ganador, winnerPlayer: winnerPlayer };
}

function findWinnerInColumns(scores) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let contador = 0;
  let contador2 = 0;
  let winnerPlayer = 0;

  while (contador2 < scores.length && ganador == false) {
    columna = scores[contador][contador2];

    if (columna != "") {
      if (columna == "X") {
        contadorX = contadorX + 1;
        if (contadorX == scores.length) {
          console.log("El ganador es el jugador X COLUMNAS");
          winnerPlayer = "X";
          ganador = true;
        }
      } else if (columna == "O") {
        contadorO = contadorO + 1;
        if (contadorO == scores.length) {
          console.log("El ganador es el jugador O COLUMNAS");
          winnerPlayer = "O";
          ganador = true;
        }
      }
    }
    contador = contador + 1;
    if (contador == scores.length) {
      contador = 0;
      contadorX = 0;
      contadorO = 0;
      contador2 = contador2 + 1;
    }
  }
  return { winner: ganador, winnerPlayer: winnerPlayer };
}

function getWinnerMessage(scores) {
  let recorrerDiagonales = findWinnerInDiagonals(scores);
  let recorrerFilas = findWinnerInRows(scores);
  let recorrerColumnas = findWinnerInColumns(scores);

  if (recorrerDiagonales.winner) {
    if (recorrerDiagonales.winnerPlayer == "X") {
      return "EL GANADOR ES EL JUGADOR X";
    } else {
      return "EL GANADOR ES EL JUGADOR O";
    }
  }

  if (recorrerFilas.winner) {
    if (recorrerFilas.winnerPlayer == "x") {
      return "EL GANADOR ES EL JUGADOR X";
    } else {
      return "EL GANADOR ES EL JUGADOR O";
    }
  }

  if (recorrerColumnas.winner) {
    if (recorrerColumnas.winnerPlayer == "X") {
      return "EL GANADOR ES EL JUGADOR X";
    } else {
      return "EL GANADOR ES EL JUGADOR O";
    }
  }

  return "";
}
