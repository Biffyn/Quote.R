$(document).ready(function() {
    // retrieve a quote
    function requestQuote() {
        // request quote
        $.ajax({
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
            headers: {
                "X-Mashape-Key": "9NrMW3A7TOmsheYkGNEnHoVHm8IOp1NzIfrjsnbAowyQUTXAvW",
                method: "POST",
                contentType: "application/x-www-form-urlencoded",
                dataType: "json"
            },
            // parse and save requested response to variables and pass to frontend
            success: function(response) {
                var res = JSON.parse(response);
                quote = res.quote;
                author = res.author;
                $(".quote-text").html(quote);
                $(".author").html("– " + author);
            }
        });
    }
    // request quote on page load
    requestQuote();
    // request new quote when New Quote button is click
    $("#quote-btn").on("click", function(){
        requestQuote();
    });
});
