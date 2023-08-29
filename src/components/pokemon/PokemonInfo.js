import { useState, useEffect } from "react";
import PokemonErrorViev from './PokemonErrorViev.js';
import PokemonDataViev from './PokemonDataViev.js';
import PokemonPendingViev from './PokemonPendingViev.js';

export default function PokemonInfo({ pokemonName }) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (!pokemonName) {
            return
        }

        setStatus('pending');
        
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(
                        new Error(`Нема покемона з імям ${pokemonName}`)
                    )
                })
                .then(pokemon => {
                    setPokemon(pokemon)
                    setStatus('resolved')
                })

                .catch(error => {
                    setError(error)
                    setStatus('rejected')
                })
            
        }, 1000)
        
    }, [pokemonName]);

    if (status === 'idle') {
        return <h1>Введіть імя покемона</h1>;
    }
    if (status === 'pending') {
        return <PokemonPendingViev pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
        return <PokemonErrorViev message={error.message} />;
    }
    if (status === 'resolved') {
        return <PokemonDataViev pokemon={pokemon} />;
    }
}
    




// export default function PokemonInfo({ pokemonName }) {
//     const [pokemon, setPokemon] = useState(null);
//     const [error, setError] = useState(null);
//     const [status, setStatus] = useState('idle');

//     useEffect(() => {
//         const fetchPokemon = async () => {
//             try {
//                 setStatus('pending');
//                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setPokemon(data);
//                     setStatus('resolved');
//                 } else {
//                     throw new Error(`Нема покемона з іменем ${pokemonName}`);
//                 }
//             } catch (error) {
//                 setError(error);
//                 setStatus('rejected');
//             }
//         };

//         fetchPokemon();
//     }, [pokemonName]);

//     if (status === 'idle') {
//         return <h1>Введіть ім'я покемона</h1>;
//     }
//     if (status === 'pending') {
//         return <PokemonPendingViev pokemonName={pokemonName} />;
//     }
//     if (status === 'rejected') {
//         return <PokemonErrorViev message={error.message} />;
//     }
//     if (status === 'resolved') {
//         return <PokemonDataViev pokemon={pokemon} />;
//     }
// }

