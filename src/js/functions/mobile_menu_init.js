var Mobile_Menu_Init;

_low_height_check = function() {
  var body = $('body');
  if ($(window).innerHeight() <= 440) {
    body.addClass('low-height');
  } else {
    body.removeClass('low-height');
  }
};

_page_scroll_toggle = function() {
  var body = $('body');
  if (body.css('overflow') != 'hidden') {
    body.css({"overflow": "hidden"});
  } else {
    body.removeAttr('style');
  }
};

_clear_mobile_menu = function() {
  if (($(window).innerWidth() > 768) && (($('.header').attr('class')).indexOf("mobile-nav-open") >= 7)) {
    _mobile_menu_close();
    return;
  }
};

_scroll_to_form_handler = function() {
  if ($('body').hasClass('showcase') !== true && $('body').hasClass('zilla') !== true) {
    $(".get-in-touch-mobile").on('click', function(e) {
      e.preventDefault();
      _mobile_menu_close();
      $("html, body").animate({scrollTop: $(".drop-us-block textarea").offset().top - ($(".header").height() + 149)  }, 1000);
      return false;
    });
  }
};

_mobile_menu_close = function() {
  $('body').removeAttr('style');
  $('.header').removeClass('mobile-nav-open');
  $('.mobile-menu-button').removeClass('is-opened');
  $('.centered').css({
    'zIndex': '2'
  });
  $('#mobile-block').removeClass('open');
  $('#mobile-block').fadeOut(300).removeAttr('style');
  $('#fixed').fadeOut(300).removeAttr('style');
  $(".get-in-touch-mobile").off('click');
};

_mobile_menu_open = function() {
  $('body').css({"overflow": "hidden"});
  $('.header').addClass('mobile-nav-open');
  $('#mobile-block').addClass('open');
  $('.mobile-menu-button').addClass('is-opened');
  $('#fixed').fadeIn(300);
  $('.centered').css({
    'zIndex': '0'
  });
  $('#mobile-block').fadeIn(300);
  _scroll_to_form_handler();
};

_mobile_menu_handler = function() {
  var mobile_menu_btn = $('.mobile-menu-button'),
      header = $('header');

  if ($(window).outerWidth() <= 768) {
    if (!header.hasClass('mobile-view')) {
      header.addClass('mobile-view');
      mobile_menu_btn.on('click', function() {
        if ($(this).hasClass('is-opened')) {
          _mobile_menu_close();
        } else {
          _mobile_menu_open();
        }
      });
    }
  } else {
    if (header.hasClass('mobile-view')) {
      header.removeClass('mobile-view');
      mobile_menu_btn.off('click');
    }
  }
};

Mobile_Menu_Init = function() {
  _low_height_check()
  _mobile_menu_handler()

  $(window).resize(function() {
    _low_height_check()
    _clear_mobile_menu();
    _mobile_menu_handler()
    return;
  });
};
