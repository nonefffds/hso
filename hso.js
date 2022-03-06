var bubble = function() {
  var $button = $(this);
  if (!$button.hasClass('activated')) {
    $button.addClass('activated');
    $button.on('animationend webkitAnimationEnd oAnimationEnd', function() {
      $button.removeClass('activated');
    });
  }
};

$('.bubble').on('mouseup', bubble);