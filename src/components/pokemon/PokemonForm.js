import { Component } from "react";
import { ImSearch } from "react-icons/im";

export default class PokemonForm extends Component {
    state = {
        pokemonName: ''
    }

    handleNameChnge = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.handleFormSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    }

    render() {
        return (
            <form>
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