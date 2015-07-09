$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(4) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -60
        }, 1000);
        return false;
      }
    }
  });
});

//////////////////   Navbar  ///////////////////////
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

//////////////////   SKILLS SLIDE UP/DOWN  ///////////////////////
$(document).ready(function() {
   $("#front-end-sub").hide();
});

$(document).ready(function(){
  $('#front-end').click(function(){
    event.stopPropagation();
    $('#front-end-sub').slideDown();
  });

  $(document).click(function(){
    $('#front-end-sub').slideUp();
  });
});

$(document).ready(function() {
   $("#back-end-sub").hide();
});

$(document).ready(function(){
  $('#back-end').click(function(){
    event.stopPropagation();
    $('#back-end-sub').slideDown();
  });

  $(document).click(function(){
    $('#back-end-sub').slideUp();
  });
});
