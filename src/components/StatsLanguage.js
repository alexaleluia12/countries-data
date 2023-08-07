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
   * Resume data (World) and give 10 most popular contries.
   *
   * @param {Array} allCountries
   * @returns {Array} Resume of 10 most popular contries and World (resume all data)
   */
  function resumeCountries(allCountries) {
    const mlanguages = {};
    let sum = 0;
    for (const {languages} of allCountries) {
        const {name} = languages[0]
        sum++
        if (name in mlanguages)
            mlanguages[name] += 1
        else
            mlanguages[name] = 1
    }

    const resume = Object.entries(mlanguages).sort((c1, c2) =>  c2[1] - c1[1])
    return [['World', sum]].concat(resume.slice(0, 10))
  }

  const StatsLanguage = ({allCountries}) => {
    const countries = resumeCountries(allCountries);
    const getBarSize = outerBarSize(countries[0][1]);
    appUtl.log('render language');
    return (
            <div>
                <p style={{textAlign: 'center', padding: 5, fontSize: 11}}>10 Most popular languages</p>
                <div className='countries' style={{'width': WIDTH, margin: '0 auto',}}>
                     {countries.map(
                        ([name, size], index) =>
                            <Country key={index.toString()} name={name} size={size} getBarSize={getBarSize} />
                     )}
                </div>
            </div>
        )
  }

export default StatsLanguage;