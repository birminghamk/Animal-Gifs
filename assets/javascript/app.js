//On Page load: 

$ (function() {
	// set variables:
		// buttonTitles = ["baseball", "hockey", "football"];
		var buttonTitles = ["x", "y", "x"];
		// displayButtons - function
		function displayButton () {
		// Clear previous buttons from screen
		// for loop through buttonTitles
			for (var i = 0; i < buttonTitles.length; i++) {
				// create a jQuery button
				var button = $("<button>");
				// add attribute to jQuery button created (attribute title: "button-title", attribute value="button-title at index")
				button.attr ({
					title: "button-title",
					value: "button-title at index"
				});
				//put the current buttonTitle that we are looping through in the button (.text, or .html)
				button.html(buttonTitles[i]);
				//append the button to the page
				$("#buttons").append(button);
			}
		}

		displayButton();
		
// 		//when the user clicks on one of the buttons - function
// 		$("#button").on("click", function(event) {
// 			// prevent default
// 			event.preventDefault();
// 			// get the attribute of the button clicked, and store in a variable
// 			var buttonAttr = button.val();
// 			//clear out old images from page (.empty)
// 			$("#imageswithDescription").empty();
// 			// AJAX call to GIPHY
// 			var queryURL = "https://www.api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=" + num + "&rating=" + rating + "&api_key=IZ1X641xsZu5eeKFKlzEF6TSwOBQnrGZ"

// 			$.ajax({
// 				// URL | //https:
// 				url: queryURL,
// 				// Method | GET
// 				method: "GET"

// 			}).then(function(response){
// 			// .done
// 				// loop through response.data
// 				for (var i = 0; i < repsonse.data ; i++) {
// 					// create jQuery div
// 					var div = $("<div>")
// 					// create jQuery image
// 					var img = $("<img>")
// 					// set the src attribute of jQuery image to be the image from GIPHY response (data[i].images.original_still)
// 					img.attr("src", data[i].images.original_still);
// 					// create jQuery paragraph
// 					var p = $("<p>");
// 					// put the rating from GIPHY response into paragraph created (response.data[i].rating)
// 					p.html("Rating: " + response.data[i].rating);
// 					//append jQuery image to jQuery div
// 					div.append(img);
// 					//append jQuery paragraph to jQuery div
// 					div.append(p);
// 					//append jQuery div to the page
// 					div.append("#displayPage");
// 				}

// 			}); //END AJAX CALL

// 		})

// 			// on click of form submit button - function
// 			$("#formSubmit").on("click", function() {
// 				//create variable of user input text field
// 				// push varialbe just created to array (buttonTitles)
// 				// run displayButtons function
// 			//on click of image div - function
// 					//
// 			};

}) // END READY FUNCTION


