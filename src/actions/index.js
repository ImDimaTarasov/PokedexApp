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

export const modalChange = (boolean) => {
    return {
        type: 'MODAL_CHANGE',
        payload: boolean
    }
}

export const chosenPokemon = (pokemon) => {
    return {
        type: 'POKEMON',
        payload: pokemon
    }
}