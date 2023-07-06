
var nombre = document.getElementById("nombre")
var mensaje = document.getElementById("mensaje")
var botonenviar = document.getElementById("botonEnviar")

botonenviar.onclick = function(evento) {
    evento.preventDefault()
    let valor_nombre = nombre.value
    let valor_mensaje = mensaje.value
    console.log("el valor capturado es: " + nombre.value + " " + mensaje.value)
}
var foro_mensajes = document.getElementById ("foro_mensajes")

botonenviar.addEventListener("click", function(evento) {
    evento.preventDefault()

    let elementonuevo_nombre = document.createElement("div")
    elementonuevo_nombre.textContent = nombre.value

    let elementonuevo_mensaje = document.createElement("div")
    elementonuevo_mensaje.textContent = mensaje.value

    elementonuevo_nombre.style.fontWeight = "bold"

    foro_mensajes.appendChild(elementonuevo_nombre)
    foro_mensajes.appendChild(elementonuevo_mensaje)

    
    nombre.value = ''
    mensaje.value = ''
});