import { useState, useEffect, useMemo} from 'react';

import PokeApi from '../../services/PokeApi'; 
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import './pokemonList.scss';

const setContent = (process, Component, newItemLoading ) => {
    switch (process) {
        case 'waiting' : 
            return <Spinner/>;
        case 'loading' :
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'error' :
            return <ErrorMessage/>;
        case 'confirmed' :
            return <Component/>;
        default: 
            throw new Error('Unexpected process state'); 
    } 
}

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [pokemonEnded, setPokemonEnded] = useState(false);

    const {getAllPokemons, getOnePokemon, process, setProcess} = PokeApi();


    useEffect(()=> {
        onRequest(true);
        // eslint-disable-next-line
    },[]);

    const onRequest = (initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllPokemons()
            .then(data => transformToLinks(data))
            .then(urls => {
                urls.map(url => {
                    getOnePokemon(url)
                    .then(data => setPokemonList(pokList => [...pokList, data]))
                });
            })
            .then(() => setProcess('confirmed'))
    }

    const onPokemonLoaded = (newPokemon) => {
        let ended = false;
        if (newPokemon.length < 20) {
            ended = true
        }
        setPokemonList(pokemonList => [...pokemonList, newPokemon]);
        setNewItemLoading(newItemLoading => false);
        setPokemonEnded(ended);
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
    const elements = setContent(process, () => renderCards(pokemonList), newItemLoading) ;
    // const elements = useMemo(()=> {
    //     return setContent(process, () => renderCards(pokemonList), newItemLoading);
    //      // eslint-disable-next-line
    // },[process]);
    return (
        <div className='pokemon'>
            {elements}
            <button 
            className="button"
            style={{'display' : pokemonEnded ? 'none' : 'block'}}
            disabled={newItemLoading}
            // onClick={() => {onRequest()}}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}
export default PokemonList;