(function ($) {
  "use strict";
  // Back to top button
  $(window).scroll(function () {
      // if ($(this).scrollTop() > 100) {
      //     $('.back-to-top').fadeIn('slow');
      // } else {
      //     $('.back-to-top').fadeOut('slow');
      // }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
  
  // Quantity
  $('.qty button').on('click', function () {
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('btn-plus')) {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      $button.parent().find('input').val(newVal);
  });
  
  
  // Shipping address show hide
  $('.checkout #shipto').change(function () {
      if($(this).is(':checked')) {
          $('.checkout .shipping-address').slideDown();
      } else {
          $('.checkout .shipping-address').slideUp();
      }
  });
  
  
  // Payment methods show hide
  $('.checkout .payment-method .custom-control-input').change(function () {
      if ($(this).prop('checked')) {
          var checkbox_id = $(this).attr('id');
          $('.checkout .payment-method .payment-content').slideUp();
          $('#' + checkbox_id + '-show').slideDown();
      }
  });
})(jQuery);

