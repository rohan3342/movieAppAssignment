import * as CONST from './constant';

export const getMovieGenres = () => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_GENRES_LIST);
  const { genres } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_GENRES_LIST,
    payload: genres,
  });
};

export const getMovieList = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST,
    payload: results,
  });
};

export const getMovieListDateReleases = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_DATE_RELEASES);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_DATE_RELEASES,
    payload: results,
  });
};

export const getMovieListDateOld = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_DATE_OLD);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_DATE_OLD,
    payload: results,
  });
};

export const getMovieListPopularityMost = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_POPULARITY_MOST);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_POPULARITY_MOST,
    payload: results,
  });
};

export const getMovieListPopularityLess = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_POPULARITY_LESS);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_POPULARITY_LESS,
    payload: results,
  });
};

export const getMovieListRevenueHigher = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_REVENUE_HIGHER);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_REVENUE_HIGHER,
    payload: results,
  });
};

export const getMovieListRevenueLowest = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_REVENUE_LOWEST);
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_REVENUE_LOWEST,
    payload: results,
  });
};
