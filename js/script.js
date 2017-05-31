$(document).ready(function()

{
  $(".top-belt ul li").hover(function()
  {
    var index = $(this).index();
    var className = '.list-' + index;
    $('.bottom-belt .list').hide();
    $('.bottom-belt .list' + className).show();
  });

  $(".item").hover(function(){
      $(this).find('.button-allegro').show();
  },function(){
      $('.button-allegro').hide();
  });

});
