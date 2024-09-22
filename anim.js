// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "They say there is a war", time: 11 },
    { text: "Between the man and the woman", time: 15 },
    { text: "I've never felt like this before", time: 23 },
    { text: "My heart knew that I couldn't", time: 28 },
    { text: "And then you take me in", time: 34 },
    { text: "And everything in me begins", time: 37 },
    { text: "To feel like I belong", time: 40 },
    { text: "Like everybody needs a home", time: 42.5 },
    { text: "And when I take your hand", time: 47 },
    { text: "Like the world has never held a man", time: 50 },
    { text: "I know I cannot heal the hurt", time: 52.5 },
    { text: "But I will hold you here forever", time: 56 },
    { text: "If I can, if I can", time: 61 },
    { text: "And then I learned the truth", time: 66 },
    { text: "How everything good in life", time: 68 },
    { text: "Seems to lead back to you", time: 72},
    { text: "And every single time I run into your arms", time: 78},
    { text: "I feel like I exist for love", time: 84 },
    { text: "Like I exist for love", time: 91 },
    { text: "Only for love", time: 97 },
    { text: "I can't imagine how it is", time: 103 },
    { text: "To be forbidden from loving", time: 107.5 },
    { text: "'Cause when you walked into my life", time: 115 },
    { text: "I could feel my life begin", time: 121 },
    { text: "Like I was torn apart", time: 125 },
    { text: "The minute I was only born", time: 128.5 },
    { text: "And you're the other half", time: 132 },
    { text: "The only thing that makes me whole", time: 135 },
    { text: "I know it sounds like a lot", time: 138.2 },
    { text: "But you really need to know", time: 142 },
    { text: "We are leaning out for love", time: 144 },
    { text: "And we will lean for love forever", time: 148 },
    { text: "I know, I love you so", time: 153.5 },
    { text: "And then I learned the truth", time: 158 },
    { text: "How everything good in life", time: 161 },
    { text: "Seems to lead back to you", time: 163.5 },
    { text: "And every single time I run into your arms", time: 170 },
    { text: "I feel like I exist for love", time: 177 },
    { text: "Only for love", time: 179 },
    { text: "And when you say my name", time: 183 },
    { text: "Like white horses on the waves", time: 185 },
    { text: "I think it feels the same", time: 190 },
    { text: "As an ocean in my veins", time: 192 },
    { text: "And you'll be diving in", time: 194.5 },
    { text: "Like nothing is out of place", time: 201 },
    { text: "And we exist for love", time: 208 },
    { text: "Only for love", time: 215 },
    { text: "And I love you", time: 219 },
    { text: "I love you", time: 225 },
    { text: "I love you", time: 225 },
    { text: "And I love you", time: 225.3 },
    { text: "I love you", time: 229 },
    { text: "I love you", time: 230 },
  ];
  
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);