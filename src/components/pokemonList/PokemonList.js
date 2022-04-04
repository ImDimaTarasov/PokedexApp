import { useState, useEffect} from 'react';

import PokeApi from '../../services/PokeApi'; 

import './pokemonList.scss';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    
    const {getAllPokemons, getOnePokemon} = PokeApi();


    useEffect(()=> {
        onRequest();
        // eslint-disable-next-line
    },[]);

    const onRequest = () => {
        getAllPokemons()
            .then(data => transformToLinks(data))
            .then(urls => {
                urls.map(url => {
                    getOnePokemon(url)
                    .then(data => setPokemonList(pokList => [...pokList, data]))
                });
            })
    }

    const transformToLinks = (data) => {
        let newList = data.map(item => {
            return item.url
        })
        return newList;
    }

    function renderCards(arr) {
        
        const cards = arr.map((item) => {
            
            return (
                <li className="pokemon__card"
                tabIndex={0}
                key={item.id}>
                    <img src={item.sprites.front_default} alt={item.name}/>
                    <div className="pokemon__name">{item.name}</div>
                    <div className="pokemon__type">type: {item.type}</div>
                </li>
            )
        });
        return (
            <ul className='pokemon__list'>
                {cards}
            </ul>
        )
        
    }

    console.log(pokemonList)
    const elements = renderCards(pokemonList);
    return (
        <div >
            {elements}
        </div>
    )
}
export default PokemonList;