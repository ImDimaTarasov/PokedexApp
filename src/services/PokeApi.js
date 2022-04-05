import {useHttp} from '../hooks/http.hook';

const PokeApi = () => {
    const {request} = useHttp();
    const _baseOffset = 20;

    const getAllPokemonUrl = async(offset = _baseOffset) => {
        const res = await request(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        return (_transformToLinks(res.results))
    }
    
    const getOnePokemon = async(url) => {
        const res = await request(url);
        return _transformPokemon(res);
    }


    const _transformToLinks = (list) => {
        let newList = list.map(item => {
            return item.url
        })
        return newList;
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
        getOnePokemon,
        getAllPokemonUrl
    }
}
export default PokeApi;