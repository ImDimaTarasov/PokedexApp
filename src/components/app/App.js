import AppHeader from '../appHeader/AppHeader';
import PokemonList from '../pokemonList/PokemonList';
import ModalWindow from '../modalWindow/ModalWindow';
import Filters from '../filters/Filters';
import SearchingForm from '../searchingform/SearchingForm';

import { useSelector } from 'react-redux';

const App = () => {
    const {theme} = useSelector(state => state);
    let clazz = theme ? 'appWrapper-dark' : 'appWrapper-light';
    return (
       <div className={clazz}>
            <div className="app">
                <AppHeader/>
                <SearchingForm/>
                <Filters/>
                <ModalWindow/>
                <PokemonList/>
            </div>
       </div>
    )
};

export default App;