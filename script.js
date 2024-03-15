const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Argentina?",
    opciones: ["Buenos Aires", "Córdoba", "Rosario"],
    respuestaCorrecta: 0,
  },
  {
    pregunta: "¿Quién fue el primer presidente de Argentina?",
    opciones: [
      "Juan Domingo Perón",
      "Julio Argentino Roca",
      "Cornelio Saavedra",
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es el animal nacional de Argentina?",
    opciones: ["Yaguareté", "Cóndor andino", "Hornero", "Carpincho"],
    respuestaCorrecta: 1,
  },
  {
    pregunta: "¿Cuál es la comida típica de Argentina?",
    opciones: ["Milanesa", "Empanadas", "Asado", "Locro"],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es el idioma oficial de Argentina?",
    opciones: ["Quechua", "Guaraní", "Español", "Mapuche"],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es la moneda oficial de Argentina?",
    opciones: [
      "Dólar estadounidense",
      "Euro",
      "Peso argentino",
      "Real brasileño",
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es la superficie de Argentina?",
    opciones: [
      "1.762.192 km²",
      "966.968 km²",
      "2.780.400 km²",
      "3.800.000 km²",
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es la población de Argentina?",
    opciones: ["45 millones", "25 millones", "51 millones", "60 millones"],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es la bandera nacional de Argentina?",
    opciones: [
      "Celeste y blanca con una franja horizontal roja",
      "Verde, blanca y negra",
      "Celeste y blanca con un sol en el medio",
      "Azul y blanca con un sol en el medio",
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es el himno nacional de Argentina?",
    opciones: [
      "Canción Patria",
      "Himno Nacional Argentino",
      "La Aurora",
      "Marcha de San Lorenzo",
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: "¿Cuál es el escritor más famoso de Argentina?",
    opciones: [
      "Julio Cortázar",
      "Ernesto Sabato",
      "Jorge Luis Borges",
      "Victoria Ocampo",
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "¿Cuál es el nombre del glaciar más grande de Argentina?",
    opciones: [
      "Glaciar Perito Moreno",
      "Glaciar Upsala",
      "Glaciar Viedma",
      "Glaciar Spegazzini",
      "Glaciar Pío XI",
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: "¿En qué provincia se encuentra el Parque Nacional Iguazú?",
    opciones: ["Misiones", "Corrientes", "Entre Ríos", "Formosa", "Chaco"],
    respuestaCorrecta: 0,
  },
  {
    pregunta:
      "¿Cuál es el nombre del famoso acantilado de la Patagonia argentina?",
    opciones: [
      "Acantilado Faro Querandí",
      "Acantilado Rocas Negras",
      "Acantilado Punta Norte",
      "Acantilado La Lobería",
      "Acantilado El Cóndor",
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta:
      "¿Qué prócer argentino cruzó la Cordillera de los Andes con su ejército?",
    opciones: [
      "José de San Martín",
      "Manuel Belgrano",
      "Juan Domingo Perón",
      "Julio Argentino Roca",
      "Cornelio Saavedra",
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta:
      "¿Cuál es la ciudad argentina que ostenta el título de Capital Nacional del Tango?",
    opciones: ["Buenos Aires", "Córdoba", "Rosario", "La Plata", "Mendoza"],
    respuestaCorrecta: 0,
  },
  {
    pregunta:
      "¿Cuál es el nombre del famoso escritor argentino que ganó el Premio Nobel de la Paz en 1980?",
    opciones: [
      "Jorge Luis Borges",
      "Ernesto Sabato",
      "Julio Cortázar",
      "Adolfo Pérez Esquivel",
      "Victoria Ocampo",
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta:
      "¿En qué año se celebró el primer Mundial de Fútbol en Argentina?",
    opciones: ["1930", "1978", "1986", "2002", "2014"],
    respuestaCorrecta: 3,
  },
  {
    pregunta: "¿Cuál es la bebida nacional de Argentina?",
    opciones: ["Mate", "Vino tinto", "Fernet con coca", "Malbec", "Yerba mate"],
    respuestaCorrecta: 0,
  },
  {
    pregunta:
      "¿Qué famoso baile folclórico argentino se caracteriza por sus zapateos y boleadoras?",
    opciones: ["Chacarera", "Malambo", "Tango", "Zamba", "Cueca"],
    respuestaCorrecta: 1,
  },
  {
    pregunta:
      "¿Cuál es el nombre del ave que se considera el símbolo nacional de Argentina?",
    opciones: ["Hornero", "Cóndor andino", "Yaguareté", "Carpincho", "Guanaco"],
    respuestaCorrecta: 1,
  },
  {
    pregunta:
      "¿En qué provincia argentina se encuentra el famoso Tren a las Nubes?",
    opciones: ["Salta", "Jujuy", "Tucumán", "Catamarca", "La Rioja"],
    respuestaCorrecta: 0,
  },
];

const instrucciones = [
  {
    instruccion:
      "De verdad nesecitas instrucciones?? jajsjs es re simple (me da flojera poner instrucciones aún)",
  },
];

const creditos = [
  {
    credito: "Juego creado por: Hugo jajs",
  },
];
const btnCreditos = document.getElementById("btn-creditos");
const btninstrucciones = document.getElementById("btn-instrucciones");
const btnJugar = document.getElementById("btn-jugar");
const contenedorJuego = document.getElementById("contenedor-juego");
const categorias = ["Historia", "Geografía", "Ciencia", "Arte"];
const dificultades = ["Fácil", "Medio", "Difícil"];
const checkbox = document.getElementById("dark-mode-switch");
const body = document.body;

let categoriaSeleccionada;
let dificultadSeleccionada;
let preguntaActual;

checkbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

btnCreditos.addEventListener("click", () => {
  mostrarcreditos(creditos); // Mostrar las instrucciones
});

btninstrucciones.addEventListener("click", () => {
  mostrarinstrucciones(instrucciones);
});

btnJugar.addEventListener("click", () => {
  // Mostrar la primera pregunta
  mostrarPregunta(preguntas[0]);
});

function mostrarPregunta(pregunta) {
  contenedorJuego.innerHTML = ""; // Limpiar el contenido del contenedor

  // Crear la pregunta
  const h2 = document.createElement("h2");
  h2.textContent = pregunta.pregunta;
  contenedorJuego.appendChild(h2);

  // Crear las opciones de respuesta
  for (let i = 0; i < pregunta.opciones.length; i++) {
    const opcion = document.createElement("button");
    opcion.textContent = pregunta.opciones[i];
    opcion.addEventListener("click", () => {
      // Validar la respuesta
      if (i === pregunta.respuestaCorrecta) {
        // Respuesta correcta
        alert("¡Felicidades! Has acertado la pregunta.");
      } else {
        // Respuesta incorrecta
        alert("Bruh, relmente no sabes esto?");
      }

      // Mostrar la siguiente pregunta
      if (preguntas.length > i + 1) {
        mostrarPregunta(preguntas[i + 1]);
      } else {
        // Fin del juego
        alert("¡Has completado el juego!");
      }
    });
    contenedorJuego.appendChild(opcion);
  }
}

function mostrarinstrucciones(instrucciones) {
  contenedorJuego.innerHTML = ""; // Limpiar el contenido del contenedor

  // Crear las instrucciones
  for (let i = 0; i < instrucciones.length; i++) {
    const instruccion = document.createElement("p");
    instruccion.textContent = instrucciones[i].instruccion;
    contenedorJuego.appendChild(instruccion);
  }
}

function mostrarcreditos(creditos) {
  contenedorJuego.innerHTML = ""; // Limpiar el contenido del contenedor

  // Crear los creditos
  for (let i = 0; i < creditos.length; i++) {
    const credito = document.createElement("p");
    credito.textContent = creditos[i].credito;
    contenedorJuego.appendChild(credito);
  }
}
