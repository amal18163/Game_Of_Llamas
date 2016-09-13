/*
FILENAME: toggle_menu.js
AUTHOR: Amal Tidjani
DATE: September 2016

PURPOSE: Defines functions to toggle the site's
navigation/drop-down menus.
*/


/* -----------------------------------------------------
  FUNCTIONS
--------------------------------------------------------*/

function initializeToggle() {
/*Add click event handlers to toggle navigation and drop menus
  when page loads. Necessary to avoid asynchronous loading issues.
  WARNING: Does not detect window resizing by user!*/

    /*Add click handler to toggle navigation menu*/
    $("#icon").on("click", function() {toggle_menu("nav_menu", "icon");});

    /*Only add drop menu click event for screens less than 1200px
      Screens larger than 1200px will display drop menu on hover*/

    if ($("ul.nav_menu li a").css("font-size") < "25px") {
      /*Since window.width and media query widths do not always match,
        check for css rules changed by media query as a way of detecing
        a media query change. Change in nav menu's font-size to 25px signifies
        a screen width of 1200px*/

      $("#drop").on("click", function() {toggle_menu("drop_menu", "drop");});
    }
}

function toggle_menu(menu_id, clicked_id) {
/*Updates a given menu's class to reflect its status as
  "clicked" (expanded) or minimized.*/

  var menu = $("#" + menu_id);
  var menu_class = $("#" + menu_id).attr("class");
  var clicked_elem = $("#" + clicked_id)

  if (menu_class === menu_id)
     $(menu).attr("class", menu_class + " clicked");

  else
    close_menu(menu_id);
}

function close_menu(menu_id) {
/*Updates navigation menu and any drop menus' classes to reflect
  an unclicked status. Causes all menus to be minimized.*/

  /* "Minimize" navigation menu*/
  var menu = $("#" + menu_id);
  $(menu).attr("class", menu_id);

  /* "Minimize" any drop menus*/
  if ($(menu).find("ul").length) {
    /*When 1 or more drop menus exist*/
    var sub_menus = $(menu).find("ul"); //returns array of drop menus

    for (var i = 0; i < $(menu).find("ul").length; i++) {
        /*"Minimize" all drop menus*/
        var sub_menu_id = $(sub_menus[i]).attr("id");
        $(sub_menus[i]).attr("class", sub_menu_id);
    }
  }
}


$(window).resize(function() {
/*Because drop menu toggling alternates between clicking and hovering
  depending on window size, drop menu toggling on click needs to
  be added or removed  when window is resized. */

  /*Remove any click handlers every time window is resized to avoid
    adding a click handler twice*/
  $("#drop").off();


  var font_size = $("ul.nav_menu li a").css("font-size");

  if (font_size < "25px") {
  /*Add click handler to drop menu when window is resized to less than 1200px*/
    $("#drop").on("click", function() {toggle_menu("drop_menu", "drop");});

  } else if (font_size >= "25px") {
  /*Remove click handler from drop menu when window is resized to 1200px or more*/
    $("#drop").off();
  }

  /*Close any open menus on window resize*/
  close_menu("nav_menu");
});


/* -----------------------------------------------------
   EVENT HANDLERS
--------------------------------------------------------*/
/*Run to initialize for index.html*/
initializeToggle();
