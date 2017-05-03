var $D = $(document),
    $W = $(window);

$D.ready(
  function() {
    Fullpage_Init();
    Sticky_Header_Init();
    Mobile_Nav_Vertical_Centered();
    Mouse();
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
