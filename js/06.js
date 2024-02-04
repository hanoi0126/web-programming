const API = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&forecast_days=1"

const getWeatherData = async() => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
};

getWeatherData()
    .then((data) => {
        document.getElementById(
            "title"
        ).textContent = `${data.daily.time[0]
            .replace("-", "/")
            .replace("-", "/")} の東京の気温`;
        document.getElementById(
            "min_temp"
        ).textContent = `最低気温: ${data.daily.temperature_2m_min[0]} °C`;
        document.getElementById(
            "max_temp"
        ).textContent = `最高気温: ${data.daily.temperature_2m_max[0]} °C`;
    })
    .catch((error) => {
        console.log("Error: ", error);
    });