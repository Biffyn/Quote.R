$(document).ready(function() {
    // vars
    // var author = "",
    //     quote = "";

    // retrieve a quote
    function retrieveQuote() {
        return $.ajax({
            // request
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            headers: {
                'X-Mashape-Key': '9NrMW3A7TOmsheYkGNEnHoVHm8IOp1NzIfrjsnbAowyQUTXAvW',
                method: 'POST',
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json'
            },
        });
    }
});
