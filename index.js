'use strict';

const STORE = {
    currentQuestion: null,
    currentView: 'intro',
    currentScore: 0,
    currentCorrect: 0
};

const QUESTIONS = [
    {
        qNum: '1 of 5',
        text: 'What do you get when you mix salt and water?',
        options: ['Lemonade', 'Taco surprise', 'Salt water', 'Glue'],
        correctAnswerIndex: 'Salt water'
    },
    {
        qNum: '2 of 5',
        text: 'How are spiders made?',
        options: ['Spider eggs', 'Mixing ants and caterpillars', 'Stepping on M&Ms', 'Asking nicely'],
        correctAnswerIndex: 'Spider eggs'
    },
    {
        qNum: '3 of 5',      
        text: 'What is my middle name?',
        options: ['Alexander', 'Lewis', 'No clue', 'Richard'],
        correctAnswerIndex: 'No clue'
    },
    {
        qNum: '4 of 5',
        text: 'What happens during a solar eclipse?',
        options: ['Water vapor from the ocean extinguishes the sun', 'The moon blocks our view of the sun', 'There is no such thing as a solar eclipse', 'The moon gets jealous and does something about it'],
        correctAnswerIndex: 'The moon blocks our view of the sun'
    },
    {
        qNum: '5 of 5',
        text: 'Where do fish live?',
        options: ['The sky', 'In water', 'In volcanoes', 'In a tree',],
        correctAnswerIndex: 'In water'
    }
];
//Render function:
const render = function() {
  
};

function renderPage() {
    if (STORE.currentView === 'intro'){
        $('.intro').show();
        $('.quiz').hide();
        $('.results').hide();
        $('.answer-incorrect').hide();
        $('.answer-correct').hide();
    }
    else if (STORE.currentView === 'quiz'){
        $('.quiz').show();
        $('.intro').hide();
        $('.results').hide();
        $('.answer-incorrect').hide();
        $('.answer-correct').hide();
        renderQuestionText();
    }
    else if (STORE.currentView === 'results'){
        $('.results').show();
        $('.intro').hide();
        $('.quiz').hide();
        $('.answer-incorrect').hide();
        $('.answer-correct').hide();
    }
    else if (STORE.currentView === 'answer-incorrect'){
        $('.quiz').show();
        $('.answer-incorrect').show();
        $('.intro').hide();
        $('.results').hide();
        $('.answer-correct').hide();
    }
    else if (STORE.currentView === 'answer-correct'){
        $('.quiz').show();
        $('.answer-correct').show();
        $('.intro').hide();
        $('.results').hide();
        $('.answer-incorrect').hide();
        renderAnswerCorrect();
    }
}

function renderIntro() {
    console.log('`renderIntro` ran');
    $('.intro').html(`
  <div class="intro">
    <h1>Quiz App - Introduction Page</h1>
        <p>Click on the button to begin.</p>
        <p>Answers are required for all questions.</p>
        <button name="start" class="js-click-start">Start</button>
  </div>`);
}

function renderQuestionText() {
    console.log('`renderQuestion` ran');
    $('.quiz').html(`
  <form id="js-quiz-app-form">
  <h2>"${STORE.currentQuestion} of 5"</h2>
  <div class="js-answers">
    <input type="radio" id="choice1" name="answer" value="0"></input>
    <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[0]}</label><br>
    <input type="radio" id="choice2" name="answer" value="1"></input>
    <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[1]}</label><br>
    <input type="radio" id="choice3" name="answer" value="2"></input>
    <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[2]}</label><br>
    <input type="radio" id="choice4" name="answer" value="3"></input>
    <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[3]}</label>
  </div>
  <input type="submit" name="Submit" value="Submit"></input>
 </form>
 `);
}

function renderAnswerCorrect() {
    console.log('`renderAnswerCorrect` ran');
    $('.answer-correct').html(`
    <h3>That's correct!</h3>
    <button type="submit" class="js-click-next">Next question</button>
    <p class="num-correct">1/5 correct</p>
 `);
}

// function renderQuestionCorrect() {
//   console.log('`renderQuestionCorrect` ran');

// function renderQuestionIncorrect() {
//     console.log('`renderQuestionIncorrect` ran');

// $('.js-answers').find('input').focus();

// $('.js-answers').html(questionItemString);
//second level render is to render the individual sections.

function renderAnswerList(question) {
    console.log('Generating the answer list');
}

//waits for user to click start button
function handleClickStart() {
    $('.intro').on('click', '.js-click-start', event => {
        event.preventDefault();
        STORE.currentQuestion = 0;
        STORE.currentView = 'quiz';
        console.log('`handleClickStart` ran');
        renderPage();
    });
}
//this looks for user selection via event listener
function handleQuestionSubmit() {
    $('.quiz').on('submit', '#js-quiz-app-form', event => {
        event.preventDefault();
        const userAnswer = $('input[name=answer]:checked').val();
        console.log(userAnswer);
        //i intend to determine whether user answer is correct or not
        console.log('`handleQuestionSubmit` ran');
        renderPage();
    });
}
//user clicks "next" button after getting feedback, triggers next question
//Current issue 1: Can't get function to run. Something wrong with event listener?
//Current issue 2: Need to figure out how to increment the STORE.currentQuestion.
function handleNextQuestion() {
    $('.answer-correct').on('submit', '.js-click-next', event => {
        event.preventDefault();
        STORE.currentQuestion = ++STORE.currentQuestion;
        STORE.currentView = 'quiz';
        console.log(STORE.currentQuestion);
        console.log('`handleNextQuestion` ran');
        renderPage();    

    });
}

//do this after page first loads.
$(function() {
    renderIntro();
    handleClickStart();
    handleQuestionSubmit();
    handleNextQuestion();

});
//renderQuestionText();


// 1. User clicks S tart Quiz button. Is taken to the first quiz question
// 2. The view attribute in the STORE is changed from "intro" to "question"
// 3. User selects from one of four options and clicks submit button
// 4. User is prompted saying wether they are correct or incorrect. Another button appears to go to next question
// 5
