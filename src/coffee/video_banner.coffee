_clear_video_bg_img= ->
  $('.hvb-video-bg-img').css 'opacity', 0

_check_load_video= (video)->
  video.onloadeddata= (e)->
    _clear_video_bg_img()

  if bowser.name == 'Firefox'
    _clear_video_bg_img()

_set_top_shift_to_video= (video_cont)->
  video = $('#hvb-video-bg')
  video_cont = $('.hvb-video-cont')

  video_height = video.height()
  video_block_height = $(video_cont).height()

  if video_height > video_block_height
    top_shift = (parseInt(video_block_height - video_height))/2
    $(video_cont).css 'top', top_shift + 'px'
  else
    $(video_cont).css 'top', '0'

_desktop_process= ->
  video = document.getElementById('hvb-video-bg')
  video_cont = $('.hvb-video-cont')

  video_cont.addClass 'imp-visible'
  _check_load_video(video)
  _set_top_shift_to_video()

_mobile_process= ->
  $('.hvb-img-bg').addClass 'imp-visible'

video_banner_init= ->
  if bowser.tablet or bowser.mobile
    _mobile_process()
  else
    _desktop_process()

$( document ).ready ->
  video_banner_init()

  $(window).resize () ->
    _set_top_shift_to_video()
