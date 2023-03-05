
const SearchCityBar = ({ citiesList, changeCity }) => {
  return (
    <div className="flex items-center justify-around text-2xl uppercase flex-wrap">
      <a href="" className="border-b-2 " onClick={changeCity}>Bruxelles</a>
      <a href="" className="border-b-2" onClick={changeCity}>London</a>
      <a href="" className="border-b-2" onClick={changeCity}>Madrid</a>
      <a href="" className="border-b-2" onClick={changeCity}>Rome</a>
      <a href="" className="border-b-2" onClick={changeCity}>Moscow</a>
      <a href="" className="border-b-2" onClick={changeCity}>Kinshasa</a>
    </div >
  )
}

export default SearchCityBar
