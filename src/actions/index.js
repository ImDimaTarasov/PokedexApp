export const pokemonFetching = () => {
    return {
        type: 'POKEMON_FETCHING'
    }
}

export const pokemonFetched = (pokemon) => {
    return {
        type: 'POKEMON_FETCHED',
        payload: pokemon
    }
}

export const pokemonFetchingError = () => {
    return {
        type: 'POKEMON_FETCHING_ERROR'
    }
}