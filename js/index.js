
// Tweet Button is disbled until you generate quote
$( document ).ready(function() {
   disbaleTweet();
});

// get quote button click event
$('#generate-quote').on('click', function(e) {
  e.preventDefault();
  
  // enable tweet button
  enableTweet();
$.ajax({
    url:
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    dataType: "jsonp",
    success: function(data) {
      var post = data; // The data is an array of posts. Grab the first one.

      $("#quote-content").html(
        '<h3 class="animated fadeInUp">' +
          post.quoteText +
          "</h3> " +
          "<p> - " +
          post.quoteAuthor +
          "</p>"
      );
    },
    cache: false
  });
});

// Tweet event
$('#tweet').on('click', function(e) {
  tweetQuote();
});

// tweet function to get generated quote
function tweetQuote() {
  var generatedQuote = $('#quote-content').text();
  console.log(generatedQuote);
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote);
   window.open(tweetUrl);
}

// diable tweet function
function disbaleTweet(){
   $('#tweet').prop("disabled",true);
}

// enable tweet function
function enableTweet(){
    $('#tweet').prop("disabled",false);
}
