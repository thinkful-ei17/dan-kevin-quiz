'use strict';

// {
//   question: "what's my name?"
//   //can make array a bunch of strings. have a correct answer property and then an incorrect answers array. or you could have an answers array and another that has the index of which is the correct answer. what do you need to put in DOM (radio values) to reference back to your data? could make answers string the unique value. using index value of the array may be safer.
// }

//QUESTION 1 (line 8): Do we need to populate these with values? If so, what?
//QUESTION 2 (line 91 and line 101): How do we properly incorporate our HTML with our rendering functions?
const STORE = {
  currentQuestion: null,
  currentView: 'intro',
  currentScore: 0, 
  currentCorrect: 0
};

// what's stored as a part of the question?
//text is question asking the person. the number of the question is given by its position in the array. no reason for an array here. answer is an array of strings. if have separate thing for each that's correct, you just need a string and it's easier than having them be objects.


const QUESTIONS = [
  {
    text: 'What do you get when you mix salt and water?',
    options: ['Lemonade', 'Taco surprise', 'Salt water', 'Glue'],
    correctAnswerIndex: 2
  },

  {
    text: 'How are spiders made?',
    options: ['Spider eggs', 'Mixing ants and caterpillars', 'Stepping on M&Ms', 'Asking nicely'],
    correctAnswerIndex: 0
  },

  {
    text: 'What is my middle name?',
    options: ['Alexander', 'Lewis', 'No clue', 'Richard'],
    correctAnswerIndex: 2
  },

  {
    text: 'What happens during a solar eclipse?',
    options: ['Water vapor from the ocean extinguishes the sun', 'The moon blocks our view of the sun', 'There is no such thing as a solar eclipse', 'The moon gets jealous and does something about it'],
    correctAnswerIndex: 3
  },

  {
    text: 'Where do fish live?',
    options: ['The sky', 'In water', 'In volcanoes', 'In a tree',],
    correctAnswerIndex: 1
  }
];

/********************   DOM MANIPULATION FUNCTIONS   *******************/

//top level renders everything on page. The master function decides which of the sub functions to call. It looks at which of your views to render...maybe question page, maybe final results page, etc...

//the template is basically the JS rendering. Job of rendering is covered by the renderer and the generator. You can do them as one function or as 2, as you please.
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
  }
}
//what to put into renderQuestion to render 1 entire question. Display question here somehow. We do this from HTML.
//insert that HTML into the DOM

//renders the intro page by introducing HTML
function renderIntro() {
  console.log('`renderIntro` ran');
  $('.intro').html(` 
  <div class="intro">
    <h1>Quiz App - Introduction Page</h1>
        <p>Click on the button to begin.</p>
        <p>Answers are required for all questions.</p>
        <button name="start" class="js-click-start">Start</input>
  </div>`);  
}
  
function renderQuestionText() {
  console.log('`renderQuestion` ran');
  $('.quiz').html(`
  <form id="js-quiz-app-form">
  <h2>"${STORE.currentQuestion} of 5"</h2>
  <div class="js-answers">
    <input type="radio" name="answer" value="${QUESTIONS.options}"></input><br>
    <input type="radio" name="answer" value="${QUESTIONS.options}"></input><br>
    <input type="radio" name="answer" value="${QUESTIONS.options}"></input><br>
    <input type="radio" name="answer" value="${QUESTIONS.options}"></input>
  </div>
  <input type="submit" name="Submit" value="Submit"></input>
 </form>
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

/********************    EVENT-HANDLING FUNCTIONS    ********************/

function handleClickStart() {
  $('.js-click-start').on('submit', event => {
    event.preventDefault();
    renderIntro();




    //how do we render the first question page when we hit the start button? There's 2 separate parts to this. part 1 is how render function decides how to render first page? part 2 is how does start button do that to the STORE? How does renderer decide to render first question.

    //with whatever array you're looking at, the first one is simply the variable zero. It's the index into QUESTIONS, not store. currentQuestion means index into QUESTIONS array. the currentQuestion STORE value represents which question you're on.
    STORE.currentQuestion = 0;

    console.log('`handleClickStart` ran');

  });
}

function handleQuestionSubmit()  {}
// renderIntro();
renderQuestionText();


// 1. User clicks S tart Quiz button. Is taken to the first quiz question
// 2. The view attribute in the STORE is changed from "intro" to "question"
// 3. User selects from one of four options and clicks submit button
// 4. User is prompted saying wether they are correct or incorrect. Another button appears to go to next question
// 5