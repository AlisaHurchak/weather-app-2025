function search(event) {
  event.preventDefault();
  let city = document.querySelector("#weather-app-city");
  let input = document.querySelector("#enter-city-input");
  city.innerHTML = input.value;
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
