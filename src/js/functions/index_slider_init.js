function Index_Slider_Init() {
  if ($(".slider").length > 0) {
    $(".slider").bxSlider({
      auto: true,
      pager: false,
      controls: false,
      slideMargin: 0,
      pause: 5000,
      touchEnabled: false
    });
  }
}
