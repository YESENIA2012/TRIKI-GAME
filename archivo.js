const sumaDos = (num1, num2) => num1 + num2;

const resultado = sumaDos(20, 30);
console.log(resultado);

const mensaje = (nombre) => {
  return "Hola soy " + nombre;
};

const mensaje2 = mensaje("Dilan");
console.log(mensaje2);

const suma = (num1, num2) => `la suma es: ${num1 + num2}`;
const resultadoSuma = suma(5, 10);
console.log(resultadoSuma);

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
};

mascota.id = 1;
mascota.array = ["angora", "criollo", "persa"];

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);
console.log(mascota.id);
console.log(mascota.array);

const { edad } = mascota;
console.log(edad);

const web = {
  nombre: "Canal Yesenia",
  links: { enlace: "www.google.cl" },
  redesSociales: {
    youtube: {
      enlaces: "youtube.com",
      nombre: "bluuweb yt",
    },
  },
};
const redes = web.redesSociales.youtube.enlaces;
console.log(redes);

const { enlaces, nombre } = web.redesSociales.youtube;
console.log(enlaces);
console.log(nombre);

/*fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
*/
