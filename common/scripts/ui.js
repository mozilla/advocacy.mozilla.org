$(document).ready(function(){
  relocatedSubmenuBar();
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

