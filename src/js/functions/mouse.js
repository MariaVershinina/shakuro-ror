function Mouse() {
  setInterval(function() {
    $(".mouse i").addClass("visible");
    setTimeout(function() {
      $(".mouse i").addClass("down");
    }, 300);
    setTimeout(function() {
      $(".mouse i").removeClass("visible");
    }, 1000);
    setTimeout(function() {
      $(".mouse i").removeClass("down");
    }, 1390);
  }, 1500);
  $(".mouse").click(
    function() {
      return false;
    }
  );
}
