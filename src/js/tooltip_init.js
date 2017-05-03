(function() {
  var tooltip_init;

  tooltip_init = function() {
    return $('[data-toggle="tooltip"]').tooltip();
  };

  $(document).ready(function() {
    return tooltip_init();
  });

}).call(this);
