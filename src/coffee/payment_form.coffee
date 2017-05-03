do ->
  $form = null

  _validate_name= ( $form, name ) ->
    valid = false
    field_wrapper = $form.find('#pay-name').closest('.field-cont')
    if name and name.length <= 128
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_email= ( $form, email )->
    valid = false
    field_wrapper = $form.find('#pay-email').closest('.field-cont')
    if emailRegExp.test(email) and email.length <= 64
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_payment_reference= ( $form, paymentReference ) ->
    valid = false
    field_wrapper = $form.find('#pay-paymentReference').closest('.field-cont')
    if paymentReference and paymentReference.length <= 128
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_total= ( $form, total ) ->
    valid = false
    field_wrapper = $form.find('#pay-total').closest('.field-cont')
    if parseInt(total) > 0
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_cc_no= ( $form, ccNo ) ->
    valid = false
    field_wrapper = $form.find('#pay-ccNo').closest('.field-cont')
    if /^\d{12,19}$/g.test(ccNo)
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_cvv= ( $form, cvv ) ->
    valid = false
    field_wrapper = $form.find('#pay-cvv').closest('.field-cont')
    if /^\d{3,5}$/g.test(cvv)
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_exp_month= ( $form, expMonth, expYear ) ->
    currYear = new Date().getFullYear()
    currentMonth = new Date().getMonth()
    valid = false
    field_wrapper_month = $form.find('#pay-expMonth').closest('.field-cont')
    field_wrapper_year = $form.find('#pay-expYear').closest('.field-cont')

    if parseInt(expMonth) > 0 and parseInt(expMonth) <= 12
      field_wrapper_month.removeClass('error')
      valid = true

      if parseInt(expYear)
        if parseInt(expYear) == currYear and currentMonth >= parseInt(expMonth)
          field_wrapper_month.addClass('error')
          field_wrapper_year.addClass('error')
          valid = false
        else
          field_wrapper_month.removeClass('error')
          field_wrapper_year.removeClass('error')
          valid = true
    else
      field_wrapper_month.addClass('error')
    return valid

  _validate_exp_year= ( $form, expMonth, expYear ) ->
    currYear = new Date().getFullYear()
    currentMonth = new Date().getMonth()
    valid = false
    field_wrapper_month = $form.find('#pay-expMonth').closest('.field-cont')
    field_wrapper_year = $form.find('#pay-expYear').closest('.field-cont')

    if parseInt(expYear) >= currYear and parseInt(expYear) < currYear + 10
      field_wrapper_year.removeClass('error')
      valid = true
      if parseInt(expMonth)
        if parseInt(expYear) == currYear and currentMonth >= parseInt(expMonth)
          field_wrapper_month.addClass('error')
          field_wrapper_year.addClass('error')
          valid = false
        else
          field_wrapper_month.removeClass('error')
          field_wrapper_year.removeClass('error')
          valid = true
    else
      field_wrapper_year.addClass('error')
    return valid

  _validate_country= ( $form, country ) ->
    valid = false
    field_wrapper = $form.find('#pay-country').closest('.field-cont')
    if country and country.length < 64
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_state= ( $form, country, state ) ->
    valid = false
    field_wrapper = $form.find('#pay-state').closest('.field-cont')
    if (reqStates.indexOf(country) == -1) or (state and state.length < 64)
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_zip_code= ( $form, country, zipCode ) ->
    valid = false
    field_wrapper = $form.find('#pay-zipCode').closest('.field-cont')
    if (reqZipCode.indexOf(country) == -1) or (zipCode and zipCode.length < 16)
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_city= ( $form, city ) ->
    valid = false
    field_wrapper = $form.find('#pay-city').closest('.field-cont')
    if city and city.length < 64
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_address_first= ( $form, addrLine1 ) ->
    valid = false
    field_wrapper = $form.find('#pay-addrLine1').closest('.field-cont')
    if addrLine1 and addrLine1.length <= 64
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _validate_address_second= ( $form, country, addrLine2 ) ->
    valid = false
    field_wrapper = $form.find('#pay-addrLine2').closest('.field-cont')
    if (reqAddrLine2.indexOf(country) == -1) or (addrLine2 and addrLine2.length <= 64)
      field_wrapper.removeClass('error')
      valid = true
    else
      field_wrapper.addClass('error')
    return valid

  _remove_form_overlay= ->
    $('#pay-form').removeClass 'freeze'

    if $('.form-overlay')
      setTimeout (->
        $('.form-overlay').animate
          opacity: 0
          , 'fast'
          , ->
            $(this).remove()
      ), 400

  _reset_cvv_field = () ->
    $('.payment-form').find('#pay-cvv').val("")

  getFormVals = () ->
    vals = {}
    if $form
      vals =
        name: $form.find('#pay-name').val().trim()
        email: $form.find('#pay-email').val().trim()
        total: $form.find('#pay-total').val().trim().replace(/,/g, '')
        ccNo: $form.find('#pay-ccNo').val().trim().replace(/\s/g, '')
        cvv: $form.find('#pay-cvv').val().trim()
        expMonth: $form.find('#pay-expMonth').val().trim()
        expYear: $form.find('#pay-expYear').val().trim()
        country: $form.find('#pay-country').val().trim()
        state: $form.find('#pay-state').val().trim()
        zipCode: $form.find('#pay-zipCode').val().trim()
        city: $form.find('#pay-city').val().trim()
        addrLine1: $form.find('#pay-addrLine1').val().trim()
        addrLine2: $form.find('#pay-addrLine2').val().trim()
        paymentReference: $form.find('#pay-paymentReference').val().trim()
    vals

  reqStates = [
    'USA', 'AFG', 'ALB',  'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG',
    'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL',
    'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN',
    'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL',
    'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COK', 'CRI', 'CIV', 'HRV', 'CYP',
    'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST',
    'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'FXX', 'GUF', 'PYF', 'ATF', 'GAB',
    'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM',
    'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN',
    'IRQ', 'IRL', 'ISR', 'ITA', 'JAM', 'JPN', 'JOR', 'KAZ', 'KEN', 'KIR', 'KOR',
    'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX',
    'MAC', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS',
    'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'NAM',
    'NRU', 'NPL', 'NLD', 'ANT', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK',
    'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL',
    'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'SHN', 'KNA',
    'LCA', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SCG', 'SYC',
    'SLE', 'SGP', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'ESP', 'LKA', 'SUR', 'SJM',
    'SWZ', 'SWE', 'CHE', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON',
    'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'UMI',
    'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM',
    'YUG', 'ZAR', 'ZMB', 'ZWE' ]
  reqZipCode = reqStates
  reqAddrLine2 = [ 'CHN', 'JPN', 'RUS' ]
  emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

  validate = ->
    vals = do getFormVals
    valid = 0
    total = Object.keys(vals).length

    if $form
      if _validate_name( $form, vals.name ) == true
        valid++

      if _validate_email( $form, vals.email ) == true
        valid++

      if _validate_payment_reference( $form, vals.paymentReference ) == true
        valid++

      if _validate_total( $form, vals.total ) == true
        valid++

      if _validate_cc_no( $form, vals.ccNo ) == true
        valid++

      if _validate_cvv( $form, vals.cvv ) == true
        valid++

      if _validate_exp_month( $form, vals.expMonth, vals.expYear ) == true
        valid++

      if _validate_exp_year( $form, vals.expMonth, vals.expYear ) == true
        valid++

      if _validate_country( $form, vals.country ) == true
        valid++

      if _validate_state( $form, vals.country, vals.state ) == true
        valid++

      if _validate_zip_code( $form, vals.country, vals.zipCode ) == true
        valid++

      if _validate_city( $form, vals.city ) == true
        valid++

      if _validate_address_first( $form, vals.addrLine1 ) == true
        valid++

      if _validate_address_second( $form, vals.country, vals.addrLine2 ) == true
        valid++

    valid == total

  successCallback = (data) ->
    vals = do getFormVals

    sendData =
      token: data.response.token.token
      total: vals.total
      name: vals.name
      email: vals.email
      addrLine1: vals.addrLine1
      addrLine2: vals.addrLine2
      city: vals.city
      state: vals.state
      zipCode: vals.zipCode
      country: vals.country
      paymentReference: vals.paymentReference

    $.ajax
      url: 'payment.php'
      type: 'POST'
      data: JSON.stringify(sendData)
      dataType: 'json'
      contentType : 'application/json'
      success: (res) ->
        $('.notifications-list').append '<div class="notification-item success"><div class="content"><p class="notification-text">Thank You <br> Your payment has been processed</p><button type="button" class="notification-close close"><span>×</span></button></div></div>'
        $('.notification-item.success').on 'click', (e)->
          e.preventDefault()
          $(e.currentTarget).closest('.notification-item').stop().animate
            top: - $(this).outerHeight()
            , 'slow'
            , ->
              $(this).off 'click'
              $(this).remove()

        $('.notification-item.success').stop().animate { top: 0 }, 'slow'

        _reset_cvv_field()
        _remove_form_overlay()

      error: (err) ->
        $('.notifications-list').append('<div class="notification-item danger"><div class="content"><p class="notification-text">' + JSON.parse(err.responseText).message + '</p><button type="button" class="notification-close close"><span>×</span></button></div></div>')
        $('.notification-item.danger').on 'click', (e)->
          e.preventDefault()
          $(e.currentTarget).closest('.notification-item').stop().animate
            top: - $(this).outerHeight()
            , 'slow'
            , ->
              $(this).off 'click'
              $(this).remove()
        $('.notification-item.danger').stop().animate { top: 0 }, 'slow'

        _reset_cvv_field()
        _remove_form_overlay()

    return

  errorCallback = (data) ->
    if data.errorCode == 200
      tokenRequest()
    else
      alert(JSON.stringify(data))
    return

  tokenRequest = ->
    vals = do getFormVals
    args =
      sellerId: '102953008'
      publishableKey: 'AFD6515F-D40C-49DF-8262-FA1B0EBE65A3'
      ccNo: vals.ccNo
      cvv: vals.cvv
      expMonth: vals.expMonth
      expYear: vals.expYear

    TCO.requestToken successCallback, errorCallback, args
    return

  $ ->
    TCO.loadPubKey 'production' # or 'sandbox'
    $form = $('#pay-form')

    $form.find('#pay-name'). on 'change', (e)->
      e.preventDefault
      _validate_name( $form, $form.find('#pay-name').val().trim() )

    $form.find('#pay-email'). on 'change', (e)->
      e.preventDefault
      _validate_email( $form, $form.find('#pay-email').val().trim() )

    $form.find('#pay-paymentReference'). on 'change', (e)->
      e.preventDefault
      _validate_payment_reference( $form, $form.find('#pay-paymentReference').val().trim() )

    $form.find('#pay-total'). on 'change', (e)->
      e.preventDefault
      _validate_total( $form, $form.find('#pay-total').val().trim().replace(/,/g, '') )

    $form.find('#pay-ccNo'). on 'change', (e)->
      e.preventDefault
      _validate_cc_no( $form, $form.find('#pay-ccNo').val().trim().replace(/\s/g, '') )

    $form.find('#pay-cvv'). on 'change', (e)->
      e.preventDefault
      _validate_cvv( $form, $form.find('#pay-cvv').val().trim() )

    $form.find('#pay-expMonth'). on 'change', (e)->
      e.preventDefault
      _validate_exp_month( $form, $form.find('#pay-expMonth').val().trim(), $form.find('#pay-expYear').val().trim() )

    $form.find('#pay-expYear'). on 'change', (e)->
      e.preventDefault
      _validate_exp_year( $form, $form.find('#pay-expMonth').val().trim(), $form.find('#pay-expYear').val().trim() )

    $form.find('#pay-country'). on 'change', (e)->
      e.preventDefault
      _validate_country( $form, $form.find('#pay-country').val().trim() )

    $form.find('#pay-state'). on 'change', (e)->
      e.preventDefault
      _validate_state( $form, $form.find('#pay-country').val().trim(), $form.find('#pay-state').val().trim() )

    $form.find('#pay-zipCode'). on 'change', (e)->
      e.preventDefault
      _validate_zip_code( $form, $form.find('#pay-country').val().trim(), $form.find('#pay-zipCode').val().trim() )

    $form.find('#pay-city'). on 'change', (e)->
      e.preventDefault
      _validate_city( $form, $form.find('#pay-city').val().trim() )

    $form.find('#pay-addrLine1'). on 'change', (e)->
      e.preventDefault
      _validate_address_first( $form, $form.find('#pay-addrLine1').val().trim() )

    $form.find('#pay-addrLine2'). on 'change', (e)->
      e.preventDefault
      _validate_address_second( $form, $form.find('#pay-country').val().trim(), $form.find('#pay-addrLine2').val().trim() )

    $form.submit (e) ->
      do e.preventDefault

      if do validate
        $form.addClass('freeze').append('<span class="form-overlay visible"><span class="overlay-spinner"></span></span>')
        tokenRequest()

      return
    return
