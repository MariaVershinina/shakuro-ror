(function() {
  var _check_load_video, _clear_video_bg_img, _desktop_process, _mobile_process, _set_top_shift_to_video, video_banner_init;

  _clear_video_bg_img = function() {
    return $('.hvb-video-bg-img').css('opacity', 0);
  };

  _check_load_video = function(video) {
    video.onloadeddata = function(e) {
      return _clear_video_bg_img();
    };
    if (bowser.name === 'Firefox') {
      return _clear_video_bg_img();
    }
  };

  _set_top_shift_to_video = function(video_cont) {
    var top_shift, video, video_block_height, video_height;
    video = $('#hvb-video-bg');
    video_cont = $('.hvb-video-cont');
    video_height = video.height();
    video_block_height = $(video_cont).height();
    if (video_height > video_block_height) {
      top_shift = (parseInt(video_block_height - video_height)) / 2;
      return $(video_cont).css('top', top_shift + 'px');
    } else {
      return $(video_cont).css('top', '0');
    }
  };

  _desktop_process = function() {
    var video, video_cont;
    video = document.getElementById('hvb-video-bg');
    video_cont = $('.hvb-video-cont');
    video_cont.addClass('imp-visible');
    _check_load_video(video);
    return _set_top_shift_to_video();
  };

  _mobile_process = function() {
    return $('.hvb-img-bg').addClass('imp-visible');
  };

  video_banner_init = function() {
    if (bowser.tablet || bowser.mobile) {
      return _mobile_process();
    } else {
      return _desktop_process();
    }
  };

  $(document).ready(function() {
    video_banner_init();
    return $(window).resize(function() {
      return _set_top_shift_to_video();
    });
  });

}).call(this);
