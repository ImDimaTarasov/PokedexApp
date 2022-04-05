import AppHeader from '../appHeader/AppHeader';
import PokemonList from '../pokemonList/PokemonList';
import ModalWindow from '../modalWindow/ModalWindow';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <ModalWindow/>
            <PokemonList/>
        </div>
    )
};

export default App;