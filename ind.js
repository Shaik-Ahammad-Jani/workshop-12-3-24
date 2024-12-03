const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correct: 0,
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct: 1,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
    {
      question: "Which year did World War II end?",
      options: ["1941", "1945", "1939", "1950"],
      correct: 1,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    if (currentQuestion >= quizData.length) {
      showResult();
      return;
    }
  
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
  
    optionsEl.innerHTML = "";
    currentQuiz.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsEl.appendChild(button);
    });
  }
  
  function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    loadQuestion();
  }
  
  function showResult() {
    questionEl.classList.add("hidden");
    optionsEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  }
  
  // Initialize quiz
  loadQuestion();
  