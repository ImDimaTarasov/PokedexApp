const initialState = {
    pokemon: [],
    pokemonLoadingStatus: 'idle',
    filters: [],
    activeFilter: '',
    modal: false,
    chosenPokemon: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POKEMON_FETCHING':
            return {
                ...state,
                pokemonLoadingStatus: 'loading'
            }
        case 'POKEMON_FETCHED':
            return {
                ...state,
                pokemon: action.payload,
                pokemonLoadingStatus: 'idle'
            }
        case 'POKEMON_FETCHING_ERROR':
            return {
                ...state,
                pokemonLoadingStatus: 'error'
            }
        case 'MODAL_CHANGE':
            return {
                ...state,
                modal: action.payload
            }
        case 'POKEMON':
            return {
                ...state,
                chosenPokemon: action.payload
            }
        case 'FILTER_FETCHED':
            return {
                ...state,
                filters: action.payload
            }
        case 'ACTIVE_FILTER':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default reducer;