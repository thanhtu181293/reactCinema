const initialState = {
    src: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE_TRAILER_POPUP':
        case 'SHOW_TRAILER_POPUP': {
            let newState = {...state}
            newState.src = action.src
            return {...newState}
        }
        default: {
            return state
        }
  
    }
}
