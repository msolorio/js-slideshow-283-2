$(function(){
	$('#slides img').slice(1).hide();
	var slideIndex = 0;
	var topIndex = $('#slides img').length - 1;

	setInterval(function(){
		$('#slides img').eq(slideIndex).fadeOut(1000);
		if (slideIndex < topIndex) {
			$('#slides img').eq(slideIndex).next().fadeIn(1000);
			slideIndex++;
		} else {
			$('#slides img').eq(0).fadeIn(1000);
			slideIndex = 0;
		}  // end if/else
	}, 3000); // end set interval
});  // end ready