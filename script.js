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
  })
  $(".pi2").hover(function(){
    $(".c2").toggle();
  })
  $(".pi3").hover(function(){
    $(".c3").toggle();
  })

});
