(function() {
  var _hmb_banner_randm, _hmb_set_bg, hmb_init;

  _hmb_banner_randm = function() {
    var item, list_banners_name, name_banner, size;
    list_banners_name = ['1', '2', '3', '4', '5', '6', '7'];
    size = list_banners_name.length;
    item = Math.floor(size * Math.random());
    name_banner = list_banners_name[item];
    return name_banner;
  };

  _hmb_set_bg = function(bg_name) {
    var hmb, hmb_bg_layer;
    hmb = $('.hmb-block');
    hmb_bg_layer = hmb.find('.hmb-bg');
    return hmb_bg_layer.css('background-image', 'url(img/home_bg/' + bg_name + '.jpg)');
  };

  hmb_init = function() {
    var rndm_banner_name;
    rndm_banner_name = _hmb_banner_randm();
    if (bowser.mobile) {
      return _hmb_set_bg(rndm_banner_name + '-mobile');
    } else {
      return _hmb_set_bg(rndm_banner_name);
    }
  };

  $(document).ready(function() {
    return hmb_init();
  });

}).call(this);
