// assign elements that will be manipulated to variables
var startBtn = document.querySelector("#startButton");
var question = document.querySelector("#question");
var correctOrIncorrect = document.querySelector("#correctOrIncorrect");
var answerList = document.querySelector("#answerList");
var yourAnswerIs = document.querySelector("#yourAnswerIs");
var minutesRemaining = document.querySelector("#minutesRemaining");
var secondsRemaining = document.querySelector("#secondsRemaining");
var highScoreList = document.querySelector("#highScoreList");
var scoreEntry = document.querySelector("#pleaseEnter");
var submitButton = document.querySelector("#submitScore");
var scoreInput = document.querySelector("#scoreInput");
var localStorageScores;


var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var highScore1 = document.querySelector("#highScore1");
var highScore2 = document.querySelector("#highScore2");
var highScore3 = document.querySelector("#highScore3");
var highScore4 = document.querySelector("#highScore4");
var highScore5 = document.querySelector("#highScore5");
var highScore6 = document.querySelector("#highScore6");

// Hides the question text, the answer list, and the determination of a correct answer text
question.style.visibility = "hidden";
yourAnswerIs.style.visibility = "hidden";
correctOrIncorrect.style.visibility = "hidden";
answerList.style.visibility = "hidden";
highScoreList.style.visibility = "hidden";
scoreEntry.style.visibility = "hidden";

// GIVEN I am taking a code quiz
// WHEN I click the start button
startBtn.addEventListener("click", startQuiz);
// a function that will start the timer, show the first question, and show the possible answers to the question
function startQuiz() {
    // THEN a timer starts and I am presented with a question
    startBtn.style.display = "none";
    question.style.visibility = "visible";
    answerList.style.visibility = "visible";
    highScoreList.style.visibility = "hidden";
    startTimer();
    askQuestion();
}

// create an array with javascript questions as the elements
// each of the questions has one correct answer and three incorrect answers associated with it

var questionList = [
    {
        question: 'What does it cost to upgrade the pyromancy flame from +9 to +10?',
        a: 'Everything.',
        b: '4,000 souls and a red titanite chunk',
        c: '12,000 souls',
        d: 'It depends on your new-game cycle',
        correctAnswer: '12,000 souls'
    },
    {
        question: 'What is the name of the boss in Blighttown',
        a: 'Chaos Witch Quelaag',
        b: 'Ba Sing Se',
        c: 'Gendraal the Mighty',
        d: 'Dark Vader',
        correctAnswer: 'Chaos Witch Quelaag'
    },
    {
        question: 'Which of these is a character in the game?',
        a: 'Andre of Astora',
        b: 'Andre 3000',
        c: 'Andre the Giant',
        d: 'Eric Andre',
        correctAnswer: 'Andre of Astora'
    },
    {
        question: 'Which of these Locations do you fight Great Grey Wolf Sif',
        a: 'Master of the Nets Garden',
        b: 'Madison Square Garden',
        c: 'L&B Supmoni Gardens',
        d: 'Darkroot Garden',
        correctAnswer: 'Darkroot Garden'
    },
    {
        question: 'Which of these items allow you to set your weapon on fire',
        a: 'Bomb arrows',
        b: 'Phoenix down',
        c: 'Charcoal pine resin',
        d: 'Fire flower',
        correctAnswer: 'Charcoal pine resin'
    }

];

//put the amount of total questions into a variable to compare
//to the amount of correct answers at the end of the quiz
var amountOfQuestions = questionList.length;
// create a variable to keep track of how many questions were answered correctly
//this will update each time the user answers a question
var amountAnsweredCorrectly = 0;
//keep track of the score as a percentage
// var score = (amountAnsweredCorrectly / amountOfQuestions) * 100;
var score = 0;
//keep track of what question the user is on
var questionTracker = 0;


answer1.addEventListener("click", function (data) {
    console.log(data);
    var usersAnswer = data.target.innerHTML
    if (usersAnswer === questionList[questionTracker].correctAnswer) {
        console.log("Correct!");
        // update score
        amountAnsweredCorrectly++;
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is correct"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Correct!";
    }
    else {
        console.log("incorrect!")
        // decrease time
        secondsElapsed = secondsElapsed + 10;
        // update score
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is incorrect"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Incorrect!";
    }
    questionTracker++;
    askQuestion();
});

answer2.addEventListener("click", function (data) {
    console.log(data);
    var usersAnswer = data.target.innerHTML
    if (usersAnswer === questionList[questionTracker].correctAnswer) {
        console.log("Correct!");
        // update score
        amountAnsweredCorrectly++;
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is correct"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Correct!";
    }
    else {
        console.log("incorrect!")
        // decrease time
        secondsElapsed = secondsElapsed + 10;
        // update score
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is incorrect"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Incorrect!";
    }
    questionTracker++;
    askQuestion();
});

answer3.addEventListener("click", function (data) {
    console.log(data);
    var usersAnswer = data.target.innerHTML
    if (usersAnswer === questionList[questionTracker].correctAnswer) {
        console.log("Correct!");
        // update score
        amountAnsweredCorrectly++;
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is correct"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Correct!";
    }
    else {
        console.log("incorrect!")
        // decrease time
        secondsElapsed = secondsElapsed + 10;
        // update score
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is incorrect"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Incorrect!";
    }
    questionTracker++;
    askQuestion();
});

answer4.addEventListener("click", function (data) {
    console.log(data);
    var usersAnswer = data.target.innerHTML
    if (usersAnswer === questionList[questionTracker].correctAnswer) {
        console.log("Correct!");
        // update score
        amountAnsweredCorrectly++;
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is correct"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Correct!";
    }
    else {
        console.log("incorrect!")
        // decrease time
        secondsElapsed = secondsElapsed + 10;
        // update score
        score = ((amountAnsweredCorrectly / amountOfQuestions) * 100).toFixed(2);
        // show "your answer is incorrect"
        yourAnswerIs.style.visibility = "visible";
        correctOrIncorrect.style.visibility = "visible";
        correctOrIncorrect.textContent = "Incorrect!";
    }
    questionTracker++;
    askQuestion();
});

function askQuestion() {
    question.textContent = questionList[questionTracker].question;
    answer1.textContent = questionList[questionTracker].a;
    answer2.textContent = questionList[questionTracker].b;
    answer3.textContent = questionList[questionTracker].c;
    answer4.textContent = questionList[questionTracker].d;
}

// WHEN I answer a question
// add event listeners for each possible answer
// keep track of how many answered correctly and how many answered incorrectly
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// This should be happening regardless of if the answer is correct or incorrect


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// run gameOver function that does the following:
// stops the clock
// calculates score
// displays score
// prompts the user for their initials
// saves the users initials and score

// if user clicks "View Highscores" run function that orders all stored scores in order from highest to lowest
// then display all stored scores in list from highest to lowest

// display a play again button which starts the code from the beginning if clicked

// sets the length of the quiz in minutes
var lengthOfQuiz = 2.5;
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// this function runs once a second
function runClockCb() {
    if ((Math.floor(((totalSeconds - secondsElapsed) / 60)) >= 0) && ((totalSeconds - secondsElapsed) % 60) >= 0 && questionTracker != questionList.length) {
        secondsElapsed++;
        console.log(secondsElapsed);
        // update the display
        minutesRemaining.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
        secondsRemaining.textContent = (totalSeconds - secondsElapsed) % 60;
    }
    // we have to stop it at 0
    else {
        console.log("quiz over");
        clearInterval(interval);
        // run game over function
        gameOver();
        
    }
}

function startTimer() {
    var minutes = lengthOfQuiz;
    // set time using totalSeconds
    totalSeconds = minutes * 60;
    // initialize seconds on the clock
    secondsElapsed = 0;
    // keep track of our interval
    interval = setInterval(runClockCb, 1000);
}

function gameOver() {
    console.log("You did it!");
    question.textContent = "Your Score: " + score + "%"
    answerList.style.visibility = "hidden";
    scoreEntry.style.visibility = "visible";
    // prompt user to enter initials to save score
    // makes the sit wait 50ms before executing "saveScore"
    // without this, the score wouldn't have enough time to display on screen
    // saveScore();
    // if user enters initials then store score and initials
}



submitButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(scoreInput.value);
    localStorageScores = [{
        initials: [scoreInput.value],
        score: [score]
    }];
    localStorage.setItem("data", JSON.stringify(localStorageScores));


});


function saveScore(){
    
    console.log("inside savescore function")
}

var viewHighScores = document.querySelector("#viewHighScores");
viewHighScores.addEventListener("click", function viewHighScores() {
    highScoreList.style.visibility = "visible";
});



