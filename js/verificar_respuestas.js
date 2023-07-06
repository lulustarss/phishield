function verificarRespuestas() {
  var respuestasCorrectas = {
    "pregunta1": "d",
    "pregunta2": "b",
    "pregunta3a": "falso",
    "pregunta3b": "verdadero",
    "pregunta4": "c"
  };
  
  var respuestasUsuario = obtenerRespuestasUsuario();
  var aciertos = contarAciertos(respuestasCorrectas, respuestasUsuario);
  
  var divrespuestas = document.getElementById("respuestas_correctas")

  if (aciertos == 4) {
    var textorespuestas = document.createTextNode("Número de aciertos: " + aciertos + ". ¡Felicidades!")
  } else {
    var textorespuestas = document.createTextNode("Número de aciertos: " + aciertos + ".")
  }
  
  divrespuestas.appendChild (textorespuestas)
}

function obtenerRespuestasUsuario() {
  var respuestasUsuario = {};
  
  var opcionesPregunta1 = document.getElementsByName("pregunta1");
  respuestasUsuario["pregunta1"] = obtenerRespuestaSeleccionada(opcionesPregunta1);
  
  var opcionesPregunta2 = document.getElementsByName("pregunta2");
  respuestasUsuario["pregunta2"] = obtenerRespuestaSeleccionada(opcionesPregunta2);
  
  var opcionesPregunta3a = document.getElementsByName("pregunta3a");
  respuestasUsuario["pregunta3a"] = obtenerRespuestaSeleccionada(opcionesPregunta3a);
  
  var opcionesPregunta3b = document.getElementsByName("pregunta3b");
  respuestasUsuario["pregunta3b"] = obtenerRespuestaSeleccionada(opcionesPregunta3b);
  
  var opcionesPregunta4 = document.getElementsByName("pregunta4");
  respuestasUsuario["pregunta4"] = obtenerRespuestaSeleccionada(opcionesPregunta4);
  
  return respuestasUsuario;
}

function obtenerRespuestaSeleccionada(opciones) {
  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      return opciones[i].value;
    }
  }
  return null;
}

function contarAciertos(respuestasCorrectas, respuestasUsuario) {
  var aciertos = 0;
  
  for (var pregunta in respuestasCorrectas) {
    if (respuestasCorrectas.hasOwnProperty(pregunta)) {
      if (respuestasCorrectas[pregunta] === respuestasUsuario[pregunta]) {
        aciertos++;
      }
    }
  }
  
  return aciertos;
}

verificarRespuestas();