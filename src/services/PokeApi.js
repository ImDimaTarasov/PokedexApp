import {useHttp} from '../hooks/http.hook';

const PokeApi = () => {
    const {request, process, setProcess} = useHttp();
    
    const getAllPokemons = async() => {
        const res = await request("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
        return res.results;
    }
    
    const getOnePokemon = async(url) => {
        const res = await request(url);
        return _transformPokemon(res);
    }
    
    const _transformPokemon = (pokemon) => {
        return {
            name: pokemon.name.toUpperCase(),
            id: pokemon.id,
            type: pokemon.types[0].type.name,
            sprites: pokemon.sprites,
            height: pokemon.height,
            weight: pokemon.weight
        }
    }
    return {
        getAllPokemons,
        getOnePokemon,
        setProcess,
        process
    }
}
export default PokeApi;