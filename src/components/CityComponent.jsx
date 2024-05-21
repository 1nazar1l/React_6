import perfectDay from '../assets/icons/perfect-day.svg'

const CityComponent = ({setCity, fetchWeather}) => {
return(
    <>
    <img src={perfectDay} alt="" className="WelcomeLogo" />
    <span className="ChooseCityLabel">
        Find Weather of your city
    </span>
    <form action="" className="SearchBox" onSubmit={(event) => fetchWeather(event)}>
        <input type="text" placeholder='City' onChange={(event) => setCity(event.target.value)}/>
        <button type='submit'>Search</button>
    </form>
    </>
)
} 

export default CityComponent