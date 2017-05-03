var $D = $(document),
    $W = $(window);

$D.ready(
  function() {
    Jribbble_Init();
    Fullpage_Init();
    Sticky_Header_Init();
    Mobile_Nav_Vertical_Centered();
    Mouse();
    Validate_Index_Form();
    Scroll_To_Form();
    Mobile_Menu_Init();
    Touch_Disable();
    Touch_Enable();
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
    Mobile_Nav_Vertical_Centered();
  }
);
