import React from 'react'

module.exports = {
  contextTypes: {
    intl: React.PropTypes.object
  },
  componentDidMount: function() {
    var navTop, navEl, windowHeight, navHeight;

    navEl = document.querySelector(".agenda-navigation");
    var navOffset = navEl.getBoundingClientRect();
    navTop = navOffset.top;

    navigate(window.location.hash);

    function hide(el) {
      el.style.display = "none";
    }

    function show(el) {
      el.style.display = "block";
    }

    function forEachList(list, callback) {
      Array.prototype.forEach.call(list, callback);
    }

    function applyAll(list, event, callback) {
      forEachList(list, function(item) {
        item.addEventListener(event, callback);
      });
    }

    applyAll(navEl.querySelectorAll('a'), "click", function(e) {
      e.preventDefault();
      navigate(e.target.getAttribute("href"));
    });

    function navigate(hash) {
      // First, we'll hide all of the content
      forEachList(document.querySelectorAll(".agenda > li"), function(item) {
        hide(item);
      });

      hide(document.querySelector("section.overview"));

      // Next, we'll try to figure out what step to show based on the hash.
      hash = hash.toLowerCase();
      var numberOfSteps = document.querySelectorAll(".agenda > li").length;
      var overview = true;
      if(hash.indexOf("step") > 0) {
        var step = hash.replace("#step-","");
        if(step <= numberOfSteps){
          overview = false;
        }
      }

      // If there's a step number in the hash, we'll show that step.
      // Otherwise, we'll default to the overview.
      if(overview) {
        hash = "#overview";
        show(document.querySelector("section.overview"));
        document.querySelector(".wrapper").setAttribute("mode","overview");
      } else {
        show(document.querySelector(".agenda > li:nth-child("+step+")"));
        document.querySelector(".wrapper").setAttribute("mode","step");
      }

      // Here we add the selected class to the activity navigation link.
      var selected = navEl.querySelector(".selected");
      if (selected) {
        selected.classList.remove("selected");
      }
      navEl.querySelector("a[href='"+hash+"']").parentNode.classList.add("selected");

      window.location.hash = hash;
    }
  }
};

