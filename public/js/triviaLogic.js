//
var q1 = false, q2 = false, q3 = false, q4 = false, q5 = false;
var score = 0;
var timer = true;
var countdown = 60;
var IntervalID = setInterval(counter, 1000);
$(".question").on("click", ".correct", function(){
    if (q1 === false){
        q1 = true;
        score++;
    }
    else{
        alert("You already answered this question");
    }
}).on("click", ".wrong", function(){
    q1 = true;
});
$(".question2").on("click", ".correct", function(){
    if (q2 === false){
        q2 = true;
        score++;
    }
    else{
        alert("You already answered this question");
    }
}).on("click", ".wrong", function(){
    q2 = true
});
$(".question3").on("click", ".correct", function(){
    if (q3 === false){
        q3 = true;
        score++;
    }
    else{
        alert("You already answered this question");
    }
}).on("click", ".wrong", function(){
    q3 = true;
});
$(".question4").on("click", ".correct", function(){
    if (q4 === false){
        q4 = true;
        score++;
    }
    else{
        alert("You already answered this question");
    }
}).on("click", ".wrong", function(){
    q4 = true;
});
$(".question5").on("click", ".correct", function(){
    if (q5 === false){
        q5 = true;
        score++;
    }
    else{
        alert("You already answered this question");
    }
}).on("click", ".wrong", function(){
    q5 = true;
});

function counter(){
    countdown--;
    $("#timeLeft").text(countdown);
    if(countdown === 0){
        endgame();
    }
    if(q1 === true && q2 === true && q3 === true && q4 === true && q5 === true){
        endgame();
    }
}

function endgame(){
    alert("You got " + score + " out of 5 correct");
    clearInterval(IntervalID);
}