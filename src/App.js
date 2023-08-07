import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import CountriesList from "./components/CountriesList"
import Footer from "./components/Footer"
import axios from "axios"

import appUtl from "./share/commons"
import StatsWorld from "./components/StatsWorld"
import { BrowserRouter, } from "react-router-dom"

export default class App extends React.Component {
  state = {
    countries: [],
    qcountries: null,
  }
  componentDidMount() {
    this.loadData(
      // ** tava dando erro aqui, pq, qp nao mostrava nenhum log
      // d => this.setState({countries: d})
    ).catch(e => { console.error(e); })

  }
  loadData = async () => {
    appUtl.log('start request');
    const url = 'https://restcountries.com/v2/all';
    const resp = await axios.get(url);
    if (resp.status !== 200) {
      throw Error('Não foi possivel carregar os dados.')
    }
    const result = await resp.data;
    appUtl.log('req end - ', result.length);
    // cp - this.setState({ countries: result });
    this.setState({ countries: result});
    // atualizo cxt aqui
  }

  setQCountries = (nValue) => {
    appUtl.log('update qcountries on App ', {nValue});
    this.setState({
      qcountries: nValue
    });
  }

  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <div className='app' >
            {appUtl.log('render App')}
            {/** parei aqui ... */}
            <Header countriesAmout={this.state.countries.length} amoutQuery={this.state.qcountries?.length} />
            <Form setQCountries={this.setQCountries} countries={this.state.countries} key={`f-${this.state.countries.length}`} />
            <CountriesList countries={this.state.countries} qcountries={this.state.qcountries} />
            <StatsWorld allCountries={this.state.countries}  qcountries={this.state.qcountries} />
            <Footer />
          </div>
        </BrowserRouter>
      </React.StrictMode>

    )
  }
}
