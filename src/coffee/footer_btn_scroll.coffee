_fix_sticky_hover= (e)->
  el = e.currentTarget
  par = el.parentNode
  next = el.nextSibling
  setTimeout (->
    par.removeChild el
    par.insertBefore el, next
    return
  ), 150
  return

_fbs_scroll_top= ->
  $("html, body").animate({scrollTop: 0}, 1000);

fbs_init= ->
  footer_button = $('.footer .logo a')
  if footer_button.length > 0
    footer_button.on 'click', (e)->
      e.preventDefault()
      _fbs_scroll_top()

    footer_button.on 'touchend', (e)->
      e.preventDefault()
      _fbs_scroll_top()
      _fix_sticky_hover(e)

$( document ).ready ->
  fbs_init()
