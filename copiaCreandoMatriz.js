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

function matriz() {
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
      let columnaClikeada = elements.target;
      console.log("esta", columnaClikeada);

      let imagenInsertada = columnaClikeada.querySelector("img");
      console.log(imagenInsertada);

      if (imagenInsertada == null) {
        let imagen = document.createElement("img");
        imagen.setAttribute("src", "x-icon.png");
        elements.target.appendChild(imagen);
        console.log("ahora", imagenInsertada);
      }
    }
  }

  function insertarO(elements) {
    var atributos = elements.target.getAttribute("class");
    console.log(atributo);

    if (atributos == null) {
      alert("La columna ya se esta usando");
    } else if (atributos.includes("column")) {
      let imagen = document.createElement("img");
      imagen.setAttribute("src", "o2-icon.png");
    }
  }

  var turno = jugador1;

  if (turno == jugador1) {
    padre.addEventListener("click", insertarX);
  } else if (turno == jugador2) {
    padre.addEventListener("click", insertarO);
  }
}




// css

h1 {
  color: black;
  font-size: 60px;
  font-family: "Henny Penny", cursive;
  text-align: center;
}
h2 {
  color: black;
  font-size: 50px;
  font-family: "Henny Penny", cursive;
  text-align: left;
}
h3 {
  color: black;
  font-size: 30px;
  font-family: "Henny Penny", cursive;
  text-align: left;
}
.jugador1 {
  font-family: "Henny Penny", cursive;
  display: inline-block;
  margin-right: 30px;
}
.jugador2 {
  font-family: "Henny Penny", cursive;
  display: inline-block;
}

input[type="number"] {
  width: 40px;
}

.row {
  display: inline-block;
}

.column {
  height: 120px;
  width: 120px;
  border: 5px solid black;
}

.column img {
  height: 96px;
  width: 96px;
  object-fit: contain;
  text-align: center;
  padding-top: 10px;
  padding-left: 10px;
  object-fit: cover;
  opacity: 0;
}

HTML

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Matriz</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="creandoMatriz.css">
        
    </head>
    <body>

        <h1 id="titulo">BIENVENIDO A MI JUEGO</h1>
        <h2>Vamos a jugar</h2>
        <h3>Selecciona un jugador</h3>

        <div class="jugadores"></div>
        <br>
        <br>

        <form>
            <label for="filas">Inserte el número de filas</label>
            <input type="number" id="filas" name="numFilas">
            <br>
            <label for="columnas">Insete el número de columnas</label>
            <input type="number" id="columnas" name="numColumnas">
            <br>
            <button type="button" onclick="matriz()">Insertar</button>
        </form>
        <br>
        <br>

        <div class="padre"></div>

        <script src="creandoMatriz.js"></script>
    </body>
</html>




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
      let imagen = document.createElement("img");
      columnElement.appendChild(imagen);
      rowElement.appendChild(columnElement);
    }
  }
  let padre = document.querySelector(".padre");
  padre.addEventListener("click", insertarX);

  var turno = jugador1;

  function insertarX(evento) {
    let imagen = evento.target;

    if (imagen.hasAttribute("src")) {
      alert("La columna ya esta en uso");
    } else {
      if (turno == jugador1) {
        imagen.style.opacity = "1";
        imagen.src = "x-icon.png";
        turno = jugador2;
      } else {
        imagen.style.opacity = "1";
        imagen.src = "o2-icon.png";
        turno = jugador1;
      }
    }
  }
}
