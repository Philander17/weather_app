const api_url = "https://api.weather.gov/gridpoints/MTR/95,113/forecast";
async function getData() {
  // Making an API call (request)
  // and getting the response back
  const response = await fetch(api_url);

  // Parsing it to JSON format
  const data = await response.json();

  // Retrieving data from JSON
  const weatherData = await data.properties.periods;

  // Accessing the div container and modify/add
  // elements to the containers
  //document.getElementById("icon").innerHTML = weatherData[1].icon;
  document.getElementById("detailedForecast").innerHTML =
    weatherData[1].detailedForecast;
  document.getElementById("temp").innerHTML =
    weatherData[1].temperature + " " + weatherData[1].temperatureUnit;
  document.getElementById("shortForecast").innerHTML =
    weatherData[1].shortForecast;
  document.getElementById("startTime").innerHTML = weatherData[1].startTime;
  document.getElementById("windSpeed").innerHTML = weatherData[1].windSpeed;

  //next day temp
  document.getElementById("seconddetailedForecast").innerHTML =
    weatherData[3].detailedForecast;
  document.getElementById("secondname").innerHTML = weatherData[3].name;
  document.getElementById("secondtemp").innerHTML =
    weatherData[3].temperature + " " + weatherData[3].temperatureUnit;
  document.getElementById("secondshortForecast").innerHTML =
    weatherData[3].shortForecast;
  document.getElementById("secondstartTime").innerHTML = weatherData[3].startTime;
  document.getElementById("secondwindSpeed").innerHTML = weatherData[3].windSpeed;

  document.getElementById("thirddetailedForecast").innerHTML =
    weatherData[5].detailedForecast;
  document.getElementById("thirdname").innerHTML = weatherData[5].name;
  document.getElementById("thirdtemp").innerHTML =
    weatherData[5].temperature + " " + weatherData[5].temperatureUnit;
  document.getElementById("thirdshortForecast").innerHTML =
    weatherData[5].shortForecast;
  document.getElementById("thirdstartTime").innerHTML = weatherData[5].startTime;
  document.getElementById("thirdwindSpeed").innerHTML = weatherData[5].windSpeed;  

document.getElementById("fourthdetailedForecast").innerHTML =
    weatherData[7].detailedForecast;
  document.getElementById("fourthname").innerHTML = 
  weatherData[7].name === "Christmas Day"
      ? "Monday " + "(" + weatherData[7].name + ")"
      : weatherData[7].name;
  document.getElementById("fourthtemp").innerHTML =
    weatherData[7].temperature + " " + weatherData[7].temperatureUnit;
    document.getElementById("fourthshortForecast").innerHTML =
    weatherData[7].shortForecast;
  document.getElementById("fourthstartTime").innerHTML = weatherData[7].startTime;
  document.getElementById("fourthwindSpeed").innerHTML = weatherData[7].windSpeed;  

document.getElementById("fifthdetailedForecast").innerHTML =
    weatherData[9].detailedForecast;
  document.getElementById("fifthname").innerHTML = weatherData[9].name;
  document.getElementById("fifthtemp").innerHTML =
    weatherData[9].temperature + " " + weatherData[9].temperatureUnit;
    document.getElementById("fifthshortForecast").innerHTML =
    weatherData[9].shortForecast;
  document.getElementById("fifthstartTime").innerHTML = weatherData[9].startTime;
  document.getElementById("fifthwindSpeed").innerHTML = weatherData[9].windSpeed;  

  let img = document.createElement("img");
  let img_div = document.getElementById("user-img");
  img.src = weatherData[7].icon;
  img_div.append(img);
}

// Calling the function
window.onload = function () {
  getData();
};
