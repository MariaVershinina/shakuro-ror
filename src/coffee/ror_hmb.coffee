_mbpr_set_bg_height= (hmb)->
  windowHeight = window.innerHeight
  if windowHeight > 680
    hmb.css('min-height', window.innerHeight)
  else
    hmb.css('min-height', 680)

mbpr_init= ->
  hmb = $('.hmb-block')
  _mbpr_set_bg_height(hmb)

$( document ).ready ->
  mbpr_init()

  $(window).resize () ->
    hmb = $('.hmb-block')
    _mbpr_set_bg_height(hmb)
