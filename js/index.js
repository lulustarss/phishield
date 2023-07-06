// INICIO REPETICIÓN DE TEXTO

var textToChange = document.getElementById("textToChange")

var newValues = ["PASÁ EL CURSOR", "LEE", "APRENDÉ", "COMPARTÍ"]

function changeText() {
    var currentIndex = 0;
    var interval = setInterval(function() {
      textToChange.textContent = newValues[currentIndex];
      currentIndex = (currentIndex + 1) % newValues.length;
    }, 2500);

    // recursividad para que se repita de forma infinita
    // se usa % para que el índice permanezca dentro de los límites del arreglo newValues (resto)
    // index = (0+1) % 4 = 1, index = (1+1) % 4 = 2, index = (2+1) % 4 = 3, index = (3+1) % 4 = 0 (asi recorremos index de forma infinita)
  }

changeText();

    // FIN REPETICIÓN DE TEXTO


// ¿Qué es el phishing? (cambios)

var highligth = document.getElementById("changeColor")

function highligthText() {
  highligth.style.backgroundColor = "#4341a3"
  highligth.style.color= "#ebe3e4"
}

function highligthOriginal() {
  highligth.style.backgroundColor = "white"
  highligth.style.color= "black"
}

