const WeatherTableHeader = (props) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <div className="flex items-center justify-center w-8 h-8 font-bold">
        D/H
      </div>
      {props.hours.map((hour) => (
        <div
          className="flex items-center justify-center w-8 h-8 font-bold"
          key={hour}
        >
          {hour}
        </div>
      ))}
    </div>
  )
}
export default WeatherTableHeader
