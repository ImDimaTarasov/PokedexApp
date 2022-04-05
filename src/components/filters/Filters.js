import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filtersFetched, getActiveFilter } from '../../actions';

import './filter.scss';

const Filters = () => {
    const {pokemon, filters, activeFilter} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=> {
        getFilters();
        // eslint-disable-next-line
    },[pokemon]);
    
    const getFilters = () => {
    
        let filt = pokemon.reduce((newArr, pokemon) => {
          if('type' in pokemon){
            newArr.push(pokemon.type)
          }
          return newArr
        },[])
        let uniqFilter = [...new Set(filt)];
        dispatch(filtersFetched(uniqFilter));
    }
    const filterSelect = (name) => {
        if(name === activeFilter){
            dispatch(getActiveFilter(''))
        } else {
            dispatch(getActiveFilter(name))
        }
            
    }
    const renderBtns = (arr) => {
        const btns = arr.map((item, i) => {
            const active = activeFilter === item;
            const clazz = active ? `button button__filter button-active`: `button button__filter`
            return (
                <button 
                className={clazz} 
                key={i}
                onClick={()=> filterSelect(item)}>
                    {item}
                </button>
                
            )
        });
        return btns
    }
    const elements = renderBtns(filters)
    return (
        <div className='filters'>
            <div className='btns'>
                {elements}
            </div>
        </div>
    )
}

export default Filters;