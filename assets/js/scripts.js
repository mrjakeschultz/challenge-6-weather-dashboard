console.log("%c script link test", "color: orange; font-size: 25px;");

var city = $("#cityElement");
var state = $("#stateElement");
var searchBtn = $("#searchBtn");
var rightStuff = $("#rightStuff");

fetch(
	"https://api.openweathermap.org/data/2.5/forecast?lat=30.267153&lon=-97.743057&units=imperial&appid=7ed9c252ddbaeac32afbe6925e2cfcd7"
)
	.then((response) => response.json())
	.then((data) => console.log(data));

searchBtn.on("click", getForecast);

function getForecast() {
	console.log(city.val());
	var geoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city.val()}&limit=1&appid=7ed9c252ddbaeac32afbe6925e2cfcd7`;

	getLatLong(geoCodeUrl)
		.then((latlon) => getWeather(latlon[0], latlon[1]))
		.then(function (weatherData) {
			setupCurrentDayElement(weatherData.list[0]);
			var days = [
				weatherData.list[8],
				weatherData.list[16],
				weatherData.list[24],
				weatherData.list[32],
			];

			futureForecastCards = document.querySelectorAll(".futureForecastCards");

			days.forEach((day, idx) => {
				var card = futureForecastCards[idx];
				setupFutureDayElement(day, card);
			});
		});
}

function getWeather(lat, lon) {
	var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=7ed9c252ddbaeac32afbe6925e2cfcd7`;

	return fetch(weatherUrl).then((response) => response.json());
}

function getLatLong(url) {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => [data[0].lat, data[0].lon]);
}

function setupCurrentDayElement(x) {
	$("#currentDayStatsDiv").remove();
	var currentDayStatsDiv = document.createElement("div");
	$(currentDayStatsDiv).attr("id", "currentDayStatsDiv");
	currentDayStatsDiv.innerHTML = `
	<div>Temp: 
	<span>${x.main.temp}</span>
	</div>
	<div>Humidity: 
	<span>${x.main.humidity}</span>
	</div>
	<div>Wind: 
	<span>${x.wind.speed}</span>
	</div>
	<div>
	<img src="http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png"
	</div>
	`;
	$(currentDayStatsDiv).appendTo($(rightStuff));
}

function setupFutureDayElement(day, card) {
	card.innerHTML = `
	<div>${day.dt_txt}
	</div>
	<div>Temp: 
	<span>${day.main.temp}</span>
	</div>
	<div>Humidity: 
	<span>${day.main.humidity}</span>
	</div>
	<div>Wind: 
	<span>${day.wind.speed}</span>
	</div>
	<div>
	<img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
	</div>
	`;
}

// fetch(
// 	`http://api.openweathermap.org/geo/1.0/direct?q=austin&limit=1&appid=7ed9c252ddbaeac32afbe6925e2cfcd7`
// )
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

// var getLatLongUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityElement},${stateElement}&limit=1&appid=7ed9c252ddbaeac32afbe6925e2cfcd7`;
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

// function getLatLongInfo() {
// 	fetch(getLatLong)
// 		.then((response) => response.json())
// 		.then((latLongInfo) => console.log(latLongInfo));
//         return([the lat and long data from the object]);
// }
