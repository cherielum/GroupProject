
console.log('trish');
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


$(function() {
		// var jbieber = $(".JB").on('click','input', function(){
		// 	var bieberIsSelected = $(this).val();
		// 	var url = "https://api.themoviedb.org/3/person/150810?&language=en-US&api_key=e09be2ac4d045c2e602d7bf0280ce9ff"
		// 	$.get(url, function(data){
		// 		console.log(data.place_of_birth)
		// 	})
		// })


    var newStar = $('.JB').on('click', 'input', function(e){
        //var chosenCelebrity = $(this).val("Justin Bieber");
				//console.log(chosenCelebrity)
				//e.preventDefault();
        var url = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=justin%20bieber&page=1&include_adult=false";
        $.get(url, function(data){
            var celebId = console.log(data.results[0]["id"])
        });
    })


});
