import AppHeader from '../appHeader/AppHeader';
import PokemonList from '../pokemonList/PokemonList';
import ModalWindow from '../modalWindow/ModalWindow';
import Filters from '../filters/Filters';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <Filters/>
            <ModalWindow/>
            <PokemonList/>
            
        </div>
    )
};

export default App;