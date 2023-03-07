const SearchCityBar = ({ citiesList, changeCity }) => {
  return (
    <div className="flex items-center justify-around text-2xl uppercase flex-wrap">
      {citiesList.map((city) => (
        <a onClick={() => changeCity(city.name)} className="border-b-2 cursor-pointer">
         {city.name} 
        </a>
      ))}
    </div>
  )
}

export default SearchCityBar
