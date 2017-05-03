var $D = $(document),
    $W = $(window);

$D.ready(
  function() {
    Sticky_Header_Init();
    First_Slide_Height();
    Mobile_Nav_Vertical_Centered();
    Validate_Index_Form();
    Scroll_To_Form();
    Mobile_Menu_Init();
    Touch_Disable();
    Touch_Enable();
    B23_Tablet_Centered();
  }
);

$W.scroll(
  function() {
    Sticky_Header_Init();
  }
);

$W.load(
  function() {
    Before_Loading();
  }
);

$W.resize(
  function() {
    Sticky_Header_Init();
    First_Slide_Height();
    Mobile_Nav_Vertical_Centered();
    B23_Tablet_Centered();
  }
);
