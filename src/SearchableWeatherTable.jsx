import _ from "lodash"
import { useEffect, useState } from "react"
import WeatherDay from "./WeatherDay"
import WeatherTableHeader from "./WeatherTableHeader"
import SearchCityBar from "./SearchCityBar"
import citiesList from "../cities.js"

let SearchableWeatherTable = (props) => {
  const [cityName, setCityName] = useState("bruxelles")
  const [weatherData, setWeatherData] = useState([])
  useEffect(() => {
    fetchWeatherData()
  }, [cityName])

  let changeCity = (cityName) => setCityName(cityName)

  const fetchWeatherData = async () => {
    let city = citiesList.find((elem) => elem.name === cityName)
    let data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&hourly=temperature_2m,precipitation`
    )
    let json = await data.json()
    console.log(json)
    let rawDataByHours = json.hourly.time.map((date, index) => ({
      hour: date,
      temp: json.hourly.temperature_2m[index],
      prec: json.hourly.precipitation[index],
    }))
    setWeatherData(
      _.toPairs(_.groupBy(rawDataByHours, (data) => data.hour.slice(0, 10)))
    )
  }

  return (
    <div className="p-0.5 border-2">
      {weatherData.length > 0 && (
        <div className="text-xxs font-modern p-16 border-8 flex gap-6 flex-col">
          <SearchCityBar citiesList={citiesList} changeCity={changeCity} />
          <div className="text-center">
            {
              <WeatherTableHeader
                hours={weatherData[0][1].map((data) => data.hour.slice(11))}
              />
            }
            <div className="flex flex-col gap-2">
              {weatherData.map((dayData) => (
                <WeatherDay
                  day={dayData[0]}
                  key={dayData[0]}
                  dataByHours={dayData[1]}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchableWeatherTable
