$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(4) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -45
        }, 1000);
        return false;
      }
    }
  });
});

//////////////////   Navbar  ///////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
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

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


