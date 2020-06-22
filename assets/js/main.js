// assign elements that will be manipulated to variables
var startBtn = document.querySelector("#startButton");
var question = document.querySelector("#question");
var correctOrIncorrect = document.querySelector("#correctOrIncorrect");
var answerList = document.querySelector("#answerList");
var yourAnswerIs = document.querySelector("#yourAnswerIs");
var secondsRemaining = document.querySelector("#timeRemaining");

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
function startQuiz(){
    // THEN a timer starts and I am presented with a question
    startBtn.style.display = "none";
    question.style.visibility = "visible";
    answerList.style.visibility = "visible";
    //startTimer();
    generateQuestion();
    generateAnswers();   
}

// create an array with javascript questions as the elements
// each of the questions has one correct answer and three incorrect answers associated with it

var question1 = {
    "question": 'Based on your knowledge, what is the answer to this question?',
    "correct" : 'this is the correct answer to the question',
    "incorrect1" : 'peepee',
    "incorrect2" : 'poopoo',
    "incorrect3" : 'neither pee nor poo'
};

function generateQuestion(){
    question.textContent = question1.question;
}
function generateAnswers(){
    answer1.textContent = question1.incorrect1;
    answer2.textContent = question1.incorrect2;
    answer3.textContent = question1.correct;
    answer4.textContent = question1.incorrect3;
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
