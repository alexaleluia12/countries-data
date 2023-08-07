import '../styles/CountryCard.css';

const CountryCard = ({name, language, currency, flag, population, capital}) => (

    <div className="country-element">
      <img src={flag} alt='flag'/>
      <section>
        <h3>{name}</h3>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Lingua:</strong> {language}</p>
        <p><strong>População:</strong> {population.toLocaleString()}</p>
        <p><strong>Moeda:</strong> {currency}</p>
      </section>

    </div>
)
export default CountryCard;