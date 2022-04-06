import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchingPokemon } from '../../actions';

import './searchingForm.scss';

const SearchingForm = () => {
    const {theme} = useSelector(state => state);

    const dispatch = useDispatch();
    const [pokName, setPokName] = useState('');

    useEffect (() => {
        dispatch(searchingPokemon(pokName))
    },[pokName]);


    const getName = (value) => {
        setPokName(value.toUpperCase())
    }
    

    let clazz = theme ? 'search__form search__form-dark' : 'search__form search__form-light';
    
    return (
        <div className={clazz}>
           <div className='search__form_wrapper'>
                <div className='search__form_input'>
                    <label htmlFor="pokemonName">Looking for</label>
                    <input type="text" name="pokemonName" id="pokemonName" value={pokName} onChange={(e) => getName(e.target.value)} placeholder="start typing here..." />
                </div>
           </div>
        </div>
    )
}

export default SearchingForm;