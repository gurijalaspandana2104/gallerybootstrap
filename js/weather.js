const apiKey = 'e31c3632a33f9dac320c35849ac671d1'; // Replace with your actual key

function getWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('weather-info').style.display = 'block';
            document.getElementById('location').textContent = data.name;
            document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('condition').textContent = data.weather[0].main;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(err => {
            console.error('Weather fetch failed:', err);
            alert('City not found or network error.');
        });
}
