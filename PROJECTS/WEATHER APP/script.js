console.log('hello jii');

const API_KEY = "416da1ee2c3d4102062294581fa1f086";

async function showWeather(){
    // let latitude = 15.33;
    // let longitude= 74.08;

    let city = "kolkata";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); 

    const data = await response.json();
    console.log("weather data:-> ", data);

    // let newPara = document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    // document.body.appendChild(newPara);

}