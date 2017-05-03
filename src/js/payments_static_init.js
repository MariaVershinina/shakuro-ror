(function() {
  $(document).ready(function() {
    return $('.notification-close').on('click', function(e) {
      e.preventDefault();
      debugger;
      return $(this).closest('.notification-item').slideUp("fast");
    });
  });

}).call(this);
