const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const time = document.getElementById("city-time");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("city-temp");


async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=891b9a50880c425db99130259241906&q=${cityName}&aqi=yes`)
    return await promise.json()
}

button.addEventListener('click' , async () =>{
const value = input.value;
const result = await getData(value);
cityName.innerText=`${result.location.name} , ${result.location.region}-${result.location.country}`
time.innerText=`${result.location.localtime}`
temp.innerText=`${result.current.temp_c}`
})