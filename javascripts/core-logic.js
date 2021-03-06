define(function (require) {
    var $ = require("jquery");
    var q = require("q");
    var getDeck = require("get-deck");
    var drawCard = require("draw-card");

    var cardCount = 52;
    
    return function () {
        // On page load, each player gets assigned a deck, and deck_id is attached to DOM
        getDeck();

        // On click #drawBtn, call drawCard module, which displays card from assigned deck_id
        $(document).on("click",'#drawBtn',function(data){
            $(this).text('Hit');
            $('#p1card-back').addClass("flip-card");
           
            drawCard.Player1()
            .then(function(){
                drawCard.Player2();
            })
            .done(function(){
                console.log("got it");
            });
           

            cardCount -= 1;
            $('#cardCount').html(cardCount);

        });

    }; // End of return function
});