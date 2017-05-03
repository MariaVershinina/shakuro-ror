function iPhonesFadeInEffect(selector) {
  var $el = $(selector);

  if ($el.length > 0) {
    var bTop = $el.offset().top;
    var StickeHeaderHeight = $(".sticky-header").height();

    if($(window).scrollTop() > (bTop - StickeHeaderHeight - 200)) {
      $el.find(".desktop li").eq(0).addClass("uped");
      setTimeout(function() {
        $el.find(".desktop li").eq(1).addClass("uped");
      }, 200);
      setTimeout(function() {
        $el.find(".desktop li").eq(2).addClass("uped");
      }, 400);
      setTimeout(function() {
        $el.find(".desktop li").eq(3).addClass("uped");
      }, 600);
    }
  }
}
