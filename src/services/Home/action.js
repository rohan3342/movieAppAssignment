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
  const response = await fetch(CONST.URL_MOVIE_LIST.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST,
    payload: results,
  });
};

export const getMovieListDateReleases = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_DATE_RELEASES.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_DATE_RELEASES,
    payload: results,
  });
};

export const getMovieListDateOld = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_DATE_OLD.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_DATE_OLD,
    payload: results,
  });
};

export const getMovieListPopularityMost = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_POPULARITY_MOST.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_POPULARITY_MOST,
    payload: results,
  });
};

export const getMovieListPopularityLess = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_POPULARITY_LESS.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_POPULARITY_LESS,
    payload: results,
  });
};

export const getMovieListRevenueHigher = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_REVENUE_HIGHER.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_REVENUE_HIGHER,
    payload: results,
  });
};

export const getMovieListRevenueLowest = (pageCount) => async dispatch => {
  const response = await fetch(CONST.URL_MOVIE_LIST_REVENUE_LOWEST.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_REVENUE_LOWEST,
    payload: results,
  });
};

export const getMovieListVotecountHighest = (pageCount) => async dispatch => {
  const response = await fetch(CONST.GET_MOVIE_LIST_VOTECOUNT_HIGHEST.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_VOTECOUNT_HIGHEST,
    payload: results,
  });
};

export const getMovieListVotecountLowest = (pageCount) => async dispatch => {
  const response = await fetch(CONST.GET_MOVIE_LIST_VOTECOUNT_LOWEST.concat('1'));
  const { results } = await response.json();
  dispatch({
    type: CONST.GET_MOVIE_LIST_VOTECOUNT_LOWEST,
    payload: results,
  });
};