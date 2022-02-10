"use strict"

var question = document.getElementById("question");
var button = document.querySelectorAll("button");
var progress = document.getElementById("progress");
var questionNumber = 0;
var resultNumber = 0;
var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
      text: "Kam naudingi obuoliai?",
      choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
      answer: "Virškinimui"
    },
    {
      text: "Kokias ligas padeda gydyti agrastai?",
      choices:  ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
      answer:  "Cukrini diabetą"
    },
    {
      text: "Kokio vitamino gausu apelsinuose?",
      choices:  ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
      answer: "Vitamino C"
    },
    {
      text: "Kokiais dalykais yra turtingi arbūzai?",
      choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
      answer: "Visi teisingi"
    }
]

// Užkrauna klausimą ir atsakymus
var populate = () => {
    if(questionNumber < questions.length) {
        question.innerText = questions[questionNumber].text;
        button.forEach((x, i) => {
            x.innerText = `${questions[questionNumber].choices[i]}`;
        });
    } else {
        // Užkrauna resultatus
        showResults();
    }
}

// Rodo progresą
var showProgress = () => {
    questionNumber++;
    // console.log(questionNumber);
    progress.innerText = questionNumber + 1;
}


// function check(guess){
//     if(guess.innerText === questions[questionNumber].answer){
//         return resultNumber++;
//     }
// }

// Skaičiuoja teisingus atsakymus
var check = guess => {
    if(guess.innerText === questions[questionNumber].answer) resultNumber++;
}

// Result page
var showResults = () => {
    var quiz = document.getElementById("quiz");
    var h1 = document.getElementsByTagName("h1")[0];
    quiz.innerHTML = `<h1>Result ${resultNumber} </h1>`;
    quiz.classList.add("result");
    h1.classList.add("paused");
    // h1.style.AnimationPlayState="paused !important";
}

// Priskiria funkciją mygtukams
button.forEach((x) => {
     x.addEventListener("click", function(){
         setTimeout(function(){
        // Rodo progresą
         showProgress();
         // Užkrauna klausimą ir atsakymus
           populate();
         }, 10);
         // Skaičiuoja teisingus atsakymus
         check(this);
     });
});

// Pirmas užkrovimas
populate();




// style
var quiz = document.getElementById("quiz");
var h1 = document.getElementsByTagName("h1")[0];
var buttons = document.getElementsByClassName("buttons");
var footer = document.getElementsByTagName("footer")[0];

var question = document.getElementById("question");
var button = document.querySelectorAll("button");
var progress = document.getElementById("progress");


setTimeout(function(){
        quiz.style.opacity = 0;
        h1.style.opacity = 0;
        question.style.opacity = 0;
        button[0].style.opacity = 0;
        footer.style.opacity = 0;
    }, 200);
setTimeout(function(){
        quiz.style.opacity = 0.1;
        h1.style.opacity = 1;
        question.style.opacity = 0;
        button[0].style.opacity = 0;
        button[1].style.opacity = 0;
        button[2].style.opacity = 0;
        button[3].style.opacity = 0;
        footer.style.opacity = 0;
    }, 400);
setTimeout(function(){
        quiz.style.opacity = 0.3;
        // h1.style.opacity = 1;
        question.style.opacity = 1;
        button[0].style.opacity = 0;
        button[1].style.opacity = 0;
        button[2].style.opacity = 0;
        button[3].style.opacity = 0;
        footer.style.opacity = 0;
    }, 600);
setTimeout(function(){
        quiz.style.opacity = 0.5;
        // h1.style.opacity = 1;
        button[0].style.opacity = 1;
        button[1].style.opacity = 0;
        button[2].style.opacity = 0;
        button[3].style.opacity = 0;
        footer.style.opacity = 0;
    }, 800);
setTimeout(function(){
        quiz.style.opacity = 0.7;
        button[1].style.opacity = 1;
        button[2].style.opacity = 0;
        button[3].style.opacity = 0;
        footer.style.opacity = 0;
    }, 1000);
setTimeout(function(){
        quiz.style.opacity = 0.9;
        button[2].style.opacity = 1;
        button[3].style.opacity = 0;
        footer.style.opacity = 0;
    },1200);
setTimeout(function(){
    button[3].style.opacity = 1;
    footer.style.opacity = 0;
        quiz.style.opacity = 1;
    }, 1400);
setTimeout(function(){
    footer.style.opacity = 1;
    }, 1600);


