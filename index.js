$(function() {

	$('.dropdown-menu').on('click', 'input', function(){
		var chosenCelebrity = $(this).val();
		console.log(chosenCelebrity);
		var url = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query="+ chosenCelebrity +"&page=1&include_adult=false";
		$.get(url, function(data){
			console.log(data);
			var celebretyId = data.results[0].id;
			console.log(celebretyId);
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



$(function() {

    var getBieberId = $('.JB').on('click', 'input', function(e){
        var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=justin%20bieber&page=1&include_adult=false";
        $.get(GetIdUrl, function(data){
            var celebId = JSON.stringify((data.results[0]["id"]));
				var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
				$.get(getBirthPlaceUrl, function(data){
						console.log(data.place_of_birth)
        });
    })
	})

	var getSwiftId = $('.TS').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=taylor%20swift&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					console.log(data.place_of_birth)
			});
	})
})

	var getJayZId = $('.JZ').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=jay%20z&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					console.log(data.place_of_birth)
			});
		})
	})

	var getBeyId = $('.Bey').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=beyonce&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					console.log(data.place_of_birth)
			});
		})
	})

	var getRihannaId = $('.Rihanna').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=rihanna&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					console.log(data.place_of_birth)
			});
		})
	})

	var getAGId = $('.AG').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=ariana%20grande&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					console.log(data.place_of_birth)
			});
		})
	})


});
