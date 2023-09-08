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
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
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