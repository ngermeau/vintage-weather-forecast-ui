import WeatherHour from "./WeatherHour"

let WeatherDay = ({ day, dataByHours }) => {
  let rowDay = `${day.split("-")[2]}/${day.split("-")[1]}`
  return (
    <div className="flex gap-2 flex-wrap">
      <div className="flex justify-between items-center font-bold w-8 h-8">
        {rowDay}
      </div>
      {dataByHours.map(hourData =>
        <WeatherHour key={hourData.hour} {...hourData} />
      )}
    </div>
  )

}

export default WeatherDay
