/*
FILENAME: house_info.js
AUTHOR: Amal Tidjani
DATE: July 2016
*/

/*Loads content and stylizes house pages*/

var bkgnd_url = "images/always-grey.png";

var llark = {
  name: "Llark",
  url: "images/sigil_llark.png",
  alt: "House Llark Sigil",
  sigil: "Grey Diresheep",
  motto: "Danger is Coming",
  seat: "Spitterfell",
  lord: "King Llon Snow",
  religion: "Old Llamas of <br>the Forest",
  traits: "Honor; Noble Spirit; Love Diresheep",
  description: "<h2>General:</h2>"
               + "<p> <span>House Llark of Spitterfell</span>, is one of the great houses of Llesteros, with a territory that extends"
               + " throughout the vast majority of Northern Llesteros. Though House Llark is the ruling house in the North, its members"
               + " are reluctant to play the game of llamas. Llarks value honor and honesty over all else. It is their refusal to"
               + " compromise their morals for the sake of political prestige that has won them the trust and respect of their peers."
               + " That, coupled with their military prowess, is what has made House Llark one of the most powerful and influential houses"
               + " of Llesteros.</p>"

               + "<h2>Sigil:</h2>"
               + "<p>Llamas of House Llark are known throughout Llesteros for their exceptional skill in herding sheep. House Llark&#39;s"
               + " sigil, a grey diresheep, reflects the strong bond Llark llamas develop with their wooly companions. So strong is the love"
               + " between these two creatures that a diresheep will often sacrifice its own life to protect a Llark.</p>"

               + "<h2>Motto:</h2>"
               + "<p>Unlike many house mottos, House Llark&#39;s is one of the very few that isn&#39;t threatening or boastful. House"
               + "Llark&#39;s motto is a stern reminder to all llamas of Llesteros to always stand guard and prepare for the danger"
               + "that lurks around every corner.</p>",

  colors: {body: "#666", facts: "#CEDCDA", text_container: "#333"}
};


var llamister = {
  name: "Llamister",
  url: "images/sigil_llamister.png",
  alt: "House Llamister Sigil",
  sigil: "Golden Tongue",
  motto: "Hear Me Spit",
  seat: "Llama's Landing",
  lord: "Queen Llersei <br>Llamister",
  religion: "Faith of the <br>Seven Llamas",
  traits: "Cunning; Persuasive; Able-Bodied; Wealthy",
  description: "<h2>General:</h2>"
               + "<p><span> House Llamister </span> is the wealthiest and most powerful of the great houses, ruling over all of Llesteros"
               + " and its llamas. Llamisters are a force to be reckoned with as they are both intelligent and physically fit. Unlike llamas"
               + " of House Llark, who are governed by their moral compasses, Llamisters are driven by their insatiable hunger for power."
               + " Their military conquests and political sovereignty have contributed to an overwhelming sense of house pride. The"
               + " Llamisters&#39; arrogance, ruthlessness, and dishonesty make them the most hated and feared llamas of Llesteros.</p>"

               + "<h2>Sigil:</h2>"
               + "<p>Llamas of House Llamister are eloquent and persuasive. They were born to play the <q>game of llamas</q>. Their sigil, the"
               + " golden tongue, is a testament to how well Llamisters can play politics and manipulate others. Meanwhile, their sigil&#39;s"
               + " golden color symbolizes House Llamister’s abundant wealth.</p>"

               + "<h2>Motto:</h2>"
               + "<p>House Llamister&#39;s motto is a threatening battle-cry that flaunts their great military prowess. Llamister spit attacks"
               + " can be heard from miles away.</p>",

  colors: {body: "#BA941F", facts: "#CEDCDA", text_container: "#333" }
};
/*#FFBA00
  #DBB026
  #FFEE75*/

var llargaryen = {
  name: "Llargaryen",
  url: "images/sigil_llargaryen.png",
  alt: "House Llargaryen Sigil",
  sigil: "Fire",
  motto: "Spit and Blood",
  seat: "Lleereen",
  lord: "Queen Llaemerys Llargaryen",
  religion: "Llamyrian",
  traits: "Wisdom; Madness; Beauty; Heat Tolerance",
  description: "<h2>General</h2>"
               + "<p> <span> House Llargaryen of Lleereen</span>, once the royal house that ruled over all of Llesteros, suffered"
               + " catastrophically after Llobert&#39;s Rebellion. Not only was House Llargaryen deposed, but many of its members"
               + " were killed off. The very few surviving Llargaryens fled for their lives to the continent of Lessos. Though a"
               + " shell of its former self, House Llargaryen is on the rise under the reign of Queen Llaemerys Llargaryen, who is"
               + " determined to restore her house to its former glory. </p>"

               + "<p>Llamas of House Llargaryen are known for their exceptional beauty, particularly their platinum-silver locks of fur."
               + " Due to generations of incestuous interbreeding, Llargaryens are predisposed to bouts of insanity or unadulterated genius."

               + "<h2>Sigil:</h2>"
               + "<p>Llargaryen llamas exhibit an uncharacteristically high tolerance to heat.  Queen Llaemerys herself is actually immune to"
               + " the effects of fire.  For this reason, fire is the sigil of House Llargaryen."

               + "<h2>Motto:</h2>"
               + "<p>The Llargaryen motto, <q>Spit and Blood,</q> is as much a threat as it is a promise to the llamas of Llesteros. Llargaryen"
               + " llamas will take what is theirs with <q>spit and blood.</q></p>",

  colors: {body: "#731A17", facts: "#CEDCDA", text_container: "#333", descrip_title: "F9B6A3"}
};
/*#97211F
#F9B6A3*/

function add_content(object, colors) {
  /*Image Source: https://www.transparenttextures.com/patterns/always-grey.png */

  /*_______________________ Add Text _______________________*/
  $("#house_header").html(object.name);
  $("#sigil_image").attr("src", object.url)
                   .attr("alt", object.alt);
  $("#sigil").html(object.sigil);
  $("#motto").html(object.motto);
  $("#seat").html(object.seat);
  $("#lord").html(object.lord);
  $("#religion").html(object.religion);
  $(".house_description").html(object.description);

  /* ____________________ Add Colors _____________________ */
  $("body").css("background-image", "url(" + bkgnd_url + ")")
           .css("background-color", colors.body);
  $(".text_container").css("background-color", colors.text_container);
  $("#house_facts").css("background-color", colors.facts);
}



add_content(llark, llark.colors);

function llamister_content() {
  add_content(llamister, llamister.colors);
}

function llargaryen_content() {
  add_content(llargaryen, llargaryen.colors);
}
