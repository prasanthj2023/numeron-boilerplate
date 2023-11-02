// Iteration 2: Generate 2 random number and display it on the screen

var num1 = Math.round(Math.random()*100);
var num2 = Math.round(Math.random()*100);

var num1div = document.getElementById("number1")
num1div.innerHTML = num1;
var num2div = document.getElementById("number2")
num2div.innerHTML = num2;

// Iteration 3: Make the options button functional

var greaterButton = document.getElementById("greater-than");
var lesserButton = document.getElementById("lesser-than");
var equalButton = document.getElementById("equal-to");

var totalscore = 0;
greaterButton.onclick = () =>{
    if (num1 > num2){
        totalscore++;
        resetTimer(timerID)
    }else{
        window.location.href = "./gameover.html"
    }

    num1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
}

equalButton.onclick = () =>{
    if (num1 == num2){
        totalscore++;
        resetTimer(timerID)
    }else{
        window.location.href = "./gameover.html"
    }

    num1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
}

lesserButton.onclick = () =>{
    if (num1 < num2){
        totalscore++;
        resetTimer(timerID)
    }else{
        window.location.href = "./gameover.html"
    }

    num1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
}
// Iteration 4: Build a timer for the game
var presentTime = document.getElementById('timer');
var time = 5;
var timerID;

function startTimer(){
    time = 5;
    presentTime.innerHTML = time;
    timerID=setInterval(()=>{
        time--;
        if(time<=0){
            window.location.href = "./gameover.html";
        }
        presentTime.innerHTML= time;
    }, 1000);
    localStorage.setItem("score", JSON.stringify(totalscore));
}

function resetTimer(timerID){
    console.log(timerID)
    clearInterval(timerID)
    startTimer();
}

startTimer();