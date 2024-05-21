import sunset from "../assets/icons/temp.svg";
import sunrise from "../assets/icons/humidity.svg";
import humidity from "../assets/icons/humidity.svg";
import wind from "../assets/icons/wind.svg";
import pressure from "../assets/icons/pressure.svg";

const WeatherInfoComponent = ({name, value}) => {
    const constWeatherInfoIcons= {
        sunset: sunset,
        sunrise: sunrise,
        humidity: humidity,
        wind: wind,
        pressure: pressure,
    };
return(
    <div className="InfoContainer">
        <img src={constWeatherInfoIcons[name]} alt="" className="InfoIcon"/>
        <span className="InfoLabel">{value}</span>
        <span>{name}</span>
    </div>
)
}

export default WeatherInfoComponent