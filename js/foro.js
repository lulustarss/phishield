var nombre = document.getElementById("nombre");
var mensaje = document.getElementById("mensaje");
var botonenviar = document.getElementById("botonEnviar");
var foro_mensajes = document.getElementById("foro_mensajes");

botonenviar.addEventListener("click", function(evento) {
  evento.preventDefault();

  let valor_nombre = nombre.value;
  let valor_mensaje = mensaje.value;
  console.log("El valor capturado es: " + valor_nombre + " " + valor_mensaje);

  let elementonuevo_nombre = document.createElement("div");
  elementonuevo_nombre.textContent = valor_nombre;

  let elementonuevo_mensaje = document.createElement("div");
  elementonuevo_mensaje.textContent = valor_mensaje;

  elementonuevo_nombre.style.fontWeight = "bold";

  foro_mensajes.appendChild(elementonuevo_nombre);
  foro_mensajes.appendChild(elementonuevo_mensaje);

  nombre.value = "";
  mensaje.value = "";
});
