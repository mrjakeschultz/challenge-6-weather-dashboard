console.log("%c script link test", "color: orange; font-size: 25px;");

fetch(
	"https://api.openweathermap.org/data/2.5/forecast?lat=30.267153&lon=-97.743057&units=imperial&appid=7ed9c252ddbaeac32afbe6925e2cfcd7"
)
	.then((response) => response.json())
	.then((data) => console.log(data));

// var getLatLongUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityElement},${stateElement}&limit=1&appid=7ed9c252ddbaeac32afbe6925e2cfcd7`;

// function getLatLongInfo() {
// 	fetch(getLatLong)
// 		.then((response) => response.json())
// 		.then((latLongInfo) => console.log(latLongInfo));
//         return([the lat and long data from the object]);
// }
