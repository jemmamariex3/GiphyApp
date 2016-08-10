// Initial Topics - Pregenerated
$(function(){
var topics = ['Disneyland', 'Disney World of Color', 'Pixar', 'Harry Potter', 'HIMYM', 'The Walking Dead', 'The Flash', 'The Arrow', 'Grant Gustin', 'Huskies', 'Bears', 'Pandas', 'Super Smash Brothers' ];

function displayGiphy(){

	var topicName = $(this).data("name");
	var gifNumber = "&limit=12";

	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+topicName+gifNumber+"&api_key=dc6zaTOxFJmzC";
 	
 	$('#viewGiphy').empty();
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		var getData = response.data;

	// loops 20 times (lenght of the data) - creating a div that includes the image and rating
		for (var i = 0; i < getData.length; i++) {
			var giphyDiv = $('<div class = "giphyDiv">');
			var rating = getData[i].rating; //parsing through the data to grab rating
			var ratingText = $('<p class ="ratingText">').text("Rated: " +rating)
			
	// setting data-state attributes to images/gifs
			var gif_image = $('<img>')
			.attr('src', getData[i].images.fixed_height_still.url)
			.click(function(){
				var originalSource = $(this).attr("src");
				if(originalSource.indexOf("_s.gif") !== -1){
					var newSource = originalSource.replace("_s.gif", ".gif");
				}else{
					var newSource = originalSource.replace(".gif","_s.gif");
				}
			$(this).attr("src", newSource); 

			});
			
	// appends the rating and the giff into the new div that i made
			giphyDiv.append(ratingText);
			giphyDiv.append(gif_image);

	//appends the new div into the bigger div in my HTML
			$('#viewGiphy').append(giphyDiv);
		}
	});	
}


// For loop that will go through the Topics Array and turn them into buttons
function renderButtons(){

	$('#buttonDiv').empty(); //prevents the div to keep appending the same set of buttons

	for (var i = 0; i < topics.length; i++){

		var gifButtons = $("<button>")

		//we can now call on all the buttons using its class
		gifButtons.addClass("myFavThings");

		//set name attributes for the buttons based on its name

		gifButtons.attr("data-name", topics[i]);
		gifButtons.text(topics[i]);

		// append the new buttons into the viewGiphy div
		$("#buttonDiv").append(gifButtons);

	}

}
// Function that will take in new topics and turn them into buttons as well
$('#addTopic').on('click', function(){
	var newTopic = $('#topic_input').val().trim(); //will take the value that is entered in the form box
	topics.push(newTopic); //will push the inputs into the topics array with the pre-made buttons
	
	renderButtons(); //calls the make button function
	return false;
})


//the browser/window will initiate the displayGiphy function when anything in the viewGiphy div is clicked
$(document).on('click', '.myFavThings', displayGiphy);


renderButtons();
})