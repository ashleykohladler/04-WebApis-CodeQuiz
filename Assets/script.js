var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerElement = document.querySelector(".timer-count");
var secondsLeft = 60;
var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerElement.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        alert('GameOver');
      }
  
    }, 1000);
  }

function startGame() {
    console.log('Start')
    setTime();

    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


  

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                   button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)

            })

    }

    function resetState() {
        clearStatusClass(document.body)
        nextButton.classList.add('hide')
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if (shuffledQuestions.length > currentQuestionIndex + 1)  {
        nextButton.classList.remove('hide')
        } else {
            startButton.innerText = "Restart"
            startButton.classList.remove('hide')
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }

    const questions = [{
        question: 'Commonly used data types DO NOT include:',
        answers: [
          { text: 'Strings', correct: false },
          { text: 'Booleans', correct: false },
          { text: 'Alerts', correct: true },
          { text: 'Numbers', correct: false }
        ]
    
    },
    {
        question: 'The consdition of an if/else statement is enclosed within ____.',
        answers: [
          { text: 'Quotes', correct: false },
          { text: 'Curly Brackets', correct: false },
          { text: 'Parenthesis', correct: true },
          { text: 'Square Brackets', correct: false }
        ]
    
    },
    {
        question: 'Array in javascript can be used to store?',
        answers: [
          { text: 'numbers and strings', correct: false },
          { text: 'other arrays', correct: false },
          { text: 'booleans', correct: true },
          { text: 'all of the above', correct: false }
        ]
    
    },
    {
        question: 'String values must be enclosed in _____ when being assigned to variables?',
        answers: [
          { text: 'commas', correct: false },
          { text: 'curly brackets', correct: false },
          { text: 'quotes', correct: false },
          { text: 'parenthesis', correct: true }
        ]
    
    },
    {
        question: 'A very useful tool used during development and debugging fro printing content to the dubegger is:',
        answers: [
          { text: 'javascript', correct: false },
          { text: 'terminal/bash', correct: false },
          { text: 'forloop', correct: false },
          { text: 'console log', correct: true }
        ]
    
    },
]
    