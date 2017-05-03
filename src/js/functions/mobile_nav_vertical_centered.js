function Mobile_Nav_Vertical_Centered() {
  var windowHeight = $(window).innerHeight(),
      headerHeight = $('.header').outerHeight(),
      mobileMenu = $('.mobile-menu'),
      mobileMenuWeAreOnHeight = mobileMenu.find('.we-are-on').outerHeight();

  mobileMenu.find('nav').css({'top': (windowHeight - mobileMenuWeAreOnHeight - headerHeight)/2, 'margin-top': - 5 });
}
