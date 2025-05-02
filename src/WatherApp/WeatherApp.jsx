import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";


export default function WeatherApp(){

    let [weatherInfo , setWeatherInfo] = useState({
        city: "Surat",
        feelsLike: 36.13,
        humidity: 26,
        temp: 36.62,
        tempMax: 36.62,
        tempMin: 36.62,
        weather: "clear sky",
      })

    function updateWeather(info){
        setWeatherInfo(info);
    }

    return(
        <>
            <h2>Search for Weather </h2>
            <SearchBox updateWeather={updateWeather} />
            <InfoBox  info={weatherInfo} />
        </>
    )
}