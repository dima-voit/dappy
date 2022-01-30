$(document).ready(function() {
  $('.header__burger').on('click', function(event) {
    $('.nav, .header__burger').toggleClass('active');
  });
});