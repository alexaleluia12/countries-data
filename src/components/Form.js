import React from "react";

import '../styles/Form.css'
import appUtl from "../share/commons";

export default class Form extends React.Component {
    state = {
        query: '',
    }

    constructor(props) {
        super(props);
        this.countries = props.countries
        this.setQCountries = props.setQCountries;
        appUtl.log('Form - countries tem tamanho ', this.countries.length);
    }
    handleChangle = (e) => {
        const {value} = e.target;
        appUtl.log('busca de ', value, ' countries tem tamanho: ',  this.countries.length);

        const filtredCountries = this.filterByQuery(value);
        appUtl.log('apresentar - ', filtredCountries?.length, ' paises ');


        this.setQCountries(filtredCountries);
        this.setState({query: value});

    }
    filterByQuery = (query) => {
        if (query.length === 0)
            return null
        return this.countries.filter(country => {
            query = query.toLowerCase()
            const {name='', capital='', languages=[]} = country;
            // appUtl.log('busca de ', {name, capital, languages})
            if (name.toLowerCase().search(query) !== -1)
                return true
            if (capital.toLowerCase().search(query) !== -1)
                return true;
            // search on language
            for (const {name} of languages) {
                if (name.toLowerCase().search(query) !== -1) {
                    return true;
                }
            }

            return false;
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <section className="input" id="top">
                <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search your country by name, city and language"
                      value={this.state.query}
                      onChange={this.handleChangle}
                      />
                </form>
                <a href="#stats">Stats</a>
            </section>
        );
    }
}
