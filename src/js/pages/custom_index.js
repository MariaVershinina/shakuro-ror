var $D = $(document),
    $W = $(window);

$D.ready(
  function() {
    Sticky_Header_Init();
    Mobile_Nav_Vertical_Centered();
    Mobile_Menu_Init();
  }
);

$W.scroll(
  function() {
    Sticky_Header_Init();
  }
);


$W.resize(
  function() {
    Sticky_Header_Init();
    Mobile_Nav_Vertical_Centered();
  }
);
