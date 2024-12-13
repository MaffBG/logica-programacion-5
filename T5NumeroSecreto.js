// En caso de querer generar el número secreto de forma aleatorio, se puede emplear:
//const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// En este caso, yo lo asignaré manualmente
const numeroSecreto = 36

// Se llanan a los IDs que usaremos para interactuar con el usuario en el DOM:
const botonAdivinar = document.getElementById("adivinarBoton");
const inputNumero = document.getElementById("numero");
const mensajeDiv = document.getElementById("mensaje");
const intentosDiv = document.getElementById("intentos");

// Se crea un arreglo con el fin de almacenar los intentos del usuario
let intentos = [];

// Se continúa creando una función que muestra el mensaje con la lista de intentos del ususario
function mostrarMensaje(texto, tipo) {
  mensajeDiv.textContent = texto;
}

// Ahora se verificará el número introducido por el usuario
function verificarNumero() {
  const numeroUsuario = inputNumero.value.trim();
  // Con esto último, se obtiene el valor del input y se eliminan los espacios

  // Se continúa verificando que el número del usuario sea un número válido
  if (isNaN(numeroUsuario) || numeroUsuario === "") {
    mostrarMensaje("Error. Este tipo de dato no es válido, vuelve a intentarlo.");
    // Se limpia el input
    inputNumero.value = ''; 
    // Se sale de la función
    return; 
  }

  // Se convierte la entrada del usuario en un número entero
  const numero = parseInt(numeroUsuario);

  // Se hacen comparaciones del número del usuario con el número secreto, y mediante condicionales se muestra determinado mensaje
  if (numero < numeroSecreto) {
    mostrarMensaje("Ups, el número es incorrecto. El número es mayor.");
  } else if (numero > numeroSecreto) {
    mostrarMensaje("Ups, el número es incorrecto. El número es menor.");
  } else {
    mostrarMensaje("¡Felicidades, adivinaste el número secreto!");
    intentosDiv.textContent = `Tu número de intentos: ${intentos.length + 1}`; 
  }

  // Se guarda el número de intento del usuario
  intentos.push(numero);
  // Se limpia el input
  inputNumero.value = '';
}

botonAdivinar.addEventListener("click", verificarNumero);