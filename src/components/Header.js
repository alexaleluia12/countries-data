import appUtl from '../share/commons';
import '../styles/Header.css';

const Header = ({countriesAmout=0, amoutQuery}) => (
    <header>
      <div className='header-wrapper'> {appUtl.log('Render Header -', {amoutQuery})}
        <h1>World Countries Data</h1>
        <h2>Currenty, we have {countriesAmout} countries</h2>
        { Number.isInteger(amoutQuery) && `${amoutQuery} satisfaed the search criteria` }
      </div>
    </header>
  )
export default Header;