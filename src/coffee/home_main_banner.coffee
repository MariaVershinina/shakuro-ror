_hmb_banner_randm= ->
  list_banners_name = [ '1', '2', '3', '4', '5', '6', '7' ]
  size = list_banners_name.length
  item = Math.floor(size*Math.random())
  name_banner = list_banners_name[item]
  return name_banner

_hmb_set_bg= (bg_name)->
  hmb = $('.hmb-block')
  hmb_bg_layer = hmb.find('.hmb-bg')
  hmb_bg_layer.css('background-image', 'url(img/home_bg/' + bg_name + '.jpg)')

hmb_init= ->
  rndm_banner_name = _hmb_banner_randm()

  if bowser.mobile
    _hmb_set_bg(rndm_banner_name + '-mobile')
  else
    _hmb_set_bg(rndm_banner_name)

$( document ).ready ->
  hmb_init()
