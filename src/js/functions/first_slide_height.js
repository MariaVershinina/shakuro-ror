function First_Slide_Height() {
  if ($(".first-slide").length > 0) {
    if ($(window).height() > 700) {
      $(".first-slide").height("100%");
    } else {
      if (window.devicePixelRatio !== 1) {
        $(".first-slide").height("100%");
      } else {
        if (window.innerWidth > 767) {
          $(".first-slide").height("700px");
        } else {
          $(".first-slide").height("450px");
        }
      }
    }
  }
}
