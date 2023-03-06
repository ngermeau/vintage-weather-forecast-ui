const SearchCityBar = ({ citiesList, changeCity }) => {
  return (
    <div className="flex items-center justify-around text-2xl uppercase flex-wrap">
      <a onClick={() => changeCity("bruxelles")} className="border-b-2">
        Bruxelles
      </a>
      <a onClick={() => changeCity("london")} className="border-b-2">
        london
      </a>
      <a onClick={() => changeCity("rome")} className="border-b-2">
        rome
      </a>
      <a onClick={() => changeCity("moscow")} className="border-b-2">
        moscow
      </a>
      <a onClick={() => changeCity("kinshasa")} className="border-b-2">
        kinshasa
      </a>
    </div>
  )
}

export default SearchCityBar
