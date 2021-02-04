import react,{useState} from 'react';

function WeatherAPI(){
    const url="http://api.openweathermap.org/data/2.5/weather?q=toronto,CA&appid=308f55416ac8415d74c54aca01205022";
    const [weatherData,SetWeatherData]= useState(()=>{
        grabWeatherData()
    })

    async function grabWeatherData(){
        var response = await fetch(url);
        var data = await response.json();
        console.log(data);
        SetWeatherData(data);
    }

    return(
        <div>
        {weatherData.weather}
        
        </div>
    )
}

export default WeatherAPI;