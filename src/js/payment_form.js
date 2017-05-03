(function() {
  (function() {
    var $form, _remove_form_overlay, _reset_cvv_field, _validate_address_first, _validate_address_second, _validate_cc_no, _validate_city, _validate_country, _validate_cvv, _validate_email, _validate_exp_month, _validate_exp_year, _validate_name, _validate_payment_reference, _validate_state, _validate_total, _validate_zip_code, emailRegExp, errorCallback, getFormVals, reqAddrLine2, reqStates, reqZipCode, successCallback, tokenRequest, validate;
    $form = null;
    _validate_name = function($form, name) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-name').closest('.field-cont');
      if (name && name.length <= 128) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_email = function($form, email) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-email').closest('.field-cont');
      if (emailRegExp.test(email) && email.length <= 64) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_payment_reference = function($form, paymentReference) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-paymentReference').closest('.field-cont');
      if (paymentReference && paymentReference.length <= 128) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_total = function($form, total) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-total').closest('.field-cont');
      if (parseInt(total) > 0) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_cc_no = function($form, ccNo) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-ccNo').closest('.field-cont');
      if (/^\d{12,19}$/g.test(ccNo)) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_cvv = function($form, cvv) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-cvv').closest('.field-cont');
      if (/^\d{3,5}$/g.test(cvv)) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_exp_month = function($form, expMonth, expYear) {
      var currYear, currentMonth, field_wrapper_month, field_wrapper_year, valid;
      currYear = new Date().getFullYear();
      currentMonth = new Date().getMonth();
      valid = false;
      field_wrapper_month = $form.find('#pay-expMonth').closest('.field-cont');
      field_wrapper_year = $form.find('#pay-expYear').closest('.field-cont');
      if (parseInt(expMonth) > 0 && parseInt(expMonth) <= 12) {
        field_wrapper_month.removeClass('error');
        valid = true;
        if (parseInt(expYear)) {
          if (parseInt(expYear) === currYear && currentMonth >= parseInt(expMonth)) {
            field_wrapper_month.addClass('error');
            field_wrapper_year.addClass('error');
            valid = false;
          } else {
            field_wrapper_month.removeClass('error');
            field_wrapper_year.removeClass('error');
            valid = true;
          }
        }
      } else {
        field_wrapper_month.addClass('error');
      }
      return valid;
    };
    _validate_exp_year = function($form, expMonth, expYear) {
      var currYear, currentMonth, field_wrapper_month, field_wrapper_year, valid;
      currYear = new Date().getFullYear();
      currentMonth = new Date().getMonth();
      valid = false;
      field_wrapper_month = $form.find('#pay-expMonth').closest('.field-cont');
      field_wrapper_year = $form.find('#pay-expYear').closest('.field-cont');
      if (parseInt(expYear) >= currYear && parseInt(expYear) < currYear + 10) {
        field_wrapper_year.removeClass('error');
        valid = true;
        if (parseInt(expMonth)) {
          if (parseInt(expYear) === currYear && currentMonth >= parseInt(expMonth)) {
            field_wrapper_month.addClass('error');
            field_wrapper_year.addClass('error');
            valid = false;
          } else {
            field_wrapper_month.removeClass('error');
            field_wrapper_year.removeClass('error');
            valid = true;
          }
        }
      } else {
        field_wrapper_year.addClass('error');
      }
      return valid;
    };
    _validate_country = function($form, country) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-country').closest('.field-cont');
      if (country && country.length < 64) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_state = function($form, country, state) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-state').closest('.field-cont');
      if ((reqStates.indexOf(country) === -1) || (state && state.length < 64)) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_zip_code = function($form, country, zipCode) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-zipCode').closest('.field-cont');
      if ((reqZipCode.indexOf(country) === -1) || (zipCode && zipCode.length < 16)) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_city = function($form, city) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-city').closest('.field-cont');
      if (city && city.length < 64) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_address_first = function($form, addrLine1) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-addrLine1').closest('.field-cont');
      if (addrLine1 && addrLine1.length <= 64) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _validate_address_second = function($form, country, addrLine2) {
      var field_wrapper, valid;
      valid = false;
      field_wrapper = $form.find('#pay-addrLine2').closest('.field-cont');
      if ((reqAddrLine2.indexOf(country) === -1) || (addrLine2 && addrLine2.length <= 64)) {
        field_wrapper.removeClass('error');
        valid = true;
      } else {
        field_wrapper.addClass('error');
      }
      return valid;
    };
    _remove_form_overlay = function() {
      $('#pay-form').removeClass('freeze');
      if ($('.form-overlay')) {
        return setTimeout((function() {
          return $('.form-overlay').animate({
            opacity: 0
          }, 'fast', function() {
            return $(this).remove();
          });
        }), 400);
      }
    };
    _reset_cvv_field = function() {
      return $('.payment-form').find('#pay-cvv').val("");
    };
    getFormVals = function() {
      var vals;
      vals = {};
      if ($form) {
        vals = {
          name: $form.find('#pay-name').val().trim(),
          email: $form.find('#pay-email').val().trim(),
          total: $form.find('#pay-total').val().trim().replace(/,/g, ''),
          ccNo: $form.find('#pay-ccNo').val().trim().replace(/\s/g, ''),
          cvv: $form.find('#pay-cvv').val().trim(),
          expMonth: $form.find('#pay-expMonth').val().trim(),
          expYear: $form.find('#pay-expYear').val().trim(),
          country: $form.find('#pay-country').val().trim(),
          state: $form.find('#pay-state').val().trim(),
          zipCode: $form.find('#pay-zipCode').val().trim(),
          city: $form.find('#pay-city').val().trim(),
          addrLine1: $form.find('#pay-addrLine1').val().trim(),
          addrLine2: $form.find('#pay-addrLine2').val().trim(),
          paymentReference: $form.find('#pay-paymentReference').val().trim()
        };
      }
      return vals;
    };
    reqStates = ['USA', 'AFG', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COK', 'CRI', 'CIV', 'HRV', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'FXX', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRQ', 'IRL', 'ISR', 'ITA', 'JAM', 'JPN', 'JOR', 'KAZ', 'KEN', 'KIR', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'NAM', 'NRU', 'NPL', 'NLD', 'ANT', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'SHN', 'KNA', 'LCA', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SCG', 'SYC', 'SLE', 'SGP', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'ESP', 'LKA', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'UMI', 'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'YUG', 'ZAR', 'ZMB', 'ZWE'];
    reqZipCode = reqStates;
    reqAddrLine2 = ['CHN', 'JPN', 'RUS'];
    emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    validate = function() {
      var total, valid, vals;
      vals = getFormVals();
      valid = 0;
      total = Object.keys(vals).length;
      if ($form) {
        if (_validate_name($form, vals.name) === true) {
          valid++;
        }
        if (_validate_email($form, vals.email) === true) {
          valid++;
        }
        if (_validate_payment_reference($form, vals.paymentReference) === true) {
          valid++;
        }
        if (_validate_total($form, vals.total) === true) {
          valid++;
        }
        if (_validate_cc_no($form, vals.ccNo) === true) {
          valid++;
        }
        if (_validate_cvv($form, vals.cvv) === true) {
          valid++;
        }
        if (_validate_exp_month($form, vals.expMonth, vals.expYear) === true) {
          valid++;
        }
        if (_validate_exp_year($form, vals.expMonth, vals.expYear) === true) {
          valid++;
        }
        if (_validate_country($form, vals.country) === true) {
          valid++;
        }
        if (_validate_state($form, vals.country, vals.state) === true) {
          valid++;
        }
        if (_validate_zip_code($form, vals.country, vals.zipCode) === true) {
          valid++;
        }
        if (_validate_city($form, vals.city) === true) {
          valid++;
        }
        if (_validate_address_first($form, vals.addrLine1) === true) {
          valid++;
        }
        if (_validate_address_second($form, vals.country, vals.addrLine2) === true) {
          valid++;
        }
      }
      return valid === total;
    };
    successCallback = function(data) {
      var sendData, vals;
      vals = getFormVals();
      sendData = {
        token: data.response.token.token,
        total: vals.total,
        name: vals.name,
        email: vals.email,
        addrLine1: vals.addrLine1,
        addrLine2: vals.addrLine2,
        city: vals.city,
        state: vals.state,
        zipCode: vals.zipCode,
        country: vals.country,
        paymentReference: vals.paymentReference
      };
      $.ajax({
        url: 'payment.php',
        type: 'POST',
        data: JSON.stringify(sendData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(res) {
          $('.notifications-list').append('<div class="notification-item success"><div class="content"><p class="notification-text">Thank You <br> Your payment has been processed</p><button type="button" class="notification-close close"><span>×</span></button></div></div>');
          $('.notification-item.success').on('click', function(e) {
            e.preventDefault();
            return $(e.currentTarget).closest('.notification-item').stop().animate({
              top: -$(this).outerHeight()
            }, 'slow', function() {
              $(this).off('click');
              return $(this).remove();
            });
          });
          $('.notification-item.success').stop().animate({
            top: 0
          }, 'slow');
          _reset_cvv_field();
          return _remove_form_overlay();
        },
        error: function(err) {
          $('.notifications-list').append('<div class="notification-item danger"><div class="content"><p class="notification-text">' + JSON.parse(err.responseText).message + '</p><button type="button" class="notification-close close"><span>×</span></button></div></div>');
          $('.notification-item.danger').on('click', function(e) {
            e.preventDefault();
            return $(e.currentTarget).closest('.notification-item').stop().animate({
              top: -$(this).outerHeight()
            }, 'slow', function() {
              $(this).off('click');
              return $(this).remove();
            });
          });
          $('.notification-item.danger').stop().animate({
            top: 0
          }, 'slow');
          _reset_cvv_field();
          return _remove_form_overlay();
        }
      });
    };
    errorCallback = function(data) {
      if (data.errorCode === 200) {
        tokenRequest();
      } else {
        alert(JSON.stringify(data));
      }
    };
    tokenRequest = function() {
      var args, vals;
      vals = getFormVals();
      args = {
        sellerId: '102953008',
        publishableKey: 'AFD6515F-D40C-49DF-8262-FA1B0EBE65A3',
        ccNo: vals.ccNo,
        cvv: vals.cvv,
        expMonth: vals.expMonth,
        expYear: vals.expYear
      };
      TCO.requestToken(successCallback, errorCallback, args);
    };
    return $(function() {
      TCO.loadPubKey('production');
      $form = $('#pay-form');
      $form.find('#pay-name').on('change', function(e) {
        e.preventDefault;
        return _validate_name($form, $form.find('#pay-name').val().trim());
      });
      $form.find('#pay-email').on('change', function(e) {
        e.preventDefault;
        return _validate_email($form, $form.find('#pay-email').val().trim());
      });
      $form.find('#pay-paymentReference').on('change', function(e) {
        e.preventDefault;
        return _validate_payment_reference($form, $form.find('#pay-paymentReference').val().trim());
      });
      $form.find('#pay-total').on('change', function(e) {
        e.preventDefault;
        return _validate_total($form, $form.find('#pay-total').val().trim().replace(/,/g, ''));
      });
      $form.find('#pay-ccNo').on('change', function(e) {
        e.preventDefault;
        return _validate_cc_no($form, $form.find('#pay-ccNo').val().trim().replace(/\s/g, ''));
      });
      $form.find('#pay-cvv').on('change', function(e) {
        e.preventDefault;
        return _validate_cvv($form, $form.find('#pay-cvv').val().trim());
      });
      $form.find('#pay-expMonth').on('change', function(e) {
        e.preventDefault;
        return _validate_exp_month($form, $form.find('#pay-expMonth').val().trim(), $form.find('#pay-expYear').val().trim());
      });
      $form.find('#pay-expYear').on('change', function(e) {
        e.preventDefault;
        return _validate_exp_year($form, $form.find('#pay-expMonth').val().trim(), $form.find('#pay-expYear').val().trim());
      });
      $form.find('#pay-country').on('change', function(e) {
        e.preventDefault;
        return _validate_country($form, $form.find('#pay-country').val().trim());
      });
      $form.find('#pay-state').on('change', function(e) {
        e.preventDefault;
        return _validate_state($form, $form.find('#pay-country').val().trim(), $form.find('#pay-state').val().trim());
      });
      $form.find('#pay-zipCode').on('change', function(e) {
        e.preventDefault;
        return _validate_zip_code($form, $form.find('#pay-country').val().trim(), $form.find('#pay-zipCode').val().trim());
      });
      $form.find('#pay-city').on('change', function(e) {
        e.preventDefault;
        return _validate_city($form, $form.find('#pay-city').val().trim());
      });
      $form.find('#pay-addrLine1').on('change', function(e) {
        e.preventDefault;
        return _validate_address_first($form, $form.find('#pay-addrLine1').val().trim());
      });
      $form.find('#pay-addrLine2').on('change', function(e) {
        e.preventDefault;
        return _validate_address_second($form, $form.find('#pay-country').val().trim(), $form.find('#pay-addrLine2').val().trim());
      });
      $form.submit(function(e) {
        e.preventDefault();
        if (validate()) {
          $form.addClass('freeze').append('<span class="form-overlay visible"><span class="overlay-spinner"></span></span>');
          tokenRequest();
        }
      });
    });
  })();

}).call(this);
