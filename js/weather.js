const API_KEY = "bdf02d4ce6b8443085ef129c5143068e";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temp = document.querySelector("#weather span:nth-child(1)");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:nth-child(3)");
            temp.innerText = `${parseInt(data.main.temp)}°C`;
            weather.innerText = `${data.weather[0].main} in`;
            city.innerText = `${data.name}`;
    });
}


function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
