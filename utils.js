function drawGameArray(scoresMatriz, numRows, numColumns) {
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
}

function recorrerDiagonal(array) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let contadorXDiagSecundaria = 0;
  let contadorODiagSecundaria = 0;

  for (contador = 0; contador < array.length; contador++) {
    let fila = array[contador];

    for (
      contador2 = 0;
      contador2 < fila.length && ganador == false;
      contador2++
    ) {
      let columna = fila[contador2];

      if (contador == contador2) {
        if (array[contador][contador2] != "") {
          if (columna == "X") {
            contadorX = contadorX + 1;
          } else if (columna == "O") {
            contadorO = contadorO + 1;
          }
        }
      } else if (contador + contador2 == array.length - 1) {
        if (array[contador][contador2] != "") {
          if (columna == "X") {
            contadorXDiagSecundaria = contadorXDiagSecundaria + 1;
          } else if (columna == "O") {
            contadorODiagSecundaria = contadorODiagSecundaria + 1;
          }
        }
      }
    }
  }

  if (contadorX == array.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    ganador = true;
  } else if (contadorO == array.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    ganador = true;
  } else if (contadorXDiagSecundaria == array.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    ganador = true;
  } else if (contadorODiagSecundaria == array.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    ganador = true;
  } else {
    ganador = false;
  }
  return ganador;
}

function recorrerFilas(array) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;

  for (contador = 0; contador < array.length; contador++) {
    var fila = array[contador];

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
            console.log("El ganador ez jugador X FILAS");
            ganador = true;
          }
        } else if (columna == "O") {
          contadorO = contadorO + 1;
          if (contadorO == fila.length) {
            console.log("El ganador ez jugador O FILAS");
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

function recorrerColumnas(array) {
  let ganador = false;
  let contadorX = 0;
  let contadorO = 0;
  let contador = 0;
  let contador2 = 0;

  while (contador2 < array.length && ganador == false) {
    columna = array[contador][contador2];

    if (columna != "") {
      if (columna == "X") {
        contadorX = contadorX + 1;
        if (contadorX == array.length) {
          console.log("El ganador es el jugador X COLUMNAS");
          ganador = true;
        }
      } else if (columna == "O") {
        contadorO = contadorO + 1;
        if (contadorO == array.length) {
          console.log("El ganador es el jugador O COLUMNAS");
          ganador = true;
        }
      }
    }
    contador = contador + 1;
    if (contador == array.length) {
      contador = 0;
      contadorX = 0;
      contadorO = 0;
      contador2 = contador2 + 1;
    }
  }
  return ganador;
}
