$(document).ready(function () {

    $("html").css("visibility", "visible");

    $("#quote-btn").click(function () {
        getQuote("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
    });
    
    //Either click info button or close button to close popup
    $("#info").click(function () {
        $("#popup").fadeToggle();
    });

    $("#close-btn").click(function () {
        $("#popup").fadeToggle();
    });


    $("form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        getQuote("https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=" + name);
    });


    function getQuote(url) {
        $.getJSON(url, function (json, status) {
            if (status !== "success") {
                console.log("API error: " + status);
            } else {
                $("#quote").fadeOut(1, function () {   //Have to set transparency to 0 with fadeOut before calling fadeIn
                    $("#quote").text("\"" + json.message + "\"").fadeIn(600);
                });
            }
        });
    }

});
