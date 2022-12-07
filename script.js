const showQuestionBtn = document.querySelector('.add_question--button');
const closeAddQuestionBtn = document.querySelector('.close-addquestion');
const main = document.querySelector('.main');
const saveQuestionBtn = document.querySelector('.submitButton');
const anwserText = document.querySelector('.anwser--textarea');
const questionText = document.querySelector('.question--textarea');
const result = document.querySelector('.result');

const tablica = [];


function showAddQuestion() {
    main.style.display = "block";
}


function closeAddQuestion() {
    main.style.display = "none";
}

function displayQuestions() {
    let text = "";
        for (const a of tablica) {
            text +=
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
        const showHide = document.querySelectorAll('.toggle--item');
        showHide.forEach((button, index) => { button.addEventListener("click", () => {
            toggleButton(index);
        } ) })
    }




function toggleButton(buttonIndex) {
    const item = document.querySelectorAll('.item');
   item[buttonIndex].classList.toggle("show");
}



function pushCard() {
    if (anwserText.value === "" || questionText.value === "") {
        alert("Cannot Add Empty Values")
    } else {
        tablica.push({
            question: questionText.value.trim(),
            anwser: anwserText.value.trim(),
        })
        anwserText.value = "";
        questionText.value = ""; 
    }
    displayQuestions();
}


saveQuestionBtn.addEventListener("click", pushCard);
closeAddQuestionBtn.addEventListener("click", closeAddQuestion);
showQuestionBtn.addEventListener("click", showAddQuestion);