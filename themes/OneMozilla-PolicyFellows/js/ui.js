$(document).ready(function(){
  relocatedSubmenuBar();
  applicationFormHandler();
});

function relocatedSubmenuBar() {
  var onNestedParentPage = $("#menu-main-nav > li.current-menu-item").children("ul").length != 0;
  var onNestedChildPage = $("#menu-main-nav > li li.current-menu-item").parents("li.menu-item").length != 0;

  if ( onNestedParentPage || onNestedChildPage ) {
    var $parentMenuItem = $("#menu-main-nav > li.current-menu-item").length > 0 ?
                $("#menu-main-nav > li.current-menu-item") : $("#menu-main-nav > li.current-menu-ancestor");
    $("#nav-primary-sub").html($parentMenuItem.find("ul.sub-menu").clone());
  }
}

function applicationFormHandler() {
  var formURL = "https://docs.google.com/a/mozillafoundation.org/forms/d/1qHke2PWGy-vrQ8wb9V2uWVmgh8g0GGJ0PQ1JMOhkvVs/formResponse"; // real form
  var privacyCheckboxName = "entry.2055255229";

  $("#ss-form").submit(function(event) {
    event.preventDefault();
  });

  $("#ss-form").validate({
    messages: {
      "entry.2055255229": "Please check this box if you want to proceed."  // privacy policy checkbox
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == privacyCheckboxName ) { // privacy policy checkbox
        error.text("Please check this box if you want to proceed.");
        error.insertAfter(element.siblings(".ss-choice-label"));
      } else {
        error.hide(); // highlight other missing fields with red border instead showing error messages
      }
    },
    submitHandler: function(form) {
      $.ajax({
        url: formURL,
        data: $(form).serialize(),
        type: "POST",
        crossDomain: true,
        dataType: "json",
        complete: function(jqXHR, textStatus) {
          // redirect to thank you page if Google has successfully received the data
          if ( jqXHR.status == "0" || jqXHR.status == "200" ) {
            window.location.href = "/thank-you";
          }
        }
      });
    }
  });
}
