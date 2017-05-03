_payment_page_init= ->
  $('#pay-total').autoNumeric('init')
  $('#pay-ccNo').maskx maskx: 'cc'
  _set_expire_year()

_set_expire_year= ->
  current_year = new Date().getFullYear()
  list = [0..10]

  for i in list
    correct_year = current_year + i
    $('#pay-expYear').append('<option value="' + correct_year + '">' + correct_year + '</option>')

$( document ).ready ->
  _payment_page_init()
