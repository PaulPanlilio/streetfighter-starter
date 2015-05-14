$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left': '1200px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '510px');
    });
})
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

$(document).keydown(function(x) {
		$('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
	});
$(document).keyup(function(x) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	} );
$(document).keypress(function(x) {
		$('.ryu-cool').show();
		$('.ryu-still').hide();
	} );
  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}