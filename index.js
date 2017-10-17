/*========================================= 
  INITIALIZE MAP AND GEOCODE API
 ========================================*/

	var map;
	var mapDiv = document.getElementById('map');
	var atlantaCoordinates = {lat: 33.84860, lng: -84.373553}
		var options = {
		zoom: 14,
		center: atlantaCoordinates
	};
	var geocoder;
	var pic;
	var name;
	var markers = [];
	function initMap() {
		map = new google.maps.Map(mapDiv, options);
		geocoder = new google.maps.Geocoder();
	}

/*================================
  ANIMATE SPLASH IMAGE
 =================================*/

$(function() {

	$('.openingImage').delay(4000).fadeOut(1500);

	$('#firstDiv').delay(4000).fadeOut(2000);

/*==================================
  INFOWINDOW
  ================================*/
    var infoWindowContent = '<div id="content">'+
      '<h1 id="name">' + name + '</h1>'+
      '<div id="bodyContent">'+
      '<img src="' + pic +'"/>'+
      '</div>'+
      '</div>';



/*===========================================================================
  USE GOOGLE MAPS GEOCODE LIBRARY TO CONVERT BIRTHPLACE TO COORDINATES
  ===========================================================================*/

      function convertCityState (geocoder, resultsMap, bplace) {
        var birthplace = bplace;
        geocoder.geocode({'address': birthplace}, function(results, status) {
          if (status === 'OK') {
			var infowindow = new google.maps.InfoWindow({
			    content: infoWindowContent
			});
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
            markers.push(marker);
			marker.addListener('click', function() {
			infowindow.open(map, marker);
			});
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

      function clearMarkers() {
      	console.log(826);
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      	markers = [];
      }

/*=====================================================================================
  GET CELEBRITY IDs FROM MOVIEDB API, THEN GET SECONDARY ENDPOINT TO GET BIRTHPLACE
  ===================================================================================*/

    var getBieberId = $('.JB').on('click', 'input', function(e){
    	name = '';
    	name = 'Jusin Bieber';
        var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=justin%20bieber&page=1&include_adult=false";
        $.get(GetIdUrl, function(data){
            var celebId = JSON.stringify((data.results[0]["id"]));
				var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
				$.get(getBirthPlaceUrl, function(data){
						var birthplace = (data.place_of_birth);
						pic = (data.profile_path);
						convertCityState(geocoder, map, birthplace);
        		});
    	})
	})

	var getSwiftId = $('.TS').on('click', 'input', function(e){
    		name = '';
			name = 'Taylor Swift'
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=taylor%20swift&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					var birthplace = (data.place_of_birth);
					pic = data.profile_path;
					convertCityState(geocoder, map, birthplace);
			});
	})
})

	var getJayZId = $('.JZ').on('click', 'input', function(e){
    		name = '';
			name = 'Jay Z'
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=jay%20z&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					var birthplace = (data.place_of_birth);
					convertCityState(geocoder, map, birthplace);
			});
		})
	})

	var getBeyId = $('.Bey').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=beyonce&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					var birthplace = (data.place_of_birth);
					convertCityState(geocoder, map, birthplace);
			});
		})
	})

	var getRihannaId = $('.Rihanna').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=rihanna&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					var birthplace = (data.place_of_birth);
					convertCityState(geocoder, map, birthplace);
			});
		})
	})

	var getAGId = $('.AG').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=ariana%20grande&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					var birthplace = (data.place_of_birth);
					convertCityState(geocoder, map, birthplace);
			});
		})
	})

	var getBSId = $('.BS').on('click', 'input', function(e){
			var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=barbra%20streisand&page=1&include_adult=false";
			$.get(GetIdUrl, function(data){
					var celebId = JSON.stringify((data.results[0]["id"]));
			var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/"+ celebId + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
			$.get(getBirthPlaceUrl, function(data){
					var birthplace = (data.place_of_birth);
					convertCityState(geocoder, map, birthplace);

			});
		})
	})

	$('input[type=radio]').change(clearMarkers);

	 $('.IT').on('click', function(e){
		 var celebId = ['10400','150810','131519','84932','14386','226001']
		 celebId.forEach(function(element){
 			//var GetIdUrl = "https://api.themoviedb.org/3/search/person?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US&query=barbra%20streisand&page=1&include_adult=false";
 			//$.get(GetIdUrl, function(data){
 					//var celebId = JSON.stringify((data.results[0]["id"]));

					var getBirthPlaceUrl = "https://api.themoviedb.org/3/person/" + element + "?api_key=e09be2ac4d045c2e602d7bf0280ce9ff&language=en-US";
		 			$.get(getBirthPlaceUrl, function(data){
		 					var birthplace = (data.place_of_birth);
		 					convertCityState(geocoder, map, birthplace);
						})
 			});
 		})

});
