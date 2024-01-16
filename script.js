

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() > $(".main-inner-pages").position().top) {
    $('.main-inner-pages').css('background', '#efb333');
    $('.main-inner-pages').css('z-index', '1111');
    $('.main-menu .navbar-nav .nav-link').css('color', '#fff');
    $('.logo span').css('color', '#fff');
    $('.sub-nav-toggler').css('color', '#fff');
    $('.header-right a').css('color', '#fff');
    $('.header-right a').css('border-color', '#fff');
    $('.main-inner-pages').css('box-shadow', '0px 0px 20px rgba(0, 0, 0, 0.075)');
  }
  else{
  $('.main-inner-pages').css('background', 'none');
  $('.main-inner-pages').css('box-shadow', 'none');
  $('.main-menu .navbar-nav .nav-link').css('color', '#fff');
  $('.logo span').css('color', '#fff');
  $('.sub-nav-toggler').css('color', '#fff');
  $('.header-right a').css('color', '#fff');
  $('.header-right a').css('border-color', '#fff');
  }
  
});

        

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;
  
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  }
  
  window.addEventListener("scroll", reveal);