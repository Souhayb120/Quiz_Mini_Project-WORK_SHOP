const questions = [
    {
        question:'What is the capital of Japan ?',
        possibleAnswers:['Kyoto','Osaka','Tokyo','Hiroshima'],
        correctAnswer:'Tokyo'
    },
    {
        question:'What is the chemical element with the symbol Fe ?',
        possibleAnswers:['Fermium','Francium','Iron','Fluorine'],
        correctAnswer:'Iron'
    },
    {
        question:'Which planet in our solar system is known as the "Red Planet"?',
        possibleAnswers:['Mercury','Mars','Venus','Jupiter'],
        correctAnswer:'Mars'
    },
    {
        question:'How many bones are in the average adult human body ?',
        possibleAnswers:['256','156','206','306'],
        correctAnswer:'206'
    },
    {
        question:'What famous art movement did Pablo Picasso co-create?',
        possibleAnswers:['Renaissance','Cubism','Impressionism','Surrealism'],
        correctAnswer:'Cubism'
    },
    {
        question:'What is the longest river in the world?',
        possibleAnswers:['Nile River','Yangtze River','Mississippi River','Amazon River'],
        correctAnswer:'Nile River'
    },
    {
        question:'In what year did the Titanic sink?',
        possibleAnswers:['1898','1923','1912','1905'],
        correctAnswer:'1912'
    },
    {
        question: 'Which planet in our solar system is known for its prominent rings?',
        possibleAnswers: ['Mars','Jupiter','Saturn','Neptune'],
        correctAnswer: 'Saturn'
    },
    {
        question: 'Who wrote the famous novel "1984"?',
        possibleAnswers: ['George Orwell','Aldous Huxley','Ernest Hemingway','J.K. Rowling'],
        correctAnswer: 'George Orwell'
    },
    {
        question: 'What is the largest ocean on Earth?',
        possibleAnswers: ['Atlantic Ocean','Indian Ocean','Arctic Ocean','Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
    }
];

let currentQuestionIndex =0;
let score =0;

const questionText = document.getElementById("question");
const questionOptions = document.querySelectorAll(".option");
const currentNumber = document.getElementById("current");

const scoretext = document.querySelector(".scores");
const totalnumber= document.getElementById("total");

totalnumber.textContent = questions.length;

// to show question
function showQuestion(){
    const ques = questions[currentQuestionIndex];

    questionText.textContent =ques.question;
    currentNumber.textContent =currentQuestionIndex + 1;
    
    for(let i=0; i<questionOptions.length;i++){
        const btn = questionOptions[i];
        btn.textContent= ques.possibleAnswers[i];
        btn.classList.remove("correct","wrong");
        btn.disabled =false;
       // btn.onclick=()=>checkAnswer(btn, ques.correctAnswer);
       btn.onclick = function(){
        checkAnswer(btn, ques.correctAnswer);
       }
    }
}

// function check Answer
function checkAnswer(btnSelected ,correctAnswer){
    questionOptions.forEach(function(btn)
        {btn.disabled =true});

    if(btnSelected.textContent ===correctAnswer){
        btnSelected.classList.add("correct");
        score++;
        scoretext.textContent ="Score: "+ score +"/"+questions.length;
    }else{
        btnSelected.classList.add("wrong");

        questionOptions.forEach(function(btn){
            if(btn.textContent === correctAnswer){
                btn.classList.add("correct");
            }
        });
    }


    setTimeout(function(){
    currentQuestionIndex++;
    if(currentQuestionIndex >= questions.length){
        localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", questions.length);

    window.location.href="final.html";
    return;
    }
    showQuestion();
},1000);

}

showQuestion();

