var questionsEl = document.getElementById("question") 
var questionsContainer = document.querySelector(".questions-container")
var answersEl = document.querySelector(".answersList")
var score = document.getElementById("highscore")
var count = 0
// array with questions 
// var quizQuestions = {
//     questionSet1: ["If this was a bomb how much time would be left on the clock?"],
//     questionSet2: ["stuff"],
//     questionSet3: ["stuff"],
//     questionSet4: ["stuff"],
// }
function highscoreCounter() {
    score.textContent = count
}
// var megabundle = [qPrompts, qPrompts1, qPrompts2, qPrompts3]

var qPrompts = {
    question: "How is an Array different than an object?",
    answers: ["Array is labeled by numbers [0, 1 ..]", "AnswerGoesHere", "AnswerGoesHere", "AnswerGoesHere"],
    correctAnswer: 0,
}
var qPrompts1 = {
    question: "In what way does the localstorage element store data?",
    answers: ["jSON string", "CSS", "HTML", "Javscript"],
    correctAnswer: 0,
}
var qPrompts2 = {
    question: "What does Preventing Default do?",
    answers: ["AnswerGoesHere", "AnswerGoesHere", "Stops the Page From Refreshing", "AnswerGoesHere"],
    correctAnswer: 2,
}
var qPrompts3 = {
    question: "What does a timer interval do",
    answers: ["AnswerGoesHere", "Allows for basic timing on a webpage", "AnswerGoesHere", "AnswerGoesHeres"],
    correctAnswer: 1,
}
// questionSet2 = {
//     question: "If i get this far im amazed",
//     answers: ["11", "1111", "42", "420"],
//     correctAnswer: "11"
// }

// console.log(qPrompts)
// console.log(qPrompts)

// for (let i = 0; i < megabundle.length; i++) {
//     var prompt = megabundle[i].question
//     console.log(megabundle)
// }


questionsEl.textContent = qPrompts.question 
function startQuiz() {
var answers = document.querySelectorAll(".answersList")
answers.forEach(function(answers, index) {
    answers.textContent = qPrompts.answers[index]
    answers.addEventListener("click", function(){
        if(score > 1)
            secondQuestion()
        else if(qPrompts.correctAnswer == index) {
            console.log("Well Done 1")
            count++
            highscoreCounter()
            secondQuestion()
        }else {
            console.log("Wrong Answer Bro")
            secondQuestion()
        }
    })
});    
}  
function secondQuestion() {
    questionsEl.textContent = qPrompts1.question 
    var answers = document.querySelectorAll(".answersList")
    answers.forEach(function(answers, index) {
        answers.textContent = qPrompts1.answers[index]
        answers.addEventListener("click", function(){
            if(score > 2 || startQuiz == true)
                thirdQuestion()
            else if(qPrompts1.correctAnswer == index) {
                console.log("Well Done wombo 2")
                count++
                highscoreCounter()
                thirdQuestion()
            }else {
                console.log("Wrong Answer Brochocho 2")
                thirdQuestion()
            }
        })
    });
}  
function thirdQuestion() {
    questionsEl.textContent = qPrompts2.question 
    var answers = document.querySelectorAll(".answersList")
    answers.forEach(function(answers, index) {
        answers.textContent = qPrompts2.answers[index]
        answers.addEventListener("click", function(){
            if(score > 3 || secondQuestion == true)
                fourthQuestion()
            else if(qPrompts2.correctAnswer == index) {
                console.log("Well Done 3")
                count++
                highscoreCounter()
                fourthQuestion()
            }else {
                console.log("Wrong Answer Brochocho 3")
                fourthQuestion()
            }
        })
    });
}  
function fourthQuestion() {
    questionsEl.textContent = qPrompts3.question 
    var answers = document.querySelectorAll(".answersList")
    answers.forEach(function(answers, index) {
        answers.textContent = qPrompts3.answers[index]
        answers.addEventListener("click", function(){
            if(score > 4 || thirdQuestion == true)
                ending()
            else if(qPrompts3.correctAnswer == index) {
                console.log("Well Done 4")
                count++
                highscoreCounter()
                ending()
            }else {
                console.log("Wrong Answer Brochocho 4")
                ending()
            }
        })
    });
}


function ending() {
    window.alert("Congrats")
    document.getElementById("main").style.display = "none";
    document.getElementById("final").style.display = "block"
    
    var reset = document.querySelector("#reset")
    reset.addEventListener("click", function(){
        document.getElementById("main").style.display = "block";
        document.getElementById("final").style.display = "none"
        window.location.reload()
    })


    var submit = document.querySelector("#submit")
    submit.addEventListener("click", function(event){
        event.preventDefault()
        console.log(creds)
        var creds = document.getElementById("textaera").value
        localStorage.setItem("creds", creds)
        console.log("I made it this far")
        displayScoreboard()  
    })
    function displayScoreboard() {
        var lastUser = document.querySelector("#lastUser")
        var creds = localStorage.getItem("creds")
        creds.textContent = lastUser
        console.log("is it making it this far?")    
    }
    //add a box to enter initals and show higscore
    // add a reset button
}

    
// function ending(){
//     // window.alert("You won!")
//     window.confirm("Enter your initals")
//     return
// }
// for (let x = 0; x < qPrompts.answers; x++)
//     answersEl.answers = document.querySelectorAll(".answersList").append(qPrompts[i].answers)
//     console.log(answersEl.textContent)
// qPrompts.forEach(answers => {
//     var node = document.createElement("li")
//     var textNode = document.createTextNode(qPrompts.answers)
//     node.appendChild(textNode)
//     document.querySelector(".answersList").appendChild(node)
// });

// answersEl = document.querySelector(".answersList").append(qPrompts.answers)


// qPrompts.forEach(answers => {
//     var node = document.createElement("li")
//     var textNode = document.createTextNode(qPrompts.answers)
//     node.appendChild(textNode)
//     document.querySelector(".answersList").appendChild(node)
// });

//array with answers
//for loop to loop thru answers

// for (let i = 0; i < quizAnswers.length; i++) {
//     const correctAnswer = quizAnswers[i];
//     correctAnswer = x
// }

// have a correct or incorrect statement pop up at bottom

//have color attached to the incorrect or correct satement

//timer for quiz
var secondsLeft = 21;
var timerEl = document.querySelector("#timer")
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " seconds left till Game Over.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    }, 1000);
}
// need to set floor of timer to stop it from going negative
function sendMessage() {
 timerEl.textContent = "Game Over Nerd";
}

function showQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    console.log("show quiz function ran")

    if(document.getElementById("button") == true)
        console.log("did it do the thing?")
    startQuiz()
}
    

//if answer is incorrect then subtract time
    // is else the timer reaches 0 game over

//local storage the initials and score

var startEl = document.querySelector("#start")
startEl.addEventListener ("click", function () {
    console.log("start button pushed")
    setTime()
    showQuiz()
    
})
