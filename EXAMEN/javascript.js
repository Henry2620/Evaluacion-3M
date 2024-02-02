let mariaAntonieta = { name: "Maria Antonieta" };
let luisXVI = { name: "Luis XVI" };

const questions = [
  {
    question: "¿Cuál era el apodo de Maria Antonieta?",
    options: ["La Reina del Trono", "La Reina del Pueblo", "La Reina de la Belleza", "La Reina de la Moda"],
    correct: 2
  },
  {
    question: "¿Cuál era el apodo de Luis XVI?",
    options: ["El Rey de la Revolución", "El Rey de la Paz", "El Rey de la Belleza", "El Rey de la Moda"],
    correct: 0
  },
  {
    question: "¿Cuál era el color favorito de Maria Antonieta?",
    options: ["Azul", "Rojo", "Verde", "Amarillo"],
    correct: 0
  },
  {
    question: "¿Cuál era el color favorito de Luis XVI?",
    options: ["Azul", "Rojo", "Verde", "Amarillo"],
    correct: 1
  }
];

let currentQuestion = 0;

function startGame() {
  const gameContainer = document.getElementById("game");
  const question = questions[currentQuestion].question;
  const options = questions[currentQuestion].options;
  gameContainer.innerHTML = `
      <div class="question">${question}</div>
      <div class="options">
          ${options.map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`).join("")}
      </div>
  `;
}

function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].correct) {
    alert("¡Respuesta correcta!");
    currentQuestion++;
    if (currentQuestion < questions.length) {
      startGame();
    } else {
      alert("¡Felicidades! Has completado el juego.");
    }
  } else {
    alert("¡Respuesta incorrecta! Eliminando a Maria Antonieta y Luis XVI.");
    
    delete mariaAntonieta;
    delete luisXVI;
    
    currentQuestion = 0;
    startGame();
  }
}

startGame();