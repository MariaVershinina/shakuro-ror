_mail_form_init = function(send_mail_block) {
  var contact_form = $('#contactus');

  contact_form.submit(function(e){
    e.preventDefault();

    var url = $(this).prop('action');
    var data = $(this).serialize();

    $.ajax(url, {type: 'POST', data: data, dataType: 'json',
      success: function(response){
      },
      beforeSend: function() {
        _mail_send_handler();
        $('.drop-us-block form')[0].reset();
      },
      complete: function(){
      }
    });
  });
}

_send_mail_again_handler = function(send_mail_block) {
  send_mail_block.find('.send-mail-again-btn').on('click', function(e) {
    e.preventDefault();

    send_mail_block.find('.form').animate({
      opacity: 1
    }, 400);

    send_mail_block.find('.mail-send').attr('id', 'deleted').animate({
      'opacity': 0
    }, 50, function() {
      var element;
      element = document.getElementById('deleted');
      if (element !== null) {
        return element.parentNode.removeChild(element);
      }
    });
  });
}

_mail_send_handler = function() {
  var send_mail_block = $('.drop-us-block'),
      mail_send_success = '<div class="mail-send"><span class="form-sub-title">Thank you!</span><span class="section-title">your message was sent</span><div><span class="mail-send-img"></span></div><a href="#" class="send-mail-again-btn" title="Another one?">Another one?</a></div>';

  send_mail_block.find('.row .form-wrapper').append(mail_send_success);

  send_mail_block.find('.mail-send').animate({
    opacity: 1
  }, 400);
  send_mail_block.find('.form').animate({
    opacity: 0
  }, 50);

  _send_mail_again_handler(send_mail_block);
}

function Validate_Index_Form() {

  $('.drop-us-block input[name="submit"]').click(
    function(){
      var submit = true;
      var mail = $('.drop-us-block input[name="email"]');
      var post = $('.drop-us-block textarea');

      mail.removeClass("error");
      post.removeClass("error");

      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      if(pattern.test(mail.val())) {
        mail.removeClass("error");
        submit=true;
      } else {
        mail.addClass("error");
        submit=false;
      }

      if(post.val()==''){
        post.addClass("error");
        submit=false;
      }

      if(submit){
        var contact_form = $('#contactus');
        contact_form.submit()
      }
      return false;
  });

  _mail_form_init()
}
