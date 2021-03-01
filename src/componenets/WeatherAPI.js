import react,{useState} from 'react';

function WeatherAPI(){
    const url="http://api.openweathermap.org/data/2.5/weather?q=toronto,CA&appid=308f55416ac8415d74c54aca01205022";
    const [weatherData=[{}],SetWeatherData]= useState(()=>{
        grabWeatherData()
    })

    

    async function grabWeatherData(){
        var response = await fetch(url);
        var data = await response.json()
        SetWeatherData(data)
        console.log(data.main.temp)
    }
    
    function convertTemp(tempKelvin){
        var tempCelcius = tempKelvin - 273.15
        tempCelcius = Math.round(tempCelcius);
        return tempCelcius;
    }

    return(
        <div>
            Current Temperature: {weatherData.main.temp}° Celcius
        </div>
    )
}

export default WeatherAPI;