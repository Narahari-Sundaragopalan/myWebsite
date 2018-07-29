    // Scroll to top
    $('#topcontrol').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
      $('topcontrol').hide();
  });

  $(document).ready(function() {
    // Animate to section when nav is clicked
    $('.scrollto').click(function(e) {
      e.preventDefault();
      var heading = $(this).attr('href');
      var scrollDistance = $(heading).offset().top;

      $('html, body').animate({
          scrollTop: scrollDistance + 'px'
      }, 800);
  });

  });