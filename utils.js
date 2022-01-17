function drawGame(numRows, numColumns) {
  var positionsCunter = 0;
  var scoresMatriz = [];
  for (a = 0; a < numRows; a++) {
    let divFather = document.querySelector(".father");
    let rowElement = document.createElement("div");
    let attribute = document.createAttribute("class");
    attribute.value = "row";
    rowElement.setAttributeNode(attribute);
    divFather.appendChild(rowElement);

    scoresMatriz[a] = [];

    for (b = 0; b < numColumns; b++) {
      let columnElement = document.createElement("div");
      let attribute = document.createAttribute("class");
      attribute.value = "column";
      columnElement.setAttributeNode(attribute);

      let image = document.createElement("img");
      let imageAttributes = document.createAttribute("class");
      imageAttributes.value = "row" + "-" + [a] + "-" + [b];
      image.setAttributeNode(imageAttributes);

      columnElement.appendChild(image);
      rowElement.appendChild(columnElement);

      scoresMatriz[a][b] = "";
      positionsCunter = positionsCunter + 1;
    }
  }
  return { scoresMatriz: scoresMatriz, positionsCunter: positionsCunter };
}
function findWinnerInDiagonals(scores) {
  let winner = false;
  let counterX = 0;
  let counterO = 0;
  let counterXDiagPrimary = 0;
  let counterODiagSecundaria = 0;
  let winnerPlayer = 0;

  for (counter = 0; counter < scores.length; counter++) {
    let row = scores[counter];

    for (counter2 = 0; counter2 < row.length && winner == false; counter2++) {
      let column = row[counter2];

      if (counter == counter2) {
        if (column == "X") {
          counterX = counterX + 1;
        } else if (column == "O") {
          counterO = counterO + 1;
        }
      }

      if (counter + counter2 == scores.length - 1) {
        if (column == "X") {
          counterXDiagPrimary = counterXDiagPrimary + 1;
        } else if (column == "O") {
          counterODiagSecundaria = counterODiagSecundaria + 1;
        }
      }
    }
  }
  if (counterX == scores.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    winnerPlayer = "X";
    winner = true;
  } else if (counterO == scores.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    winnerPlayer = "O";
    winner = true;
  } else if (counterXDiagPrimary == scores.length) {
    console.log("El ganador es el jugador X DIAGONALES");
    winnerPlayer = "X";
    winner = true;
  } else if (counterODiagSecundaria == scores.length) {
    console.log("El ganador es el jugador O DIAGONALES");
    winnerPlayer = "O";
    winner = true;
  } else {
    winner = false;
  }
  return { winner: winner, winnerPlayer: winnerPlayer };
}

function findWinnerInRows(scores) {
  let winner = false;
  let counterX = 0;
  let counterO = 0;
  let winnerPlayer = 0;

  for (counter = 0; counter < scores.length; counter++) {
    var row = scores[counter];

    for (counter2 = 0; counter2 < row.length && winner == false; counter2++) {
      var column = row[counter2];

      if (row[counter2] != "") {
        if (column == "X") {
          counterX = counterX + 1;
          if (counterX == row.length) {
            console.log("El ganador es el jugador X FILAS");
            winnerPlayer = "X";
            winner = true;
          }
        } else if (column == "O") {
          counterO = counterO + 1;
          if (counterO == row.length) {
            console.log("El ganador es el jugador O FILAS");
            winnerPlayer = "O";
            winner = true;
          }
        } else {
          winner = false;
        }
      }
    }
    counterX = 0;
    counterO = 0;
  }
  return { winner: winner, winnerPlayer: winnerPlayer };
}

function findWinnerInColumns(scores) {
  let winner = false;
  let counterX = 0;
  let counterO = 0;
  let counter = 0;
  let counter2 = 0;
  let winnerPlayer = 0;

  while (counter2 < scores.length && winner == false) {
    let column = scores[counter][counter2];

    if (column != "") {
      if (column == "X") {
        counterX = counterX + 1;
        if (counterX == scores.length) {
          console.log("El ganador es el jugador X COLUMNAS");
          winnerPlayer = "X";
          winner = true;
        }
      } else if (column == "O") {
        counterO = counterO + 1;
        if (counterO == scores.length) {
          console.log("El ganador es el jugador O COLUMNAS");
          winnerPlayer = "O";
          winner = true;
        }
      }
    }
    counter = counter + 1;
    if (counter == scores.length) {
      counter = 0;
      counterX = 0;
      counterO = 0;
      counter2 = counter2 + 1;
    }
  }
  return { winner: winner, winnerPlayer: winnerPlayer };
}

function getWinnerMessage(scores) {
  let traverseDiagonals = findWinnerInDiagonals(scores);
  let traverseRows = findWinnerInRows(scores);
  let traverseColumns = findWinnerInColumns(scores);
  if (traverseDiagonals.winner) {
    if (traverseDiagonals.winnerPlayer == "X") {
      return "EL GANADOR ES EL JUGADOR X";
    } else {
      return "EL GANADOR ES EL JUGADOR O";
    }
  }

  if (traverseRows.winner) {
    if (traverseRows.winnerPlayer == "X") {
      return "EL GANADOR ES EL JUGADOR X";
    } else {
      return "EL GANADOR ES EL JUGADOR O";
    }
  }

  if (traverseColumns.winner) {
    if (traverseColumns.winnerPlayer == "X") {
      return "EL GANADOR ES EL JUGADOR X";
    } else {
      return "EL GANADOR ES EL JUGADOR O";
    }
  }
  return "";
}
