(function() {
  var $W = $(window);

  $(document).ready(function() {
    Sticky_Header_Init();
    First_Slide_Height();
    Mobile_Nav_Vertical_Centered();
    Validate_Index_Form();
    Scroll_To_Form();
    Mobile_Menu_Init();
    Touch_Disable();
    Touch_Enable();
    B23_Tablet_Centered();
    Slider_Init();
    iPhonesFadeInEffect('.b51');
  });

  $W.scroll(function() {
    Sticky_Header_Init();
    iPhonesFadeInEffect('.b51');
  });

  $W.load(function() {
    Before_Loading();
  });

  $W.resize(function() {
    Sticky_Header_Init();
    First_Slide_Height();
    Mobile_Nav_Vertical_Centered();
    B23_Tablet_Centered();
  });
}).call(this);
