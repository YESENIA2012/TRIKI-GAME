function matriz() {
  let players = document.querySelector(".players");
  let player1 = document.createElement("div");
  let attplayer1 = document.createAttribute("class");
  attplayer1.value = "player1";
  player1.setAttributeNode(attplayer1);
  let textPlayer1 = document.createTextNode("JUGADOR X");
  player1.appendChild(textPlayer1);
  players.appendChild(player1);

  let player2 = document.createElement("div");
  let attplayer2 = document.createAttribute("class");
  attplayer2.value = "player2";
  player2.setAttributeNode(attplayer2);
  let textPlayer2 = document.createTextNode("JUGADOR O");
  player2.appendChild(textPlayer2);
  players.appendChild(player2);

  let numRows = document.getElementById("rows").value;
  let numColumns = document.getElementById("columns").value;

  let dashboardGame = drawGame(numRows, numColumns);
  let scores = dashboardGame.scoresMatriz;
  let positionsCunter = dashboardGame.positionsCunter;

  let winnerMessage = "";

  let father = document.querySelector(".father");
  father.addEventListener("click", insertarX);

  var player = player1;
  let playCounter = 0;

  function insertarX(evento) {
    playCounter = playCounter + 1;
    const image = evento.target;
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
