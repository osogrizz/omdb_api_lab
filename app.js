$.ajaxSetup({
	
	data: {
		access_token: "ed810296b2eb2083a4e3239b2bc828a3aa109408"
	}
});



$(document).ready (function () {

// event listener for submit.

	$("form").on("submit", function(e) {
		
// prevent default action of page reload.

		e.preventDefault();

// define ? title in order to target the event and use as parameter for callback function. 

		var title = e.target.movieTitle.value;
		
		$.getJSON("http://www.omdbapi.com/?t="  + title,  function(data) {
			console.log(data);
			$("body").append("<li>" +  data.Title, "<br>" +  data.Genre,"<br>" + data.Language + "</li>");
			
			// Attempt to prevent undefined.Does not work...

			if ( data === false ) {
				e.preventDefault();
				$("body").append("<li>" + data.Error + "</li>");

			}


	});


  });

});


// key ed810296b2eb2083a4e3239b2bc828a3aa109408