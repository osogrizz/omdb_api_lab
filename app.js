$.ajaxSetup({
	
	data: {
		access_token: "ed810296b2eb2083a4e3239b2bc828a3aa109408"
	}
});




$(document).ready (function () {
	$("form").on("submit", function(e) {
		
		e.preventDefault();
		var title = e.target.movieTitle.value;
		console.log(title);
		$.getJSON("http://www.omdbapi.com/?t="  + title,  function(data) {
			console.log(data);
			$("body").append("<li>" +  data.Title, "<br>" +  data.Genre,"<br>" + data.Language + "</li>");

			if (Response === false) {
				$("body").append(Error);
			}

	});

  });

});


// key ed810296b2eb2083a4e3239b2bc828a3aa109408