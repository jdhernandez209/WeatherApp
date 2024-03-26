let currentlocation = document.getElementById("currentlocation");
let favorites = document.getElementById("favorites");
let searchBtn = document.getElementById("searchBtn");
let tempature = document.getElementById("tempature");
let highlow = document.getElementById("highlow");
let Monday = document.getElementById("Monday");
let Tuesday = document.getElementById("Tuesday");
let Wednesday = document.getElementById("Wednesday");
let Thusday = document.getElementById("Thusday");
let Friday = document.getElementById("Friday");

let currentWeather = [];
let choosenCity = document.getElementById("searchBtn");

async function getWeather(cityOfChoice){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityOfChoice + "&units=imperial&appid=8ee213faeb0cfd8b025313fe8a69b0ce").then(Response => Response.json());
    console.log(apiResponse);
    currentlocation.innerText = apiResponse.city.name;
    //WeatherData = apiResponse;
    tempature.innerText = Math.round(apiResponse.list[0].main.temp);
    lowtemp.innerText = Math.round(apiResponse.list[3].main.temp);
    hightemp.innerText = Math.round(apiResponse.list[2].main.temp);
    onedaytemp.innerText = Math.round(apiResponse.list[4].main.temp);
    twodaytemp.innerText = Math.round(apiResponse.list[12].main.temp);
    threedaytemp.innerText = Math.round(apiResponse.list[20].main.temp);
    fourdaytemp.innerText = Math.round(apiResponse.list[28].main.temp);
    fivedaytemp.innerText = Math.round(apiResponse.list[36].main.temp);
}
getWeather("stockton");

//async function getOneday (cityOfChoice){
   // let apiResponse = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}").then(Response => Response.json());
    //console.log(apiResponse);
//}
//getOneday("stockton");

searchBtn.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        choosenCity = searchBtn.value;
        cityWeather(choosenCity)
    }
});

//favorites bar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 