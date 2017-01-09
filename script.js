$(document).ready(function(){
  $(".travelDescription").hide();
  $(".chemistryDescription").hide();
  $(".shilohDescription").hide();
  $(".skiDescription").hide();

	$(".tbox").click(function(){
    	$(".travelDescription").toggle();
  })
  $(".chembox").click(function(){
    	$(".chemistryDescription").toggle();
  })
  $(".treatmentBox").click(function(){
      $(".shilohDescription").toggle();
  })
  $(".skibox").click(function(){
      $(".skiDescription").toggle();
  })

  $(".pi1").hover(function(){
    $(".c1").toggle();
    $('.gitup').css({
      '-webkit-transform' : 'scale(' + 1.1 + ')',
      '-moz-transform'    : 'scale(' + 1.1 + ')',
      '-ms-transform'     : 'scale(' + 1.1 + ')',
      '-o-transform'      : 'scale(' + 1.1 + ')',
      'transform'         : 'scale(' + 1.1 + ')'
    });
  })
  $(".pi2").hover(function(){
    $(".c2").toggle();
  })
  $(".pi3").hover(function(){
    $(".c3").toggle();
  })
  $(".pi4").hover(function(){
    $(".c4").toggle();
  })
  $(".pi5").hover(function(){
    $(".c5").toggle();
  })

});
