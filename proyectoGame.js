function crearMatriz() {
  let numFilas = document.getElementById("filas").value;
  let numColumnas = document.getElementById("columnas").value;

  let matriz = [];
  for (contador = 0; contador < numFilas; contador++) {
    let insertarFila = document.createElement("div");
    document.body.appendChild(insertarFila);

    let atributo1 = document.createAttribute("class");
    atributo1.value = "row-" + [contador + 1];
    insertarFila.setAttributeNode(atributo1);
    matriz[contador] = insertarFila;

    let contador2 = 0;
    while (contador2 < numColumnas) {
      let insertarColumna = document.createElement("div");
      let atributo = document.createAttribute("class");
      atributo.value = "column-" + [contador2 + 1];
      insertarColumna.setAttributeNode(atributo);

      let imagen = document.createElement("IMG");
      imagen.setAttribute("src", "x-icon.png");
      imagen.setAttribute("alt", "Laimagen es una X");
      insertarColumna.appendChild(imagen);
      insertarFila.appendChild(insertarColumna);
      matriz[contador][contador2] = insertarColumna;
      contador2 = contador2 + 1;
    }
  }
  console.log("la matriz es: " + matriz);
}

function saludo() {
  alert("Hola soy Yesenia González Peñaranda");
}

let button = document.getElementById("myBtn");

button.addEventListener("click", saludo);

var head = document.head;
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "proyectoGame.css";
head.appendChild(link);
