function reducerProfil(state,action){
    let nextState
    switch(action.type){
        case 'ADD-PROFIL':
            nextState={
                ...state,
                profil: action.value
            }
            return nextState
        case 'UPDATE-PROFIL':
            return nextState
        case 'DELETE-PROFIL':
            return nextState
        default:
            return nextState
    }

    return nextState
}

export default toggleFavorite