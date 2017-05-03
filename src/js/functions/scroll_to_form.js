function Scroll_To_Form() {
  //desktop
  if($(".scroll-to-form").length > 0) {
    $(".scroll-to-form").click(
      function() {
        $("html, body").animate({scrollTop: $(".drop-us-block").offset().top - $(".header").height()}, 1000);
        return false;
      }
    );
  }
}
