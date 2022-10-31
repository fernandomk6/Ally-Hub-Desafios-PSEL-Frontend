import React, {useEffect, useState } from 'react'
import Selects from './Selects'

const Destinations = () => {
  const [allCities, setAllCities] = useState([])
  const [countryCities, setCountryCities] = useState([])
  const [countries, setCountries] = useState([])
  const [destiny, setDestiny] = useState([])
  console.log(destiny)

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://amazon-api.sellead.com/country')
      const countries = await response.json()

      setCountries(countries)
    }

    const fetchAllCities = async () => {
      const response = await fetch('https://amazon-api.sellead.com/city')
      const allCities = await response.json()

      setAllCities(allCities)
    }

    fetchCountries()
    fetchAllCities()
  }, [])


  const updateCitiesSelect = (e) => {
    const countryCode = Array
      .from(e.target.options)
      .find(option => option.selected)
      .value

    const countryCities = allCities.filter(city => city.country_code === countryCode)

    setCountryCities(countryCities)
 
  }

  const countriesOptions = countries.map((country, index)=> (
    <option key={`country-${index}`}  value={country.code}>{country.name}</option>
  ))

  const citiesOptions = countryCities.map((city, index) => (
    <option key={`city-${index}`}  value={city.id}>{city.name_ptbr}</option>
  ))

  const confirmDestination = () => {
    console.log('destino confirmado')
  }

  const showDestiny = (e) => {
    const cityName = Array
      .from(e.target.options)
      .find(option => option.selected).textContent

    setDestiny(prev => prev.concat(cityName))
  }

  return (
    <div id="destinations">
      <h2>Destinos de interesse</h2>
      <div>Rio de janeiro, Brasil <span>Remover</span></div>
      <div>Bruxelas, Russia <span>Remover</span></div>
      
      <Selects 
        updateCitiesSelect={updateCitiesSelect}
        showDestiny={showDestiny}
        countriesOptions={countriesOptions}
        citiesOptions={citiesOptions}
      />
      
      <button type="button" onClick={confirmDestination}>Confirmar destino</button>

      <div>
        { destiny.map(dest => { 
          <p>{dest}</p>
        }) }
      </div>
      
    </div>
  )
}

export default Destinations