// Objeto
const cancion = {
  duracion: {
    minutos: 3,
    segundos: 50,
  },
  autor: { nombre: "César", apellido: "Rolón" },
  anho: 2021,
  titulo: "La maravillosa vida de un programador.",
};

const cancionDos = {
  duracion: {
    minutos: 3,
    segundos: 50,
  },
  autor: { nombre: "Santiago", apellido: "Pose" },
  anho: 2021,
  titulo: "Cómo seguir tus pasos haciendo bien las cosas",
};

const adjetivos = [
  {
    nombreBueno: {
      propiedad: 5,
    },
    nombreMalo: "Horrible",
  },
  {
    nombre: "Malo",
  },
];
console.log(adjetivos[1].nombre);
// console.log(cancion);
// console.log(cancion.duracion);
// console.log(cancion.duracion.minutos);

console.log(
  `Hola ${cancionDos.autor.nombre} ${cancionDos.autor.apellido}, tu canción ${cancionDos.titulo} es ${adjetivos[1].nombre.bueno}`
);

// Arrays
const newArray = [
  "Estudiante",
  "Programador",
  "Médico",
  2,
  "3",
  null,
  undefined,
  true,
];

console.log(newArray[7]);

let numero = 25;
function parImpar(n) {
  console.log(numero);
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let resultado = parImpar(numero);

console.log(resultado);
