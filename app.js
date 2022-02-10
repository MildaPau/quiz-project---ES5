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
    progress.innerText = questionNumber + 1;
}

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
    h1.style.animationPlayState = "paused";
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

var quiz = document.getElementById("quiz");
// var h1 = document.getElementsByTagName("h1")[0];

setTimeout(function(){
        quiz.style.opacity = 0;
    }, 500);
setTimeout(function(){
        quiz.style.opacity = 0.1;
        h1.style.opacity = 0;
    }, 700);
setTimeout(function(){
        quiz.style.opacity = 0.3;
        h1.style.opacity = 0;
    }, 900);
setTimeout(function(){
        quiz.style.opacity = 0.5;
        h1.style.opacity = 1;
    }, 1100);
setTimeout(function(){
        quiz.style.opacity = 0.7;
    }, 1300);
setTimeout(function(){
        quiz.style.opacity = 0.9;
    },1500);
setTimeout(function(){
        quiz.style.opacity = 1;
    }, 2000);
