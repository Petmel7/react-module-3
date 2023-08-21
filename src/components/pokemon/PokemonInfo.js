import { Component } from "react";
import PokemonErrorViev from './PokemonErrorViev.js';
import PokemonDataViev from './PokemonDataViev.js';
import PokemonPendingViev from './PokemonPendingViev.js';

export default class PokemonInfo extends Component {

    state = {
        pokemon: null,
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName
        const nextName = this.props.pokemonName

        if (prevName !== nextName) {
            
            this.setState({ status: 'pending'});
            setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                    .then(response => {
                        if (response.ok) {
                            return response.json()
                        }
                        return Promise.reject(
                            new Error(`Нема покемона з імям ${nextName}`)
                        )
                    })
                    .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                    .catch(error => this.setState({ error, status: 'rejected' }))
            }, 1000)
        
        }
    }

    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
            return <h1>Введіть імя покемона</h1>;
        }
        if (status === 'pending') {
            return <PokemonPendingViev pokemonName={pokemonName}/>;
        }
        if (status === 'rejected') {
            return <PokemonErrorViev message={error.message}/>;
        }
        if (status === 'resolved') {
            return <PokemonDataViev pokemon={pokemon} />;
        }
    }
}