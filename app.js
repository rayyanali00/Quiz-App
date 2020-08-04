var questionsArray = [
    {
        question: "Who is the founder of Pakistan?",
        answer: "Quaid-e-Azam",
        options: [

            "Liaqat Ali Khan",
            "Allama Iqbal",
            "Quaid-e-Azam",
            "Imran Khan"

        ]
    },
    {
        question: "Who is the Prime Minister of Pakistan?",
        answer: "Imran Khan",
        options: [

            "Liaqat Ali Khan",
            "Imran Khan",
            "Nawaz Sharif",
            "Bilawal Bhutto",

        ]
    },
    {
        question: "RAM stands for?",
        answer: "Random Access Memory",
        options: [

            "Roll amount memory",
            "Random Access Memory",
            "Read Access Memory ",
            "None of the above",

        ]
    },
    {
        question: "Who won CWC 2019?",
        answer: "England",
        options: [
            "Australia",
            "India",
            "Pakistan",
            "England",

        ]
    },
    {
        question:"Are you undergraduate?",
        answer:"Yes",
        options:[
            "yes",
            "No"
        ]
    },
    {
        question:"There are 3 states of matter",
        answer:"True",
        options:[
            "True",
            "False"
        ]
    }
]



function showQuestion(e){
    // creating random question
    var rnd = Math.floor(Math.random()*questionsArray.length)
    var que = document.getElementById("question");
    que.innerHTML = questionsArray[rnd].question

    var opt = document.getElementsByClassName("options");
    console.log(opt.innerHTML= questionsArray[rnd].options)
    for (var i = 0; i < opt.length; i++) {
            opt[i].innerHTML = questionsArray[rnd].options[i]
            
        }
    var roll = questionsArray.splice(rnd, 1);
    console.log(roll)
}

// function showQuestion(e){
//     // creating random question
//     var rnd = Math.floor(Math.random()*questionsArray.length)
//     var que = document.getElementById("question");
//     que.innerHTML = questionsArray[rnd].question
//     var lis = document.getElementById("list")
//     // for(var i = 0; i<=questionsArray[rnd].options.length; i++){
//     questionsArray[rnd].options.forEach(function(a){
//         var crLi = document.createElement("li")
//         crLi.setAttribute("class","options")
//         crLi.innerHTML=a
//         lis.appendChild(crLi)
//     })
//     var roll = questionsArray.splice(rnd, 1);
//     console.log(roll)
// }


    

var questionCounter=0;
function nextQuestion(){
    // var next = document.getElementById("nextQue")
    questionCounter++
    quizScore(questionCounter)
    removeActiveClass()
    showQuestion(questionCounter)
}

function activeClass(){
    // e.classList.add("active")
    var list = document.querySelectorAll("li")
    for(var i = 0; i<list.length; i++){
        list[i].addEventListener("click",function(){
            removeActiveClass()
            this.classList.add("active")
        })
        
    }
}
activeClass()
function removeActiveClass(){
        var active = document.getElementsByClassName("active")
        for(var j = 0; j<active.length; j++){
                active[j].classList.remove("active")
        }
    }

    function quizScore(e){
        var active = document.getElementsByClassName("active")  
        for(var j = 0; j<active.length; j++){
            if(active[j].innerHTML==questionsArray[e-1].answer){
                var score=0;
                score+=10
                console.log(score)
            }
            // console.log(active[j].innerHTML+"=="+questionsArray[e-1].answer)
        }
    }
