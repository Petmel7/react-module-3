import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';

export default function PokemonForm({ handleFormSubmit }) {
    const [pokemonName, setPokemonName] = useState('')
    
    const handleNameChage = event => {
        setPokemonName(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (pokemonName.trim() === '') {
            toast('Введіть імя Pokemona')
            return;
        }

        handleFormSubmit(pokemonName);
        setPokemonName('');
    }
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="pokemonName"
                    value={pokemonName}
                    onChange={handleNameChage} />
                
                <button
                    type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Search
                </button>
            </form>
        )
};