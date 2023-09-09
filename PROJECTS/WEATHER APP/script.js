const userTab = document.querySelector("[data-useWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector("[weather-container]");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// initially variables need??

let currentTab = userTab;
const API_KEY = "416da1ee2c3d4102062294581fa1f086";
currentTab.classList.add("current-tab");

// a work needs to be done more

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            // kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            // main pehle search wala tab pe tha, ab your weather tab visible krna hai
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // ab main your weather tab me aa gya hun to weather bhi discuss krna padega
            // so let's check local storage first for coordiantes if we haved saved them there
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab{userTab};
});

searchTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab{searchTab};
});


// check if coordinates are already present in session storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(! localCoordinates){
        // agar local coordinates nhi  mile
        grantAccessContainer.classList.add("active");
    }

    else{
        const coordiantes = JSON.parse.localCoordinates;
        fetchUserWeatherInfo(coordiantes);
    }

}

function fetchUserWeatherInfo(coordiantes){
    const {lat, lon} = coordiantes;
    // make grant container invisible
    grantAccessContainer.classList.remove("active");
    // make loader visible
    loadingScreen.classList.add("active");


    // API CALL

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const data = response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        // HOMEWORK
        loadingScreen.classList.remove("active");
    }
}

function renderWeatherInfo(weatherInfo){
    // firstly, we have to fetch the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch value from weatherInfo object and put it UI elements
    cityName.innertext = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144×108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = weatherInfo?.main?.temp;
    windSpeed.innerText = weatherInfo?.wind?.speed;
    humidity.innerText = weatherInfo?.main?.humidity;
    cloudiness.innerText = weatherInfo?.clouds?.all;

}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        // HW--->> SHOW AN ALERT FOR NO GEOLOCATION SUPPORT AVAILABLE
    }
}

function showPosition(position){
    lat: position.coords.latitude,
    lon: position.coords.longitude,
}

sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
fetchUserWeatherInfo(userCoordinates);


const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);


const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let cityName = searchInput.Value;
    if(cityName === "")
        return;
    else
        fetchSearchWeatherInfo(cityName);

});

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            const data = await response.json();
            loadingScreen.classList.add("active");
            renderWeatherInfo(data);
    }

    catch(err){
        // HW
    }

}


