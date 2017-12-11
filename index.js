'use strict';
// {
//   question: "what's my name?"
//   //can make array a bunch of strings. have a correct answer property and then an incorrect answers array. or you could have an answers array and another that has the index of which is the correct answer. what do you need to put in DOM (radio values) to reference back to your data? could make answers string the unique value. using index value of the array may be safer.
// }

//QUESTION 1 (line 8): Do we need to populate these with values? If so, what?
//QUESTION 2 (line 91 and line 101): How do we properly incorporate our HTML with our rendering functions?
const STORE = {
  //set currentQuestion to null or to 0. we rely on currentView function to generate what is next. As long as have currentView then we know what to generate. Once you set the next question function, you need to increment or set the value to zero. First layer we present is the intro layer. currentCorrect depends on how you'll structure questions array. it will likely need a boolean value or could be an array of the correct answers.
  currentQuestion: null,
  currentView: "intro",
  currentScore: 0,
  currentCorrect :
}

// what's stored as a part of the question?
//text is question asking the person. the number of the question is given by its position in the array. no reason for an array here. answer is an array of strings. if have separate thing for each that's correct, you just need a string and it's easier than having them be objects.
{text: 'string question'},
{answers: 'this, that, and the other'},

//how to represent several questions??
const QUESTIONS = [
{
  text: 'Question 1 itself',
  options: ['option 1', 'option 2', 'option 3'],
  answer: 'option 1'
},

{
  text: 'Question 2 itself',
  options: ['option 1', 'option 2', 'option 3'],
  answer: 'option 3'
},

{
  text: 'Question 3 itself',
  options: ['option 1', 'option 2', 'option 3'],
  answer: 'option 2'
},

// How to Represent A SINGLE Question:
{
  text: 'Question 4 itself',
  options: ['option 1', 'option 2', 'option 3'],
  answer: 'option 3'
}
]

/********************   DOM MANIPULATION FUNCTIONS   *******************/

//top level renders everything on page. The master function decides which of the sub functions to call. It looks at which of your views to render...maybe question page, maybe final results page, etc...

//the template is basically the JS rendering. Job of rendering is covered by the renderer and the generator. You can do them as one function or as 2, as you please.

//SUGGESTION: when more than 1-2 else if's is to use a switch statement.
function renderPage() {
  if (STORE.view === 'intro'){
    $('.intro').show();
    $('.quiz').hide();
    $('.results').hide();
    $('.answer-incorrect').hide();
    $('.answer-correct').hide();
  }
  else if (STORE.view === 'quiz'){
    $('.quiz').show();
    $('.intro').hide();
    $('.results').hide();
    $('.answer-incorrect').hide();
    $('.answer-correct').hide();
  }
  else if (STORE.view === 'results'){
    $('.results').show();
    $('.intro').hide();
    $('.quiz').hide();
    $('.answer-incorrect').hide();
    $('.answer-correct').hide();
  }
  else if (STORE.view === 'answer-incorrect'){
      $('.quiz').show();
      $('.answer-incorrect').show();
      $('.intro').hide();
      $('.results').hide();
      $('.answer-correct').hide();
  }
  else if (STORE.view === 'answer-correct'){
    $('.quiz').show();
    $('.answer-correct').show();
    $('.intro').hide();
    $('.results').hide();
    $('.answer-incorrect').hide();
  }
}
function renderQuestionText() {
  console.log('`renderQuestion` ran');
//what to put into renderQuestion to render 1 entire question. Display question here somehow. We do this from HTML.
  //insert that HTML into the DOM
  $('.js-answers').html(questionItemString);
  $('.js-answers').find('input').focus();
}

//second level render is to render the individual sections.

function renderAnswerList(question) {
  console.log('Generating the answer list');

}





/********************    EVENT-HANDLING FUNCTIONS    ********************/

function handleClickStart() {
  $('.js-click-start').on('submit', event => {
    event.preventDefault();
    //how do we render the first question page when we hit the start button? There's 2 separate parts to this. part 1 is how render function decides how to render first page? part 2 is how does start button do that to the STORE? How does renderer decide to render first question.

    //with whatever array you're looking at, the first one is simply the variable zero. It's the index into QUESTIONS, not store. currentQuestion means index into QUESTIONS array. the currentQuestion STORE value represents which question you're on.
    STORE.currentQuestion = 0;

    console.log('`handleClickStart` ran');

  });
}

function handleQuestionSubmit()  {}



// 1. User clicks Start Quiz button. Is taken to the first quiz question
// 2. The view attribute in the STORE is changed from "intro" to "question"
// 3. User selects from one of four options and clicks submit button
// 4. User is prompted saying wether they are correct or incorrect. Another button appears to go to next question
// 5.
