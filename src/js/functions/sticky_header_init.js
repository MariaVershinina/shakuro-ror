function Sticky_Header_Init() {
  var header = $('.header');

  if (($(window).scrollTop()) > header.height()) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
}
