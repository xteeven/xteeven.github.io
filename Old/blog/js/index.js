$(document).on('ready',function(){
  $(".col-md-4").mouseover(function(){
    $(this).find("h2").css("color","#000");
    $(this).find(".category").css("color","#000");
    $(this).find(".read-more").removeClass("flyIn");
    $(this).find(".read-more").addClass("fly");
    
  }).mouseout(function(){
    $("h2").css("color","#fff");
    $(this).find(".category").css("color","#fff");
    $(this).find(".read-more").removeClass("fly");
    $(this).find(".read-more").addClass("flyIn");


    
  });











})