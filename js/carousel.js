$(function(){
/*Dynamically animates the slideshow to scroll through images
  with a fade in and out effect*/

    $("#carousel img:gt(0)").hide();
    /*:gt() is a zero based index function that selects all images
      with an index greater than 0 and hides them, so that the first
      image in the slideshow displays upon page load*/

    setInterval(function(){
    /*Add a fade out effect to the current image and a fade in
      effect to the next image every 4 seconds*/
      $("#carousel :first-child").fadeOut()
         .next("img").fadeIn()
         .end().appendTo("#carousel");},
      4000);
});
