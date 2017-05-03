(function() {
  var _mbpr_set_bg_height, mbpr_init;

  _mbpr_set_bg_height = function(hmb) {
    var windowHeight;
    windowHeight = window.innerHeight;
    if (windowHeight > 680) {
      return hmb.css('min-height', window.innerHeight);
    } else {
      return hmb.css('min-height', 680);
    }
  };

  mbpr_init = function() {
    var hmb;
    hmb = $('.hmb-block');
    return _mbpr_set_bg_height(hmb);
  };

  $(document).ready(function() {
    mbpr_init();
    return $(window).resize(function() {
      var hmb;
      hmb = $('.hmb-block');
      return _mbpr_set_bg_height(hmb);
    });
  });

}).call(this);
