var words = ['Web Designer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;','Front-end Developer','Cena1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;']
var isHover = false;
var count = 0;
var intervalo;
var coiso;

$('.animated-function').hover(function(){
  isHover = true;
  replace();
  clearInterval(coiso);
  coiso = setInterval(replace, 1000);
});

$('.animated-function').mouseleave(function(){
  isHover = false;
  var count = 0;
  clearInterval(coiso);
  $(this).html('Multimedia Designer');
});

function replace(){
if(isHover == true){
  $('.animated-function').html(words[count]);
  count++;
  if(count >= words.length){
    count = 0;
  }
}
}
