$(function() {

	$('.dropdown-menu').on('click', 'input', function(){
		var chosenCelebrity = $(this).val();
		console.log(chosenCelebrity);
		var url = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query="+ chosenCelebrity +"&page=1&include_adult=false";
		$.get(url, function(data){
			console.log(data);
		});
	})

});
















	var map;
	var mapDiv = document.getElementById('map');
	var atlantaCoordinates = {lat: 33.84860, lng: -84.373553}
		var options = {
		zoom: 14,
		center: atlantaCoordinates
	};

	function initMap() {
		map = new google.maps.Map(mapDiv, options);
	}

$(function() {

	$('.openingImage').delay(3000).fadeOut(300)
});

$(function() {

	$('#firstDiv').delay(3000).fadeOut(300)
});
