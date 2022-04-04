import AppHeader from '../appHeader/AppHeader';
import PokemonList from '../pokemonList/PokemonList';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <PokemonList/>
        </div>
    )
};

export default App;