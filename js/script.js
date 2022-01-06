var timer = document.querySelector(".timer");
var introPage = document.querySelector(".intro-page");
var startButton = document.querySelector("#startButton");
var viewHighScores = document.querySelector(".view-highscores");
var timeLeft = 60;
var timerInterval;

// TODO:
// Have the intro page disappear upon pressing the start button
startButton.addEventListener("click", function () {
  introPage.classList.add("hidden");
});

// Have the first question and answer segment appear
// I want the timer to begin counting down
// I want to be able to click on a button and have the page return "Correct" or "Wrong!"
// 10 points subtracted from score upon getting a wrong answer
// Tells you your score, and you enter your initials
// I want the initials and the score to be logged
// Highscores page to show up with the scores
// Buttons to clear highscore and also restart quiz

const questions = [
  {
    question: "What's up doc?!",
    choices: [
      "Nothing at all",
      "A bit here, a bit there",
      "None of your business",
      "You have no idea",
    ],
    answer: "You have no idea",
  },
  {
    question: "How many fingers am I holding up?",
    choices: ["One", "Two", "Three", "Four"],
    answer: "Three",
  },
  {
    question: "How are you?",
    choices: ["Fine", "Good", "OK", "Who wants to know?"],
    answer: "Who wants to know?",
  },
];

// need more key value pairs inside objects
// global variable, setInterval
