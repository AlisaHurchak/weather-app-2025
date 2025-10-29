function updateTemperature(response) {
  let temperature = document.querySelector("#temperature-number");
  let temperatureNow = Math.round(response.data.temperature.current);

  let city = document.querySelector("#weather-app-city");

  let descriptionElement = document.querySelector("#sky-condition");
  let description = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  let humidity = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind");
  let wind = `${response.data.wind.speed} km/h`;

  let timeElement = document.querySelector("#time-now");
  let time = new Date(response.data.time * 1000);

  let icon = document.querySelector("#weather-icon");

  city.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(time);
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = humidity;
  windElement.innerHTML = wind;
  icon.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;
  temperature.innerHTML = temperatureNow;
}

function formatDate(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let day = time.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];

  if (hours < 10) {
    let hours = `0${hours}`;
  }
  if (minutes < 10) {
    let minutes = `0${minutes}`;
  }
  return `${formattedDay}, ${hours}:${minutes}`;
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

searchCity("Kyiv");
