$(function(){
    
    
    
   //starting try
      
   //ending try
    
    $(".djs .personn ").hover(function(){
     console.log("ok");
        $(this).find('.mycontent').fadeIn(500);
        $(this).find('.over').fadeIn(500);
     },function(){
      console.log("hidden");
     $(this).find('.mycontent').hide();
     $(this).find('.over').hide();
   });
   
    //starting handling overlay of ul of social media
    $(".Events .socials li ").hover(function(){
     console.log("ok");
        $(this).find('.overll').fadeIn(200);
     },function(){
      console.log("hidden");
     $(this).find('.overll').hide();
   });
     //starting handling overlay of ul of social media

    
/*    
  $(".djs .personn").mouseenter(function(){
      console.log("ok");
     $(this).find('.mycontent').css("visibility","visible");
  
  });
    
  $(".djs .personn").mouseleave(function(){
      console.log("hidden");
     $(this).find('.mycontent').css("visibility","hidden");
  
  });
  */  

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
    
    
});