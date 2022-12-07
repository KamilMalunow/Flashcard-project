const showQuestionBtn = document.querySelector('.add_question--button');
const closeAddQuestionBtn = document.querySelector('.close-addquestion');
const main = document.querySelector('.main');
const saveQuestionBtn = document.querySelector('.submitButton');
const anwserText = document.querySelector('.anwser--textarea');
const questionText = document.querySelector('.question--textarea');
const result = document.querySelector('.result');

const tablica = [{
    question: "Pytanie",
    anwser: "Odpowiedz",
}];
let text;

function showAddQuestion() {
    main.style.display = "block";
}


function closeAddQuestion() {
    main.style.display = "none";
}

function displayQuestions() {

    if (anwserText.value === "" || questionText.value === "") {
        alert("Cannot Add Empty Values");
    } else {
        for (const a of tablica) {
            text =
                `
        <div class="card">
            <p>${a.question}</p>
            <button class="toggle--item">Show/Hide Anwser</button>
            <p class="item">${a.anwser}</p>
            <div class="card--buttons">
                <button class="card--edit">Edit</button>
                <button class="card--delete">Delete</button>
            </div> 
        </div>
        `
        }
        result.innerHTML = text;
        const showHide = document.querySelector('.toggle--item');
        showHide.addEventListener("click", toggleButton)
    }
}



function toggleButton(){
    const item = document.querySelector('.item');
    item.classList.toggle("show")
}






saveQuestionBtn.addEventListener("click", displayQuestions);
closeAddQuestionBtn.addEventListener("click", closeAddQuestion);
showQuestionBtn.addEventListener("click", showAddQuestion);