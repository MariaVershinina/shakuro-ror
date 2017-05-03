function B23_Tablet_Centered() {
  if ($(".b23 .image").length > 0 ) {
    var Image = $(".b23 .image");
    var ImageWidth = Image.width();
    var WindowWidth = $(window).width();
    var Left = (WindowWidth - ImageWidth) / 2;
    if (window.innerWidth >= 768 && WindowWidth <= ImageWidth) {
      Image.css({
        "left": Left
      });
    } else {
      Image.css({
        "left": "0"
      });
    }
  }
}
