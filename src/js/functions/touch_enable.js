function Touch_Enable() {
  if ($(".touch-enable").length > 0) {
    $(".touch-enable").bind('click touchstart touchend',
      function(event) {
        event.stopPropagation();
      }
    );
  }
}
