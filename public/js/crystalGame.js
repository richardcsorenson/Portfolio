var main = $("body");
    var wins = 0, losses = 0;
    //creating target number and pushing to html
    var targetNumber = 0;

    //getting values for buttons
    var numberOptions = [0, 0, 0, 0];
    //get 4 values for the 4 buttons
    function getNewNumbers(){
        targetNumber = Math.round(Math.random() * 100) + 19;
        $("#number-to-guess").text(targetNumber);
        for (i = 0; i < 4; i++){
            numberOptions[i] = (Math.ceil(Math.random() * 12));
        }
        assignNumbers();
    }


    //assign those numbers to the buttons
    function assignNumbers(){
        $(".btn-ruby").attr("data-value", numberOptions[0]);
        $(".btn-emerald").attr("data-value", numberOptions[1]);
        $(".btn-saphire").attr("data-value", numberOptions[2]);
        $(".btn-triforce").attr("data-value", numberOptions[3]);
    }
    function reset(){
        getNewNumbers();
        counter = 0;
        $(".running-total").text(counter);
        $(".ruby-value").text("");
        $(".emerald-value").text("");
        $(".saphire-value").text("");
        $(".triforce-value").text("");
        $(".running-total").text(counter);
    }

    function pushTotal(){
        $(".running-total").text(counter);
        if (counter > targetNumber){
            alert("You lose");
            getNewNumbers();
            losses++;
            $(".loser").text("Losses : " + losses);
            reset();
        }
        else if(counter === targetNumber){
            alert("You win");
            reset();           
            wins++;
            $(".winner").text("Wins : " + wins);
        }
    }
    var counter = 0;    
    getNewNumbers();
    //function for the 4 buttons
    $("#crystals").on("click", ".btn-ruby", function(){
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        $(".ruby-value").text(crystalValue);
        counter = counter + crystalValue;
        pushTotal();
    });
    $("#crystals").on("click", ".btn-emerald", function(){
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        $(".emerald-value").text(crystalValue);
        counter = counter + crystalValue;
        pushTotal();
    });
    $("#crystals").on("click", ".btn-saphire", function(){
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        $(".saphire-value").text(crystalValue);
        counter = counter + crystalValue;
        pushTotal();
    });
    $("#crystals").on("click", ".btn-triforce", function(){
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        $(".triforce-value").text(crystalValue);
        counter = counter + crystalValue;
        pushTotal();
    });