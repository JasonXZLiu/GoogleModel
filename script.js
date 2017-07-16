$(function() {
	$('#lucky').click(function() {
			window.location='https://www.google.com/doodles';
	});
	$('#GoogleSearch').click(function() {
		GotoSearch();
	});
	$('#inputBar').keypress(function(e) {
		if(e.which == 13) {
				GotoSearch();
		}
	});
	 function GotoSearch() {
		var userInput = $('#inputBar').val();
		var userLength = userInput.length;
		if(userLength > 0) {
			$('body').html(userInput.length);
			var weblocation = "https://www.google.ca/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwiP-qKCibHPAhWFJR4KHcGsC5EQPQgD#hl=en&q=" + userInput;
			window.location=weblocation;
		} else {
			alert("Nothing was entered.");
			location.reload();
		};
	} ;
});