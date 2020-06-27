// assign elements that will be manipulated to variables
var startBtn = document.querySelector("#startButton");
var question = document.querySelector("#question");
var correctOrIncorrect = document.querySelector("#correctOrIncorrect");
var answerList = document.querySelector("#answerList");
var yourAnswerIs = document.querySelector("#yourAnswerIs");
var minutesRemaining = document.querySelector("#minutesRemaining");
var secondsRemaining = document.querySelector("#secondsRemaining");

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");






// Hides the question text, the answer list, and the determination of a correct answer text
question.style.visibility = "hidden";
yourAnswerIs.style.visibility = "hidden";
correctOrIncorrect.style.visibility = "hidden";
answerList.style.visibility = "hidden";

// GIVEN I am taking a code quiz
// WHEN I click the start button
startBtn.addEventListener("click", startQuiz);
// a function that will start the timer, show the first question, and show the possible answers to the question
function startQuiz() {
    // THEN a timer starts and I am presented with a question
    startBtn.style.display = "none";
    question.style.visibility = "visible";
    answerList.style.visibility = "visible";
    startTimer();
    askQuestion();
}

// create an array with javascript questions as the elements
// each of the questions has one correct answer and three incorrect answers associated with it

var questionList = [
    {
        question: 'Based on your knowledge, what is the answer to this question?',
        a: 'this is the correct answer to the question',
        b: 'Some kind of answer',
        c: 'another kind of answer',
        d: 'a completely different type of answer',
        correctAnswer: 'this is the correct answer to the question'
    },
    {
        question: 'what is the answer to this question?',
        a: 'this is a',
        b: 'this is b',
        c: 'this is c',
        d: 'this is d',
        correctAnswer: 'this is b'
    },
    {
        question: 'Last Question what is the answer to this question?',
        a: 'this is probably a',
        b: 'this might be b',
        c: 'this is without a doubt c',
        d: 'this is certainly d',
        correctAnswer: 'this is without a doubt c'
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

function checkAnswer(event) {
    console.log(event);
}



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
    // prompt user to enter initials to save score
    // if user enters initials then store score and initials
}

function viewHighScores() {
    // hide everything on page and display a list of all high scores from highest to lowest
}
