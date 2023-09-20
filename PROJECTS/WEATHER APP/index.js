
// // THIS FILE IS USED AS A PRACTICE SESSION AND BASIC UNDERSTANDING OF WEATHER APP

// console.log('hello jii');

// const API_KEY = "416da1ee2c3d4102062294581fa1f086";

// function renderWeatherInfo(data){
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

//     document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails(){

//     try{
//     // let latitude = 15.33;
//     // let longitude= 74.08;

//     let city = "kolkata";

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); 

//     const data = await response.json();
//     console.log("weather data:-> ", data);

//     // let newPara = document.createElement('p');
//     // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

//     // document.body.appendChild(newPara);

//     renderWeatherInfo(data);
//     }
//     catch(err){
//         // handle the error here
//     }

// }

// async function getCustomWeatherDetails(){

//     try{
//         let latitude = 22.572;
//         let longitude= 88.3573;
     
//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
//         let data = await result.json();
    
//         console.log(data);
//         renderWeatherInfo(data);
//     }

//     catch(err){
//         // handle the error here
//         console.log("Error found", err );
//     }

// }

// function switchTab(clickedTab){

//     apiErrorContainer.classList.remove("active");

//     if(clickedTab !== currentTab){
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");
//     }

//     if(! searchForm.classList.contains("active")){
//         userInfoContainer.classList.remove("active");
//         grantAccessContainer.classList.remove("active");
//         searchForm.classList.add("active");
//     }

//     else{
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         // getFromSessionStorage();
//     }

//     // console.log("Current Tab", currentTab);
// }

// function getLocation(){
//     if(navigator.geoLocation){
//         navigator.geoLocation.getCurrentPosition(showPosition);
//     }
    
//     else{
//         console.log("Geolocation is not supported by this browser");
//     }
// }

// function showPosition(position){
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;

//     console.log(lat);
//     console.log(longi);
// }


