import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    }

    handleNameChnge = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast('Введіть імя Pokemona')
            return;
        }

        this.props.handleFormSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChnge} />
                
                <button
                    type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Search
                </button>
            </form>
        )
    }
}