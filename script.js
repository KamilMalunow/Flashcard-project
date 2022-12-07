const showQuestionBtn = document.querySelector('.add_question--button');
const closeAddQuestionBtn = document.querySelector('.close-addquestion');
const main = document.querySelector('.main');
const saveQuestionBtn = document.querySelector('.submitButton');
const anwserText = document.querySelector('.anwser--textarea');
const questionText = document.querySelector('.question--textarea');
const result = document.querySelector('.result');

const tablica = [{
    question: "pytanie",
    anwser: "odpowiedz",
}];
let text;

function showAddQuestion() {
    main.style.display = "block";
}


function closeAddQuestion() {
    main.style.display = "none";
}




closeAddQuestionBtn.addEventListener("click", closeAddQuestion);
showQuestionBtn.addEventListener("click", showAddQuestion);