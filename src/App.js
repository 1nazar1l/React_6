import './index.css';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent'
import { useState } from 'react';

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState()

  async function fetchWeather(event){
    event.preventDefault()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
    let data = await response.json()
    setWeather(data)
  }
  return (
    <div className="Container">
      <span className='AppLabel'>
        React Weather App
      </span>
      {city && weather ?
      (<WeatherComponent weather={weather}/>) :
      (<CityComponent setCity={setCity} fetchWeather={fetchWeather}/>)
      }
    </div>
  );
}

export default App;
