/*
FILENAME: load.js
AUTHOR: Amal Tidjani
DATE: July 2016
*/

/*Load header HTML onto all pages*/

$("#header_here").load("index.html header", initializeToggle);

$("#main_llamister_here").load("house_llark.html main", llamister_content);

$("#main_llargaryen_here").load("house_llark.html main", llargaryen_content);

$("#footer_here").load("index.html footer");
