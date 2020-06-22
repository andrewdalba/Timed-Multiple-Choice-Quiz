var startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", startQuiz);

// assign elements that will be manipulated to variables
var question = document.querySelector("#question");
var correctOrIncorrect = document.querySelector("#correctOrIncorrect");
var answerList = document.querySelector("#answerList");
var yourAnswerIs = document.querySelector("#yourAnswerIs");
var secondsRemaining = document.querySelector("#timeRemaining");

// Hides the question text, the answer list, and the determination of a correct answer text
question.style.visibility = "hidden";
yourAnswerIs.style.visibility = "hidden";
correctOrIncorrect.style.visibility = "hidden";
answerList.style.visibility = "hidden";


// a function that will start the timer, show the first question, and show the possible answers to the question
function startQuiz(){
    startBtn.style.display = "none";
    question.style.visibility = "visible";
    answerList.style.visibility = "visible";
    startTimer();
    generateQuestion();
    generateAnswers();
}
