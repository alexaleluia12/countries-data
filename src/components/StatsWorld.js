import { Link, Outlet, Route, Routes } from "react-router-dom";
import StatsPopulation from "./StatsPopulation";
import StatsLanguage from "./StatsLanguage";
import appUtl from "../share/commons";

import '../styles/Stats.css';


const StatsWorld = ({ allCountries, qcountries, }) => {
    const lst = qcountries?.length > 0 ? qcountries : allCountries
    appUtl.log('Render StatsWorld - ', lst.length)

    return (

            <div id="stats">
                 <nav style={{ textAlign: 'center', padding: 12 }}>
                    <button className='btn-population'>
                        <Link to='/'>Population</Link>
                    </button>
                    <button className="btn-languages">
                        <Link  to='/languages'>Languages</Link>
                    </button>

                </nav>
                <Routes world >
                    <Route index path='/' element={<StatsPopulation allCountries={lst} />} />
                    <Route path='/languages' element={<StatsLanguage allCountries={lst} />} />
                </Routes>


                <div>
                    <Outlet />
                </div>
            </div>

    )
}

export default StatsWorld;