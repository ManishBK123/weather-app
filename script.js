const btn=document.querySelector(".btn");
const cityInput=document.querySelector("#city")
const temp=document.querySelector("#temp-div")
const apikey ="c6210fe974ac87ecd26fb6a6276043f5"

btn.addEventListener("click", async function(){
    let city =cityInput.value;
    const weatherdata=await getWeatherInfo(city)
    console.log(weatherdata.main,temp)
    temp.innerHTML=weatherdata.main.temp+"°C"
})

    async function getWeatherInfo(city)
    {
const apikey ="c6210fe974ac87ecd26fb6a6276043f5"
        const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`

        
            const response= await fetch(apiUrl);
            const data= await response();
            return data;}
        
    //     const response= await fetch(apiUrl);
    //     const data= response.json()
    //     console.log(data)
    //     console.log(city)
    // }
    // getWeatherInfo("butwal")