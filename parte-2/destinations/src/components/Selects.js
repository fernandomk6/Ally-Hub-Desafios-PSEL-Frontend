const Selects = ({ updateCitiesSelect, countriesOptions, citiesOptions, showDestiny }) => {
  return (
    <div>
      <select name="country" onInput={updateCitiesSelect}>
        { countriesOptions }
      </select>
      <select name="city" onInput={showDestiny}>
        { citiesOptions.length === 0 
          ? (<option>Não disponível</option>) 
          : citiesOptions }
      </select>
    </div>
  )
}

export default Selects