(function () {
  var $W = $(window);

  $(document).ready(function () {
    Before_Loading();
    Sticky_Header_Init();
    Mobile_Menu_Init();

    /*material intpus*/
    $('input').blur(function () {
      if ($(this).val()) {
        $(this).addClass('used');
      } else {
        $(this).removeClass('used');
      }
    });

    /*scroll to*/
    $('.scroll-to').click(function (e) {
      var hash = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('.header').height(),
      }, 500);

      if ($('.mobile-menu-button').hasClass('is-opened')) {
        $('.mobile-menu-button').click();
      }
    });

    formInit();
  });

  $W.scroll(function () {
    Sticky_Header_Init();
  });

  $W.resize(function () {
    Sticky_Header_Init();
  });

  function formInit() {
    $('#type').select2({
      placeholder: 'Select at least one',
    });

    var $formWr = $('#hire .project-form');
    var $form = $('#project-form');
    var $name = $form.find('#name');
    var $email = $form.find('#email');

    $form.submit(function (e) {
      e.preventDefault();

      var valid = 0;
      var total = 2;

      if ($email.val().trim()) {
        $name.removeClass('error');
        valid++;
      } else {
        $name.addClass('error');
      }

      if (/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test($email.val())) {
        $email.removeClass('error');
        valid++;
      } else {
        $email.addClass('error');
      }

      if (valid == total) {
        var url = $(this).prop('action');
        var data = $(this).serialize();
        $.ajax(url, {
          type: 'POST',
          data: data,
          dataType: 'json',
          beforeSend: function () {
            $formWr.html(
              '<div class="project-sent">' +
                '<img src="img/rubyonrails/ok.png" ' +
                  'srcset="img/rubyonrails/ok@2x.png 2x">' +
                '<div class="project-sent-title">Thank you!</div><div>We will contact you soon.</div>' +
              '</div>'
            );
          },
        });
      }
    });
  }

  function Showcase(opts) {
    this.top = window.pageYOffset;
    this.$header = opts.$header || $('.showcase-heading');
    this.$items = opts.$items || $('.showcase-item');
    this.$posItems = this.$items.find('.showcase-mac');
    this.$textItems = this.$items.find('.showcase-block');

    this.calcOffsets();
    this.setFixedIfNeed();
    this.setTextOpacity();

    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('load', this.onLoad.bind(this));
  }

  Showcase.prototype.calcOffsets = function (e) {
    this.offsets = [];

    $.each(this.$items, function (id, item) {
      this.offsets.push($(item).offset().top);
    }.bind(this));
  };

  Showcase.prototype.setFixedIfNeed = function () {
    var nextCssPos = 'relative';
    var nextCssPosFirstMac = 'relative';

    if ($W.width() > 1180) {
      if (
        this.top >= this.offsets[0] &&
        this.top < this.offsets[this.offsets.length - 1]
      ) {
        nextCssPos = nextCssPosFirstMac = 'fixed';
      } else {
        nextCssPos = 'fixed';
        nextCssPosFirstMac = 'absolute';
      }

      this.$header.css('position', nextCssPosFirstMac);
    } else {
      this.$header.css('position', 'absolute');
    }

    // set new pos if need
    if (this.cssPos != nextCssPos) {
      this.$posItems.css('position', nextCssPos);
    }

    // set `absolute` for last item if scroll enough
    if (this.top > this.offsets[this.offsets.length - 1]) {
      this.$posItems.last().css('position', 'absolute');
    } else {
      this.$posItems.last().css('position', nextCssPos);
    }

    // set position for first mac (to remove `fixed` if need)
    this.$posItems.eq(0).css('position', nextCssPosFirstMac);

    // force update clip (hack for firefox and safari)
    this.$posItems.css('transform', 'translateZ(0px)');
    setTimeout(function () {
      this.$posItems.css('transform', 'translateZ(0)');
    }.bind(this), 0);

    this.cssPos = nextCssPos;
  };

  Showcase.prototype.setTextOpacity = function () {
    if ($W.width() > 1180) {
      $.each(this.$textItems, function (id, item) {
        var nextOpacity = 1;
        var $item = $(item);
        var child = $item.children().first();
        var childTop = child[0].getBoundingClientRect().top;

        if ($W.height() > childTop) {
          if (childTop > 190 && childTop < 240) {
            nextOpacity = (childTop - 190) * 2 / 100;
          } else if (childTop < 190) {
            nextOpacity = 0;
          }
        }

        $item.css('opacity', nextOpacity);
      }.bind(this));
    } else {
      this.$textItems.css('opacity', 1);
    }
  };

  Showcase.prototype.onResize = function (e) {
    this.top = window.pageYOffset;
    this.calcOffsets();
    this.setFixedIfNeed();
    this.setTextOpacity();
  };

  Showcase.prototype.onScroll = function (e) {
    this.top = window.pageYOffset;
    this.setFixedIfNeed();
    this.setTextOpacity();
  };

  Showcase.prototype.onLoad = Showcase.prototype.onResize; // currently the same

  var showcase = new Showcase({
    $items: $('.showcase-item'),
    $header: $('.showcase-heading'),
  });

  window.showcase = showcase;
}).call(this);
