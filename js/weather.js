const API_KEY = "abf34bc4c5a28039297923399e871de5";
const weather = document.querySelector("#weather span:first-child");
const temperature = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:last-child");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      temperature.innerText = Math.round(data.main.temp);
      console.log(typeof(data.main.temp));
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("현재 위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);