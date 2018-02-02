//On Page load: 

$ (function() {
	// set variables:
		// buttonTitles = ["baseball", "hockey", "football"];
		var buttonTitles = ["snake", "owl", "tiger"];
		// displayButtons - function
		function displayButton () {
		// Clear previous buttons from screen
		$("#buttons").val("");
		// for loop through buttonTitles
			for (var i = 0; i < buttonTitles.length; i++) {
				// create a jQuery button
				var button = $("<button>");
				button.addClass("individualButton");
				// add attribute to jQuery button created (attribute title: "button-title", attribute value="button-title at index")
				button.attr("button-title", buttonTitles[i])
				//put the current buttonTitle that we are looping through in the button (.text, or .html)
				button.html(buttonTitles[i]);
				//append the button to the page
				$("#buttons").append(button);
			}
		}

		displayButton();

		//when the user clicks on one of the buttons - function
		$(document).on("click", ".individualButton", function(event) {
			// prevent default
			event.preventDefault();
			// get the attribute of the button clicked, and store in a variable
			console.log($(this));
			console.log($(this).attr("button-title"))
			var searchTerm = $(this).attr("button-title");
			console.log(searchTerm)
			var rating = "";
			//clear out old images from page (.empty)
			$("#imageswithDescription").empty();
			// AJAX call to GIPHY
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating= " + rating + "&limit=10&api_key=IZ1X641xsZu5eeKFKlzEF6TSwOBQnrGZ"

			$.ajax({
				// URL | //https:
				url: queryURL,
				// Method | GET
				method: "GET"

			}).done(function(response) {
			//.done
				console.log(response);
				// loop through response.data
				var results = (response.data);

				for (var i = 0; i < results.length; i++) {
					// create jQuery div
					var div = $("<div>")
					// create jQuery image
					var img = $("<img>")
					// set the src attribute of jQuery image to be the image from GIPHY response (data[i].images.original_still)
					img.attr("src", results[i].images.original_still.url);
					// create jQuery paragraph
					var p = $("<p>");
					// put the rating from GIPHY response into paragraph created (response.data[i].rating)
					p.html("Rating: " + results[i].rating);
					//append jQuery image to jQuery div
					div.append(img);
					//append jQuery paragraph to jQuery div
					div.append(p);
					//append jQuery div to the page
					$("#imageswithDescription").append(div);
					
				}

			}); //END AJAX CALL

		}) // END BUTTON CLICK FUNCTION

		// on click of form submit button - function
		$("#formSubmit").on("click", function() {
			var userText = $("#exampleInputAnimal1").val();
			var button = $("<button>");
			$("#buttons").empty();
			button.attr("button-title", userText);
			button.addClass("individualButton");

			//create variable of user input text field
			
			// push variable just created to array (buttonTitles)
			console.log(userText);
			button.text(userText);
			$("#buttons").prepend(button);
			// run displayButtons function
			displayButton();
		
		}); // END FORM SUBMIT BUTTON

		//on click of image div - function
		$("img").on("click", function() {
			var state = $(this).attr("data-state");
			$("img").attr("data-state", "still")

			 $("img").attr()

		        if (state === "still") {
		              //reset image src to animated version
		               $(this).attr("src", $(this).attr("data-animate"));
		              //change state variable to animate
		              $(this).attr("data-state", "animate");
		          

		        } else {
		            //it's already animated
		            //reset image src to still version
		            $(this).attr("src", $(this).attr("data-still"));
		            // change state variable to still 
		            $(this).attr("data-state", "still")

		        }


		})// END IMAGE CLICK FUNCTION
					
			

}) // END READY FUNCTION


