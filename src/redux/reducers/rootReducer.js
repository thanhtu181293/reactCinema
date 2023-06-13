import { combineReducers } from "redux";
import TrailerPopupReducers from './TrailerPopupReducers';
import { MovieShowTimeReducer } from './MovieShowTimeReducer';
import FilmSectionReducer from './FilmSectionReducer'

const rootReducer = combineReducers({
    TrailerPopupReducers,
    MovieShowTimeReducer,
    FilmSectionReducer
});

export default rootReducer;
