/******************************
  Quote.R - a random quote machine
  - James Richards
******************************/
$(document).ready(function() {
    function requestQuote() {
        /*
        * requests a new quote object from andruxnet-random-famous-quotes API via ajax
        * On success parses and saves request to variables and
        * renders to the frontend
        */
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
                // when passed the quote, faded it in
                var a = $.Deferred();
                var b = $.Deferred();
                $(".quote-text").fadeOut(500, function() {          // display quote
                    $(this).text(quote).fadeIn(500, function() {
                        a.resolve();
                    });
                });
                $(".author").fadeOut(500, function() {              // display quote author
                    $(this).text("– " + author).fadeIn(500, function() {
                        b.resolve();
                    });
                });
            }
        });
    }
    // request quote on page load
    requestQuote();
    // request new quote when New Quote button is click
    $("#quote-btn").on("click", function(event) {
        event.preventDefault();
        requestQuote();
    });
    // share to twitter when Tweet This Quote button is pressed
    $("#tweet-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" ' + "– " + author));
    });
});
