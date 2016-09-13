/*
FILENAME: float_heights.js
AUTHOR: Amal Tidjani
DATE: September 2016

PURPOSE
*/

function set_float_height(float_id) {
  var float_elem = $("#" + float_id);
  var height = $(float_elem).parent().innerHeight();
  console.log("ID: " + float_elem.attr("id"));
  console.log("Parent: " + $(float_elem).parent().attr("id"));
  console.log("Height: " + height);
  $(float_elem).css("height", height);
}

set_float_height("power");
set_float_height("spit");
set_float_height("family");
