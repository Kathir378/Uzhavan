  const apiKey = "54b3a6fee7ff0223bde24d3ecd3c536c"; // Replace with your OpenWeather API Key
        let city = "Chennai";

        function updateCity() {
            const newCity = document.getElementById("cityInput").value;
            if (newCity) {
                city = newCity;
                document.getElementById("city").innerText = city;
                
                fetchForecast();
            }
        }

        async function fetchWeather(city) {
            try {
                console.log(city);
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
                const response = await fetch(apiUrl);
                const data = await response.json();

                document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
                document.getElementById("humidity").innerText = `${data.main.humidity}%`;
                document.getElementById("wind").innerText = `${data.wind.speed} km/h`;
                document.getElementById("description").innerText = data.weather[0].description;
                document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            } catch (error) {
                console.log("Error fetching weather:", error);
            }
        }

        async function fetchForecast() {
            try {
                const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
                const response = await fetch(forecastUrl);
                const data = await response.json();
                
                const forecastContainer = document.getElementById("forecast");
                forecastContainer.innerHTML = "";

                for (let i = 0; i < 7; i++) {
                    const day = data.list[i * 8]; // Data every 3 hours, so every 8th index gives the next day's forecast
                    
                    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" });
                    const temp = Math.round(day.main.temp);
                    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

                    const forecastItem = document.createElement("div");
                    forecastItem.classList.add("forecast-item");
                    forecastItem.innerHTML = `
                        <p>${date}</p>
                        <img src="${icon}" alt="Weather">
                        <p>${temp}°C</p>
                    `;

                    forecastContainer.appendChild(forecastItem);
                }
            } catch (error) {
                console.log("Error fetching forecast:", error);
            }
        }

        fetchWeather();
        fetchForecast();