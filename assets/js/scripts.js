console.log("%c script link test", "color: orange; font-size: 25px;");

fetch(
	"https://api.openweathermap.org/data/2.5/forecast?lat=30.267153&lon=-97.743057&units=imperial&appid=7ed9c252ddbaeac32afbe6925e2cfcd7"
)
	.then((response) => response.json())
	.then((data) => console.log(data));

//Use city name and state code from input to construct url for geocoding api call. Event listener for search button and enter keypress to run main function

//Construct a url for the geocoding api, transform city name into lat/long.

//Grab the return of the call to the geocoding api to get the lat/long of the city

//Then construct the url for the actual weather api with the lat/long and get the 5-day weather result

//The response is in 3-hour increments of data for five total days...knowing this...grab the first of each 3-hour increment for each day.
//so 'list' objects 0, 8, 16, 24, 32,

//Use these ^^^ objects to drill down into for data for each day of forecast
//Then I need drill down into that and grab the temp, wind, humidity, AND the icon code.

//first 'list' object, '0', that data for the current day.
//generate element with weather data for current day.

//the rest for the four day future forecast
//generate elements with weather data for four future days

//generate a button element with the city/state name...put city name and state code in data attributes

//For button, even listenter to run main function, pass values in data attributes for the city name and state code into it.

// var getLatLongUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityElement},${stateElement}&limit=1&appid=7ed9c252ddbaeac32afbe6925e2cfcd7`;

// function getLatLongInfo() {
// 	fetch(getLatLong)
// 		.then((response) => response.json())
// 		.then((latLongInfo) => console.log(latLongInfo));
//         return([the lat and long data from the object]);
// }
