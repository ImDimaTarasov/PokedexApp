import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokeApi from '../../services/PokeApi'; 
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { pokemonFetching, pokemonFetched, pokemonFetchingError, modalChange, chosenPokemon,  } from '../../actions';

import './pokemonList.scss';


const PokemonList = () => {
    const {pokemon, pokemonLoadingStatus, activeFilter, searchingPokemon, theme} = useSelector(state => state);
    const dispatch = useDispatch();

    const [offset, setOffset] = useState(20);
    const [newPokemonLoading, setNewPokemonLoading] = useState(false);

    const { getOnePokemon, getAllPokemonUrl} = PokeApi();

    useEffect(()=> {
        onRequest(offset);
        // eslint-disable-next-line
    },[]);
    
    const onRequest = (offset) => {
        if(!newPokemonLoading){
            dispatch(pokemonFetching());
        }
        setNewPokemonLoading(true)
        getAllPokemonUrl(offset)
            .then(data => getPokemonsByUrl(data))
            .then(list => dispatch(pokemonFetched([...pokemon, ...list])))
            .catch(() => dispatch(pokemonFetchingError()))
        
    }

    const getPokemonsByUrl = (urls) => {
        let newArr = urls.map(url => {
           return getOnePokemon(url)
            .then(data => {
                return data
            })
        });
        setOffset(offset + 20)
        return Promise.all(newArr)
    }
    
    if (pokemonLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (pokemonLoadingStatus === "error") {
        return <ErrorMessage/>;
    }
    
    const openModal = (pok) => {
        dispatch(modalChange(true));
        dispatch(chosenPokemon(pok))
    }

    const findPokemonbyName = (pokemon, filter) => {
        if (pokemon.length === 0){
            return pokemon
        }
        return pokemon.filter(item => {
            return item.name.includes(filter)
        })
    }

    const filteredPokemon = (pokemonList) => {
        if(activeFilter === "") {
            return pokemonList;
        } else {
            return pokemonList.filter(item => item.type === activeFilter);
        }
    }

    function renderCards(arr) {
        
        const cards = arr.map((item) => {
            
            return (
                <li onClick={() => openModal(item)} className="pokemon__card"
                tabIndex={0}
                key={item.id}>
                    <img src={item.spritFront} alt={item.name}/>
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
    let clazz = theme ? 'pokemon pokemon-dark' : 'pokemon pokemon-light';

    const elements = renderCards(filteredPokemon(findPokemonbyName(pokemon, searchingPokemon)));
    return (
        <div className={clazz}>
            {elements}
            <button 
            className="button"
            onClick={() => {onRequest(offset)}}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}
export default PokemonList;