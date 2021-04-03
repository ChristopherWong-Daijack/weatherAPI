import React,{useState} from 'react';
import Search from './search';
const url="http://api.openweathermap.org/data/2.5/weather?q=toronto,CA&appid=308f55416ac8415d74c54aca01205022";
let isError = false;
function WeatherAPI(){
    
    const [weatherData={},setWeatherData]= useState(()=>{
        grabWeatherData();
    })

    const [weatherTemp={},setWeatherTemp]= useState(weatherData.main);
    const [weatherIcon={},setWeatherIcon]= useState(weatherData.weather);

    const [searchName="Toronto",setSearchName]= useState();

    async function grabWeatherData(APIurl=url){
        try{
        var response = await fetch(APIurl,{
            method: 'GET'
        })/*.then(res=>res.json())
        .then(res=>{
            setWeatherData(res);
            setWeatherTemp(res.main);
           
            return res;
        })*/

        response = await response.json();
        console.log(response);
        setWeatherData(response);
        setWeatherIcon(response.weather[0]);
        console.log(response.weather[0]);
        setWeatherTemp(response.main);
    }catch(error){
        isError = true;
        console.error(error);
    }
        
    }
    
    function convertTemp(tempKelvin){
        var tempCelcius = tempKelvin - 273.15
        tempCelcius = Math.round(tempCelcius);
        return tempCelcius;
    }

    const handleClick =  (e)=>{
        let Searchurl=`http://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=308f55416ac8415d74c54aca01205022`
        grabWeatherData(Searchurl);
        console.log(e)

    }

    const handleName = (data)=>{
        let target = data.target;
        let value = target.value;

        setSearchName(value);
        console.log(value)
        
    }
    
        console.log(isError)
        if(weatherData.cod == 404){
            return(
                <div>
                    <input type="text" onChange={handleName}></input>
                    <button type="text" onClick={handleClick}>Search</button>
                    <h3>Not Found</h3>
                </div>
            )
        }
        return(
        
            <div>
            <input type="text" onChange={handleName}></input>
            <button type="text" onClick={handleClick}>Search</button>
            <h1>{weatherData.name}</h1>
                <h3> Temperature: {convertTemp(weatherTemp.temp)}°C</h3> 
                <h3> Feels Like: {convertTemp(weatherTemp.feels_like)}°C</h3>
                <h3> Humidity: {weatherTemp.humidity}% </h3>
                <h3> Description: {weatherIcon.description} </h3>
                <img src={"http://openweathermap.org/img/wn/"+weatherIcon.icon+"@2x.png"}></img>
            </div>
        );
    
   
}

export default WeatherAPI;