import {GET_MOVIE_SHOWTIME_HOME} from '../contants/MovieShowTimeContants';

const initialState = {
    cinemaSystemInfo: [],
    movieShowTimeInfo: [],
}

export const MovieShowTimeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_SHOWTIME_HOME:
            return { ...state, movieShowTimeInfo: action.data }

        default:
            return state
    }
}
