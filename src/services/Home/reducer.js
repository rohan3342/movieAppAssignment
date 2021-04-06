import * as CONST from './constant';

const initialState = {
  movieList: [],
  genresList: [],
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.GET_MOVIE_LIST:
      return { ...state, movieList: action.payload };

    case CONST.GET_MOVIE_GENRES_LIST:
      return { ...state, genresList: action.payload };

    case CONST.GET_MOVIE_LIST_DATE_RELEASES:
      return { ...state, movieList: action.payload };

    case CONST.GET_MOVIE_LIST_DATE_OLD:
      return { ...state, movieList: action.payload };

    case CONST.GET_MOVIE_LIST_POPULARITY_MOST:
      return { ...state, movieList: action.payload };

    case CONST.GET_MOVIE_LIST_POPULARITY_LESS:
      return { ...state, movieList: action.payload };

    case CONST.GET_MOVIE_LIST_REVENUE_HIGHER:
      return { ...state, movieList: action.payload };

    case CONST.GET_MOVIE_LIST_REVENUE_LOWEST:
      return { ...state, movieList: action.payload };

    default:
      return state;
  }
}
