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
function recorrerDiagonal(scores) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let contadorXDiagSecundaria = 1;
  let contadorODiagSecundaria = 1;

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
    var exponerGanador = document.querySelector(".ganador");
    var textGnanador = document.createTextNode("EL GANADOR ES EL JUGADOR X");
    exponerGanador.appendChild(textGnanador);
    ganador = true;
  } else if (contadorO == scores.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    var exponerGanador = document.querySelector(".ganador");
    var textGnanador = document.createTextNode("EL GANADOR ES EL JUGADOR O");
    exponerGanador.appendChild(textGnanador);
    ganador = true;
  } else if (contadorXDiagSecundaria == scores.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    var exponerGanador = document.querySelector(".ganador");
    var textGnanador = document.createTextNode("EL GANADOR ES EL JUGADOR X");
    exponerGanador.appendChild(textGnanador);
    ganador = true;
  } else if (contadorODiagSecundaria == scores.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    var exponerGanador = document.querySelector(".ganador");
    var textGnanador = document.createTextNode("EL GANADOR ES EL JUGADOR O");
    exponerGanador.appendChild(textGnanador);
    ganador = true;
  } else {
    ganador = false;
  }
  return ganador;
}

function recorrerFila(scores) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;

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
            var exponerGanador = document.querySelector(".ganador");
            var textGnanador = document.createTextNode(
              "EL GANADOR ES EL JUGADOR X"
            );
            exponerGanador.appendChild(textGnanador);
            ganador = true;
          }
        } else if (columna == "O") {
          contadorO = contadorO + 1;
          if (contadorO == fila.length) {
            console.log("El ganador es el jugador O FILAS");
            var exponerGanador = document.querySelector(".ganador");
            var textGnanador = document.createTextNode(
              "EL GANADOR ES EL JUGADOR O"
            );
            exponerGanador.appendChild(textGnanador);
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
  return ganador;
}

function recorrerColumna(scores) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let contador = 0;
  let contador2 = 0;

  while (contador2 < scores.length && ganador == false) {
    columna = scores[contador][contador2];

    if (columna != "") {
      if (columna == "X") {
        contadorX = contadorX + 1;
        if (contadorX == scores.length) {
          console.log("El ganador es el jugador X COLUMNAS");
          var exponerGanador = document.querySelector(".ganador");
          var textGnanador = document.createTextNode(
            "EL GANADOR ES EL JUGADOR X"
          );
          exponerGanador.appendChild(textGnanador);
          ganador = true;
        }
      } else if (columna == "O") {
        contadorO = contadorO + 1;
        if (contadorO == scores.length) {
          console.log("El ganador es el jugador O COLUMNAS");
          var exponerGanador = document.querySelector(".ganador");
          var textGnanador = document.createTextNode(
            "EL GANADOR ES EL JUGADOR O"
          );
          exponerGanador.appendChild(textGnanador);
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
  return ganador;
}
