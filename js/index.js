$(document).ready(function(){
  var quote;
  var author;
  var colors = ["#E05505","#960E0E","#5B0C52","#D7196C","#D7B219"];
  
  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method:'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response){
        quote = response.quoteText;
        author = response.quoteAuthor;
      $('#quote').text(" "+ quote);
        if (author){
          $('#author').text('-' + author);
        } else{
            $('#author').text('-Unknown');
          }
        var randomCol = colors[Math.floor(Math.random() * colors.length)];
          $('body').css("background", randomCol);
          $('p').css("color", randomCol);
          $('button').css("background", randomCol);
      }
    });
  }  
getNewQuote();
  $('.new-quote').on('click', function(){
    getNewQuote();
  });
  
  $('.share').on("click", function(){
   var tweetQ = $('#quote').html();
   var tweetA = $('#author').html();
    var url = "https://www.twitter.com/intent/tweet?text=" + tweetQ +  tweetA;
    window.open(url);
  
  });
  
});