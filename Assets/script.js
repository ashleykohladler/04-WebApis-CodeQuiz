var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerElement = document.querySelector(".timer-count");
var secondsLeft = 60;
var shuffledQuestions, currentQuestionIndex
// var allDone
var submitScoreBtn = document.getElementById('submitScoreBtn');
var finalScore = document.getElementById('final-score');

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = 'Time:' + secondsLeft;
        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            // your score is: + seconds left
            // document.getElementById('final-score').textContent = 'Your final score is: ' + secondsLeft;
            // questionContainerElement.classList.add('hide')
            // submitScoreBtn.classList.remove('hide')
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
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
        document.getElementById('all-done').classList.remove('hide')
        finalScore.textContent = 'All Done!'
        document.getElementById('final-score').textContent = 'Your final score is: ' + secondsLeft;
        questionContainerElement.classList.add('hide')
        finalScore.textContent = secondsLeft
        

    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        timerElement.textContent = secondsLeft -= 3
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    setScore()
}
var initials = document.getElementById('initials')

function setScore() {
    // when the user clicks save 

   // get the initials
   // log to make sure

   // get the score
   // log to make sure

   // build the object

   // send to localStorage
    
    var storedScores = JSON.parse(localStorage.getItem('score')) || [];
    var scoredPlayers = {
        userInput: initials.value,
        score: secondsLeft
    };
    storedScores.push(scoredPlayers);
    localStorage.setItem('score', JSON.stringify(storedScores));

}




// function submitScoreBtn() {
//     var finalScore = JSON.parse(localStorage.getItem("scores")) || []
//     var name = document.getElementById('initials').nodeValue
//     var highScores =
// }




const questions = [{
        question: 'Commonly used data types DO NOT include:',
        answers: [{
                text: 'Strings',
                correct: false
            },
            {
                text: 'Booleans',
                correct: false
            },
            {
                text: 'Alerts',
                correct: true
            },
            {
                text: 'Numbers',
                correct: false
            }
        ]

    },
    {
        question: 'The condition of an if/else statement is enclosed within ____.',
        answers: [{
                text: 'Quotes',
                correct: false
            },
            {
                text: 'Curly Brackets',
                correct: false
            },
            {
                text: 'Parenthesis',
                correct: true
            },
            {
                text: 'Square Brackets',
                correct: false
            }
        ]

    },
    {
        question: 'Array in javascript can be used to store?',
        answers: [{
                text: 'numbers and strings',
                correct: false
            },
            {
                text: 'other arrays',
                correct: false
            },
            {
                text: 'booleans',
                correct: true
            },
            {
                text: 'all of the above',
                correct: false
            }
        ]

    },
    {
        question: 'String values must be enclosed in _____ when being assigned to variables?',
        answers: [{
                text: 'commas',
                correct: false
            },
            {
                text: 'curly brackets',
                correct: false
            },
            {
                text: 'quotes',
                correct: false
            },
            {
                text: 'parenthesis',
                correct: true
            }
        ]

    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [{
                text: 'javascript',
                correct: false
            },
            {
                text: 'terminal/bash',
                correct: false
            },
            {
                text: 'forloop',
                correct: false
            },
            {
                text: 'console log',
                correct: true
            }
        ]

    },
]