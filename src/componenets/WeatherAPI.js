import React,{useState,useEffect} from 'react';
import Search from './search';


function WeatherAPI(){
    
    const [weatherData={},setWeatherData]= useState(()=>{
        grabWeatherData();
    })

    const [weatherTemp={},setWeatherTemp]= useState(weatherData.main);
    const [weatherIcon={},setWeatherIcon]= useState(weatherData.weather);

    const [searchName,setSearchName]= useState("Toronto");

    useEffect(()=>{
        grabWeatherData(searchName)
    },[searchName])
    
    async function grabWeatherData(searchName){
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=308f55416ac8415d74c54aca01205022`
        try{
        var response = await fetch(url,{
            method: 'GET'
        })

        response = await response.json();
        setWeatherData(response);
        setWeatherIcon(response.weather[0]); 
        setWeatherTemp(response.main);

        console.log(response);
        console.log(searchName);
       
    }catch(error){
        console.error(error);
    }
        
    }
    
    function convertTemp(tempKelvin){
        var tempCelcius = tempKelvin - 273.15
        tempCelcius = Math.round(tempCelcius);
        return tempCelcius;
    }


    const handleName = (data)=>{
        let target = data.target;
        let value = target.value;

        setSearchName(value);
        console.log(value)
        
    }
    
        if(weatherData.cod == 404){
            return(
                <div>
                    <Search searchName={searchName} setSearchName={setSearchName} grabWeatherData={grabWeatherData}/>
                    <h3>"{searchName}" Was Not Found</h3>
                    
                </div>
            )
        }else{
            return(
                <div>
                <Search searchName={searchName} setSearchName={setSearchName} grabWeatherData={grabWeatherData}/>
                <h1>{weatherData.name}</h1>
                    <h3> Temperature: {convertTemp(weatherTemp.temp)}°C</h3> 
                    <h3> Feels Like: {convertTemp(weatherTemp.feels_like)}°C</h3>
                    <h3> Humidity: {weatherTemp.humidity}% </h3>
                    <h3> Description: {weatherIcon.description} </h3>
                    <img src={"http://openweathermap.org/img/wn/"+weatherIcon.icon+"@2x.png"}></img>
                </div>
            );
        }
}

export default WeatherAPI;