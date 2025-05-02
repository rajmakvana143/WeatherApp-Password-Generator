import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateWeather}) {

    const APIKEY = "e331a481eea36d6f8fabf4e71507fd43";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

  let [city, setCity] = useState("");
  let [error , setError] = useState(false);

  async function getWeatherInfo(){
    try{
        const response = await fetch(`${API_URL}?q=${city}&appid=${APIKEY}&units=metric`)
    const jsonResponse = await response.json()
    let weatherData = {
      city : city,
      temp : jsonResponse.main.temp,
      tempMin : jsonResponse.main.temp_min,
      tempMax : jsonResponse.main.temp_max,
      humidity : jsonResponse.main.humidity,
      feelsLike : jsonResponse.main.feels_like,
      weather : jsonResponse.weather[0].description,
    };
    return weatherData
    }catch(err){
        throw err
    }
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  async function handleSubmit(event){
    try{
        event.preventDefault();
    let info = await getWeatherInfo();
    updateWeather(info);
    setCity("")
    }catch(err){
        setError(true)
    }
  }


  return (
    <div style={{marginBottom:"30px"}}>
      <form action="" style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleInput}
        />
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </form>
       
    {error ? <p> this place is not exist </p> : null}
    </div>
  );
}
