// Initial Topics - Pregenerated

var topics = ['Disneyland', 'Pixar', 'HIMYM', 'Huskies', 'Puppies', 'Super Smash Brothers', 'Pandas' ];

// For loop that will go through the Topics Array and turn them into buttons

function renderButtons(){
	$('#viewGiphy').empty(); //prevents the div to keep appending the same set of buttons
	
	for (var i = 0; i < topics.length; i++){
		topics[i];
		$('#viewGiphy').append("<button>" +topics[i]+ "</button>");
		console.log(topics[i]);	
	}

}

// Function that will take in new topics and turn them into buttons as well
// $('#addTopic').on('click', function(){
// 	var newTopic = $('#topic_input').val(); //will take the value that is entered in the form box
// 	topics.push(newTopic);

// 	renderButtons();
// 	return false;
// });

renderButtons();