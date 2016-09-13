/*Image Source: https://www.transparenttextures.com/patterns/always-grey.png */
var bkgnd_url = "images/always-grey.png";


// function set_colors(body_color, nav_color, facts_color, text_cont_color) {
//
// $("body").css("background-image", url("https://www.transparenttextures.com/patterns/always-grey.png"))
//          .css("background-color", body_color);
//
// }

function mainColors() {
    var color = $(".text_container").css("background-color");
    console.log("p color: " + color);
    $(".text_container").css("background-color", "black");
}



function llargaryen_colors() {
  $("body").css("background-image", "url(" + bkgnd_url + ")")
           .css("background-color", "#97211f");

  // $(".text_container").css("background-color", "black");
}

llargaryen_colors();
