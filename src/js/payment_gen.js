(function() {
  var _payment_page_init, _set_expire_year;

  _payment_page_init = function() {
    $('#pay-total').autoNumeric('init');
    $('#pay-ccNo').maskx({
      maskx: 'cc'
    });
    return _set_expire_year();
  };

  _set_expire_year = function() {
    var correct_year, current_year, i, j, len, list, results;
    current_year = new Date().getFullYear();
    list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    results = [];
    for (j = 0, len = list.length; j < len; j++) {
      i = list[j];
      correct_year = current_year + i;
      results.push($('#pay-expYear').append('<option value="' + correct_year + '">' + correct_year + '</option>'));
    }
    return results;
  };

  $(document).ready(function() {
    return _payment_page_init();
  });

}).call(this);
