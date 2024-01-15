function jqUpdateSize(){
    // Get the dimensions of the viewport
    // var width = $(window).width();
    var height = $(window).height();

    // $('#jqWidth').html(width);
    $('#jqHeight').html(height);

    $('.header-area').css({ 
    height:  $(window).height(),
    overflow:" hidden"});

}
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size


$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $(".main-inner").position().top) {
      $('.main-inner').css('background', '#efb333');
      $('.main-inner').css('z-index', '1111');
      $('.main-menu .navbar-nav .nav-link').css('color', '#fff');
      $('.sub-nav-toggler').css('color', '#fff');
      $('.header-right a').css('color', '#fff');
      $('.header-right a').css('border-color', '#fff');
      $('.main-inner').css('box-shadow', '0px 0px 20px rgba(0, 0, 0, 0.075)');
    }
    else{
    $('.main-inner').css('background', 'none');
    $('.main-inner').css('box-shadow', 'none');
    $('.main-menu .navbar-nav .nav-link').css('color', '#fff');
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
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);