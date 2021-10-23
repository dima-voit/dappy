// $(document).ready(function() {
//   $('.header__burger').click(function(event) {
//     $('.nav', '.header__burger').toggleClass('active');
//   });
// });

$(document).ready(function() {
  $('.header__burger').on(click, function(event) {
    $('.nav', '.header__burger').toggleClass('active');
  });
});