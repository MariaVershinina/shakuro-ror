function Fullpage_Init() {
  if($(".fullpage").length > 0) {
    $(".fullpage").fullpage({
      "verticalCentered": false,
      navigation: true,
      paddingTop: 62
    });
  }
}
