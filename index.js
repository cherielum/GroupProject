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

//trying to make a good scroll bar 

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(function() {

    $('.openingImage').delay(5000).fadeOut(300)
}); 
