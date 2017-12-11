'use strict';
// {
//   question: "what's my name?"
//   //can make array a bunch of strings. have a correct answer property and then an incorrect answers array. or you could have an answers array and another that has the index of which is the correct answer. what do you need to put in DOM (radio values) to reference back to your data? could make answers string the unique value. using index value of the array may be safer.
// }


const STORE = {
    currentQuestion: ,
    currentView: ,
    currentScore: ,
    currentCorrect:
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

function renderQuestionList() {

}





/********************    EVENT-HANDLING FUNCTIONS    ********************/

function handleClickStart() {
  $('.js-click-start').on('submit', event => {
    event.preventDefault();
    console.log('`handleClickStart` ran');
    
  });
}
