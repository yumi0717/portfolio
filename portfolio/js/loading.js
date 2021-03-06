$(document).ready(function() {
  $('main').fadeOut(0);
  setTimeout(function(){
    $('main').fadeIn(1500);
  },500);
});

$('a').click(function(event){
  event.preventDefault();
  const url = $(this).attr('href');
  
  $('main').fadeOut('slow');

  setTimeout(function(){
    window.location.href = url;
  },1000);
});