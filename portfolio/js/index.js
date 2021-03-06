$(document).ready(function() { 
  $('header').css({left: '-60px'});
  $('footer').css({right: '-30px'});
  setTimeout(function(){
    $('nav').css({display: 'block'});
    $('main').css({display: 'block'});
    $('div.loader').fadeOut('slow');
    setTimeout(function(){
      $('header').animate({left: '5px'},500,'easeInOutBack');
      $('footer').animate({right: '0px'},500,'easeInOutBack');
    },500);
  },2000);
});

$('a').click(function(event){
  event.preventDefault();
  const url = $(this).attr('href');
$('main').fadeOut('slow');
  setTimeout(function(){
    window.location.href = url;
  },1000);
});