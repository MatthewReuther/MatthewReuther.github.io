$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(4) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  var navOffset = $(".nav").offset().top;
  // alert(navOffset);

  $(".nav").wrap('<div class="nav-placeholder"></div>');
  $(".nav-placeholder").height($(".nav").outerHeight());

  $(".nav").wrapInner('<div class="nav-inner"></div>');

  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
      // $(".status").html(scrollPosition);
    if (scrollPosition >= navOffset) {
      $(".nav").addClass("fixed");
    }
    else {
      $(".nav").removeClass("fixed");
    }
  });
});

