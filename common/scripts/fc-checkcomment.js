/*********
* This checks that a commenter has filled required fields.
* It also checks that the provided e-mail is well formed.
* Requires jQuery. 
*/

function fc_checkform(req) {
  author  = document.getElementById("author");
  email   = document.getElementById("email");
  comment = document.getElementById("comment");
  
if (jQuery("#errors").length > 0) { jQuery("#errors").remove(); }
jQuery("#author, #email, #comment").removeClass("err");

if (req == 'req') {
  if ((author.value == "") && (email.value == "")) {
    author.focus();
    jQuery("#author, #email").addClass("err");
    jQuery("#comment-form ol").before("<div id='errors'></div>");
    jQuery("#errors").html("<p>" + objectL10n.nonameemail + "</p>");
    return false;
  }
  if ((author.value == "") && (email.value != "")) {
    author.focus();
    jQuery("#author").addClass("err");
    jQuery("#email").removeClass("err");
    jQuery("#comment-form ol").before("<div id='errors'></div>");
    jQuery("#errors").html("<p>" + objectL10n.noname + "</p>");
    return false;
  }
  if ((author.value != "") && (email.value == "")) {
    email.focus();
    jQuery("#email").addClass("err");
    jQuery("#author").removeClass("err");
    jQuery("#comment-form ol").before("<div id='errors'></div>");
    jQuery("#errors").html("<p>" + objectL10n.noemail + "</p>");
    return false;
  }
}

// check email format
var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if ((email.value != "") && (filter.test(email.value))) {
  jQuery("#email").removeClass("err");
}
else {
  jQuery("#email").addClass("err").focus();
  jQuery("#comment-form ol").before("<div id='errors'></div>");
  jQuery("#errors").html("<p>" + objectL10n.bademail + "</p>");
  return false;
}
  
if ( comment.value == "" ) {
  comment.focus();
  jQuery("#comment").addClass("err");
  jQuery("#comment-form ol").before("<div id='errors'></div>");
  jQuery("#errors").html("<p>" + objectL10n.nocomment + "</p>");
  return false;
}
else {
  jQuery("#comment").removeClass("err");
}
  
/* if everything checks out, return true */
return true;
}
