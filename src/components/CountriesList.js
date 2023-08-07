import React from "react";

import CountryCard from "./CountryCard";

import '../styles/CountriesList.css';

const CountriesList = ({countries, qcountries}) =>{
  const lst = qcountries?.length > 0 ? qcountries : countries
  return (<main>
      {console.log('render countriesList ', lst.length)}
      <div className='main-wrapper'>

      {lst.map((country, index) => {
        const {name, flag, population, capital} = country;

        // TODO: usar recursos novos tipo ?. para remover itens abaixo
        const currency = (country.currencies || [{}])[0].name;
        const language = (country.languages || [{}])[0].name;
        const dinput = {
          name, flag, language, currency, population, capital
        }
        dinput.key = name;
        return <CountryCard {...dinput}/>
      })}
      </div>

  </main>)
}

export default CountriesList;