const styleTemperature = (temp) => {
  let className
  if (temp < 0) {
    className = "bg-cold text-background"
  }
  if (temp >= 0 && temp <= 10) {
    className = "bg-tempered"
  }
  if (temp > 10 && temp <= 20) {
    className = "bg-warm"
  }
  if (temp > 20) {
    className = "bg-very-warm"
  }
  return (
    className +
    " relative flex justify-center items-center w-8 h-8 rounded-full font-new-cycle font-bold"
  )
}

const WeatherHour = (hourData) => {
  let className = styleTemperature(hourData.temp)
  let rainingItem
  console.log(hourData)
  if (hourData.prec > 0) {
    rainingItem = (
      <div className="w-5 h-5 absolute rounded-full border-1 bg-rain flex justify-center items-center bottom-[-7px] right-[-7px] text-[0.6rem] text-background border-2 border-background">
       {hourData.prec}
      </div>
    )
  }
  return (
    <div className={className}>
      {hourData.temp}°
      {rainingItem}
    </div>
  )
}

export default WeatherHour
