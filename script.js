function matriz() {
  let players = document.querySelector(".players");
  let createPlayer = createPlayers(players);
  let player1 = createPlayer.player1;
  let player2 = createPlayer.player2;

  let rowsNumber = document.getElementById("rows").value;
  let columnsNumber = document.getElementById("columns").value;

  let dashboardGame = drawGame(rowsNumber, columnsNumber);
  let scores = dashboardGame.scoresMatriz;
  let positionsCunter = dashboardGame.positionsCunter;

  let winnerMessage = "";

  let father = document.querySelector(".father");
  father.addEventListener("click", insertarX);

  var player = player1;
  let playCounter = 0;

  function insertarX(event) {
    playCounter = playCounter + 1;
    const image = event.target;
    const imageAttributes = image.getAttribute("class");
    let movementPosition = imageAttributes.split("-");
    let row = movementPosition[1];
    let column = movementPosition[2];

    if (winnerMessage == "") {
      if (image.hasAttribute("src")) {
        alert("La columna ya esta en uso");
      } else {
        if (player == player1) {
          image.style.opacity = "1";
          image.src = "x-icon.png";
          player = player2;
          scores[row][column] = "X";
          winnerMessage = getWinnerMessage(scores);
        } else {
          image.style.opacity = "1";
          image.src = "o2-icon.png";
          player = player1;
          scores[row][column] = "O";
          winnerMessage = getWinnerMessage(scores);
        }
        if (winnerMessage) {
          var exposeWinner = document.querySelector(".winner");
          var winnerText = document.createTextNode(winnerMessage);
          exposeWinner.appendChild(winnerText);
        }
      }
    }
    if (playCounter == positionsCunter) {
      if (winnerMessage == "") {
        var exposeWinner = document.querySelector(".winner");
        var winnerText = document.createTextNode("NO HAY UN GANADOR");
        exposeWinner.appendChild(winnerText);
      }
    }
  }
}
