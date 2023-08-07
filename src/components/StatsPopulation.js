import React from 'react'

import '../styles/Stats.css';
import appUtl from '../share/commons';

const WIDTH = 700;

function outerBarSize(maxValue) {
    function getBarSize(value) {
      const p = value/maxValue * 100;
      return `${p}%`;
    }

    return getBarSize;
  }


  function formatNumber(num) {
    return num.toLocaleString();
  }


  const Country = ({name, size, getBarSize}) => {
    return (
      <div style={{width: WIDTH}}>
        <span style={{width: 150}}>{name.slice(0, 18)}</span>
        {/**  definir largura de bar com base em porcentagem  */}
        <span className='graph'><span className='bar' style={{width: getBarSize(size)}}></span></span>
        <span>{formatNumber(size)}</span>
      </div>
    )
  }
  /**
   * Resume data (World) and give 10 most popular languages.
   *
   * @param {Array} allCountries
   * @returns {Array} Resume of 10 most popular languages and World (resume all data)
   */
  function resumeCountries(allCountries) {
    const countries = [];
    let sum = 0;
    for (const {name, population} of allCountries) {
        countries.push(
            {name, population}
        )
        sum += population;
    }
    const resume = countries.sort((c1, c2) =>  c2.population - c1.population)
    return [{name: 'World', population: sum}].concat(resume.slice(0, 10))
  }

  const StatsPopulation = ({allCountries}) => {

    const countries = resumeCountries(allCountries);
    const getBarSize = outerBarSize(countries[0].population);
    appUtl.log('render population')

    return (
            <div>
                <p style={{textAlign: 'center', padding: 5, fontSize: 11}}>10 Most populed countries</p>
                <div className='countries' style={{'width': WIDTH, margin: '0 auto',}}>
                     {countries.map(
                        ({name, population}, index) =>
                            <Country key={index.toString()} name={name} size={population} getBarSize={getBarSize} />
                     )}
                </div>
            </div>
        )
  }

export default StatsPopulation;