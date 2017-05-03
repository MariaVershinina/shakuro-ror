function parallaxScroll(){
  var windowScrollTop = $(window).scrollTop();
  var b40Top = $('.b40').offset().top;
  var scrolled = windowScrollTop - b40Top;
  $('.b40 .image1 i').css('top',(0-(scrolled*0.15))+'px');
  $('.b40 .image2 i').css('top',(0-(scrolled*0.25))+'px');
  $('.b40 .image3 i').css('top',(0-(scrolled*0.35))+'px');
  $('.b40 .image4 i').css('top',(0-(scrolled*0.35))+'px');
  $('.b40 .image5 i').css('top',(0-(scrolled*0.25))+'px');
}
