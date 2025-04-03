import { getLocation, wait } from './utils/promiseHelper.js';

const API_KEY = '0cdd59a97f676ed61843034fd795b7f5';

async function showLocation() {
   const postition = await getLocation();
   const lat = postition.coords.latitude;
   const lon = postition.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
   const response = await fetch(url);
   const data = await response.json();

   const city = document.querySelector("#weather span:first-child");
   const weather = document.querySelector("#weather span:last-child");
   city.innerHTML = data.name;
   weather.innerHTML = data.weather[0].main;
}

showLocation();