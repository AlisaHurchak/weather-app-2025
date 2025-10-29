function updateTemperature(response) {
  let temperature = document.querySelector("#temperature-number");
  let temperatureNow = Math.round(response.data.temperature.current);
  temperature.innerHTML = temperatureNow;
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = `cbc74oa354dba2dbcf0te4ef1b7eef0f`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTemperature);
}

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#enter-city-input");
  searchCity(input.value);
}

let newCity = document.querySelector("#search-from");
newCity.addEventListener("submit", search);

function formattedDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (hour < 10) {
    let hour = `0${hour}`;
  }
  if (minutes < 10) {
    let minutes = `0${minutes}`;
  }
  let formattedDay = days[day];
  return `${formattedDay} ${hour}:${minutes}`;
}

let newTime = document.querySelector("#time-now");
let now = new Date();

newTime.innerHTML = formattedDate(now);
