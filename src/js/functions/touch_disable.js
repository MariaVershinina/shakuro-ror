function Touch_Disable() {
  if ($("#mobile-block").length > 0) {
    $("#mobile-block").bind('click touchstart touchend',
      function(event) {
        event.preventDefault();
      }
    );
  }
}
