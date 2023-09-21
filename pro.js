const quizData = [{
    question: "What is the Capital of Bangladesh?",
    a: "Dhaka",
    b: "Khulna",
    c: "Chittagong",
    d: "Sylhet",
    correct: "a",
},
{
    question: "What is the country calling code for Bangladesh?",
    a: "+880",
    b: "+49",
    c: "+890",
    d: "+971",
    correct: "a",
},
{
    question: "How many total Districts are there in Bangladesh?",
    a: "61",
    b: "64",
    c: "7",
    d: "none of the above",
    correct: "b",
},
{
    question: " What is the currency of Bangladesh?",
    a: "Rupee",
    b: "Taka",
    c: "Dollar",
    d: "Dirham",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hey! you've scored ${correct} out of ${total} </h3>
    </div>
`
}
loadQuestion(index);