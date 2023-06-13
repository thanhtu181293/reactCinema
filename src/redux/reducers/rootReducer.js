import { combineReducers } from "redux";
import TrailerPopupReducers from './TrailerPopupReducers';
import { MovieShowTimeReducer } from './MovieShowTimeReducer';
import FilmSectionReducer from './FilmSectionReducer'
import BookingTicketReducer from './BookingTicketReducer'

const rootReducer = combineReducers({
    TrailerPopupReducers,
    MovieShowTimeReducer,
    FilmSectionReducer,
    BookingTicketReducer
});

export default rootReducer;
