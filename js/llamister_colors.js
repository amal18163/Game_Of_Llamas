/*Image Source: https://www.transparenttextures.com/patterns/always-grey.png */
var bkgnd_url = "images/always-grey.png";


// function set_colors(body_color, nav_color, facts_color, text_cont_color) {
//
// $("body").css("background-image", url("https://www.transparenttextures.com/patterns/always-grey.png"))
//          .css("background-color", body_color);
//
// }

function llamister_colors() {
  console.log("in llamister colors");
  $("body").css("background-image", "url(" + bkgnd_url + ")")
           .css("background-color", "#DBB026");
}

llamister_colors();
