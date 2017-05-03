(function() {
  var _fbs_scroll_top, _fix_sticky_hover, fbs_init;

  _fix_sticky_hover = function(e) {
    var el, next, par;
    el = e.currentTarget;
    par = el.parentNode;
    next = el.nextSibling;
    setTimeout((function() {
      par.removeChild(el);
      par.insertBefore(el, next);
    }), 150);
  };

  _fbs_scroll_top = function() {
    return $("html, body").animate({
      scrollTop: 0
    }, 1000);
  };

  fbs_init = function() {
    var footer_button;
    footer_button = $('.footer .logo a');
    if (footer_button.length > 0) {
      footer_button.on('click', function(e) {
        e.preventDefault();
        return _fbs_scroll_top();
      });
      return footer_button.on('touchend', function(e) {
        e.preventDefault();
        _fbs_scroll_top();
        return _fix_sticky_hover(e);
      });
    }
  };

  $(document).ready(function() {
    return fbs_init();
  });

}).call(this);
