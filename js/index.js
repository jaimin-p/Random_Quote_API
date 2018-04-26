
// Tweet Button is disbled until you generate quote
$( document ).ready(function() {
   disbaleTweet();
});

// get quote button click event
$('#generate-quote').on('click', function(e) {
  e.preventDefault();
  
  // enable tweet button
  enableTweet();
  $.ajax( {
    url: 'https://quotesondesign.com//wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success:function(data) {
      
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      
      $("#quote-content").html( '<h3 class="animated fadeInUp">' +  post.content  + "</h3> "  +"<p> - " + post.title + "</p>")
      
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