import constWeatherIcons from "../Constants.js"
import WeatherInfoComponent from "../components/WeatherInfoComponent.jsx"

const WeatherComponent = ({weather}) => {
    let isDay = weather?.weather[0].icon.includes("d")
    function getTime(timeStamp){
        return `${new Date(timeStamp*1000).getHours()} : ${new Date(timeStamp*1000).getMinutes()}`
    }
return(
    <>
    <div className="WeatherContainer">
        <span className="Condition">
            <span>{Math.floor((weather?.main?.temp)-273)}°C</span>
            {` | ${weather?.weather[0].description}`}
        </span>
        <img src={constWeatherIcons[weather?.weather[0]?.icon]} alt="" className="WeatherIcon"/>
    </div>
    <span className="Location">{`${weather?.name}, ${weather?.sys?.country}`}</span>
    <span className="WeatherInfoLabel">Weather Info</span>
    <div className="WeatherInfoContainer">
        <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
        <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
        <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
    </div>
    </>
)
}

export default WeatherComponent