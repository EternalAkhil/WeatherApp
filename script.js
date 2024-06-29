async function weather(city) {
    try {
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc9d0240c5d7c92d9d196f684a5daef9&units=metric`)
        const res = await api.json()
        const temp = parseInt(res.main.temp)
        const feelsLike = parseInt(res.main.feels_like)
        let climate = res.weather[0].main.toLowerCase()
        const humidity = parseInt(res.main.humidity)
        const wind = parseInt(res.wind.speed)
        document.querySelector(".temp span").innerHTML = temp + "°C"
        document.querySelector(".humid span").innerHTML = humidity + "%"
        document.querySelector(".wind span").innerHTML = wind + "km\\h"
        document.querySelector(".weather p").innerHTML = climate
        document.querySelector(".wimg img").src = `images\\${climate}.png`
        document.querySelector(".card").style.height = "80vh"
    }
    catch(e){
        document.querySelector(".card").innerHTML="Ooops! No network"

    }
    
    
    
}
function search() {
    const city = document.getElementById("input")
    weather(city.value)
    city.value = ""
}
