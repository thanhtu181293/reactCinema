import {GET_FILM_LIST} from '../contants/FilmSectionReducerConstant'

const initialState = {
    listFilm: []
}

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_FILM_LIST: {
        return {...state, listFilm: action.data}
    }
    default:
        return state
    }
}
