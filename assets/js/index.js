// Burger menu
$(document).ready(function() {
  $('.header__burger').on('click', function(event) {
    $('.nav, .header__burger').toggleClass('active');
  });
});

// Modal
$('[data-modal]').on('click', function(event) {
  event.preventDefault();
  let modal = $(this).data('modal');
  
  $('body').addClass('no-scroll');
  $(modal).addClass('show');
});

$('[data-modal-close]').on('click', function(event) {
  event.preventDefault();
  let modal = $(this).parents('.modal');
  
  $('body').removeClass('no-scroll');
  $(modal).removeClass('show');
});

$('.modal').on('click', function() {
  $('body').removeClass('no-scroll');
  $(this).removeClass('show');
});

$('.modal__content').on('click', function(event) {
  event.stopPropagation();
});
