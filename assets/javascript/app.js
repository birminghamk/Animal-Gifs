$(function() {
		var buttonTitles = ["snake", "owl", "lizard"];
		
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

		// click on button, display images/ratings
		$(document).on("click", ".individualButton", function(event) {
			// prevent default
			event.preventDefault();
			// get the attribute of the button clicked, and store in a variable
			var searchTerm = $(this).attr("button-title");
			//make variable for rating
			var rating = "";
			//clear out old images from page (.empty)
			$("#imageswithDescription").empty();
	
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating= " + rating + "&limit=10&api_key=IZ1X641xsZu5eeKFKlzEF6TSwOBQnrGZ"

			// AJAX call to GIPHY
			$.ajax({
				url: queryURL,
				method: "GET"

			}).done(function(response) {
			//.done
				console.log(response);
				// loop through response.data
				var results = (response.data);

				for (var i = 0; i < results.length; i++) {
					var div = $("<div>")
					div.addClass("images");
					var img = $("<img>")
					// set the src attribute of jQuery image to be the image from GIPHY
					img.attr("src", results[i].images.original_still.url);
					//set the resting data state to non-animated
					img.attr("data-state", "still")
					//set changed data-state to animate
					img.attr("data-state", "animate")
					//set data-animate attribute to animated URL
					img.attr("data-animate", results[i].images.original.url);
					//set data-still attribute to still URL
					img.attr("data-still", results[i].images.original_still.url)
					var p = $("<p>");
					p.html("Rating: " + results[i].rating);
					div.append(img);
					div.append(p);
					//append jQuery div to the page
					$("#imageswithDescription").append(div);
					
				}
			}); 
		}) 

		$("#formSubmit").on("click", function() {
			//create variable for userText that gets text from input field
			var userText = $("#userText").val();
			var button = $("<button>");
			//clear previous buttons from the page
			$("#buttons").empty();
			//create button attribute that inserts the user input as the title of the new button
			button.attr("button-title", userText);
			//add class to button so it will be added with other buttons
			button.addClass("individualButton");
			//insert text from input field to button html
			button.text(userText);
			$("#buttons").append(button);
			displayButton();
		
		}); 

		$(document).on("click", "img", function() {
			//create variable for still/animated conditions
			var state = $(this).attr("data-state");
			// var newState = state === "still" ? "animate" : "still";
			var newState;
			 
			// if state variable is still
		    if (state === "still") {
		    	// set newState
		    	newState = "animate";
         
          

        	} else {
        		// set newState
        		newState = "still";
      
       		}

       		     //it's already animated
            	 //reset image src to still version
            	 $(this).attr("src", $(this).attr("data-"+newState));
            	 // change state variable to still 
            	 $(this).attr("data-state", newState);

		})		

}) 


