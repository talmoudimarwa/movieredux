import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, ADD_TITLE, ADD_IMAGE, ADD_YEAR, ADD_RATING, ADD_RATINGFILTER, ADD_TITLEFILTER } from "../action/actionType"
import TabMovie from '../component/TabMovie.js';


const initialState = {
    tabMovie: TabMovie,
    title: '',
    year: '',
    image: '',
    rating: '',
    minRatingFilter: 0,
    titleFilter: ''
}
const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return { ...state, tabMovie: state.tabMovie.concat(action.payload) }  // obj

        case DELETE_MOVIE:
            return { ...state, tabMovie: state.tabMovie.filter((el) => el.id !== action.payload) }

        case EDIT_MOVIE:
            return { ...state, tabMovie: state.tabMovie.map(el => (el.id === action.payload.id) ? action.payload : el) }

        case ADD_TITLE:
            return { ...state, title: action.payload }  // e.target.value
        case ADD_IMAGE:
            return { ...state, image: action.payload }
        case ADD_YEAR:
            return { ...state, year: action.payload }
        case ADD_RATING:
            return { ...state, rating: action.payload }
        case ADD_RATINGFILTER:
            return { ...state, minRatingFilter: action.payload }
        case ADD_TITLEFILTER:
            return { ...state, titleFilter: action.payload }
        default:
            return state
    }
}

export default MovieReducer