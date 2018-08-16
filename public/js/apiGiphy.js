window.onload = function(){
    
    var topic = ["Thor", "Iron Man", "Hulk", "Black Widow", "Hawkeye", "Captain America", "Ant Man", "Vision"];
    function renderButtons(){
        $(".heros").empty(); 
        for (var i = 0; i < topic.length; i++){
            var newBtn = $("<button>");
            newBtn.addClass("hero");
            newBtn.attr("data-person", topic[i]);
            newBtn.text(topic[i]);
            $(".heros").append(newBtn);
        }
    }
    
    renderButtons();
    
    $(".addInput").on("click", function(){
        var newHero;
        newHero = $(".newItem").val().trim();
        topic.push(newHero);
        renderButtons();           
    });
    
    function getAndDisplay(){
        var personOfInterest = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3OFsXLH3S46p3aai2LQacxe4uVPDxKIG&q=" + personOfInterest + "&limit=25&offset=0&rating=G&lang=en";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            for (var i = 0; i < 10; i++){
                var imageUrl = response.data[i].images.original_still.url;
                var newImage = $("<img>");
                newImage.attr("src", imageUrl);
                newImage.attr("data-still", response.data[i].images.original_still.url);
                newImage.attr("data-animate", response.data[i].images.original.url);
                newImage.attr("data-state", "still");
                newImage.addClass("sizing");
                newImage.attr("alt", "temp image");
                newP = $("<p>");
                var imgRating = response.data[i].rating;
                newP.text(imgRating);
                newP.prepend(newImage);
                $("#images").prepend(newP);
            }
        });
    }

    $(document).on("click", ".hero", getAndDisplay);
    $("#images").on("click", ".sizing", function(){
        var state = $(this).attr("data-state");
                if(state === "still"){
                    var source = $(this).attr("data-animate");
                    $(this).attr("src", source);
                    $(this).attr("data-state", "animate");
                }
                else if(state === "animate"){
                    var source = $(this).attr("data-still");
                    $(this).attr("src", source);
                    $(this).attr("data-state", "still");
                }
    });
        
   
}