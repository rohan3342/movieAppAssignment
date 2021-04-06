/* ActionTypes */
export const GET_MOVIE_LIST = 'GET_MOVIE_LIST';
export const GET_MOVIE_GENRES_LIST = 'GET_MOVIE_GENRES_LIST';
export const GET_MOVIE_LIST_DATE_RELEASES = 'GET_MOVIE_LIST_DATE_RELEASES';
export const GET_MOVIE_LIST_DATE_OLD = 'GET_MOVIE_LIST_DATE_OLD';
export const GET_MOVIE_LIST_POPULARITY_MOST = 'GET_MOVIE_LIST_POPULARITY_MOST';
export const GET_MOVIE_LIST_POPULARITY_LESS = 'GET_MOVIE_LIST_POPULARITY_LESS';
export const GET_MOVIE_LIST_REVENUE_HIGHER = 'GET_MOVIE_LIST_REVENUE_HIGHER';
export const GET_MOVIE_LIST_REVENUE_LOWEST = 'GET_MOVIE_LIST_REVENUE_LOWEST';

/* API KEY for MovieDB */
export const APIKEY_V3 = '2fbe3d9d5baf67b5f0f3e45bcc7e875d';
export const APIKEY_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmJlM2Q5ZDViYWY2N2I1ZjBmM2U0NWJjYzdlODc1ZCIsInN1YiI6IjYwNmJmMzIwMWNjNGZmMDA0MDNhOGUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWmhewO-BLca7aZCQ4H4k1RN6lLkHoyY6pKLSoqlVUQ';

/* List Of Genres */
export const URL_MOVIE_GENRES_LIST = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY_V3}`;

/* URL List Of Movies With Filters */
export const URL_MOVIE_LIST = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&page=1`;

export const URL_MOVIE_LIST_POPULARITY_MOST = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=popularity.desc&page=1`;

export const URL_MOVIE_LIST_POPULARITY_LESS = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=popularity.asc&page=1`;

export const URL_MOVIE_LIST_DATE_RELEASES = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=release_date.desc&page=1`;

export const URL_MOVIE_LIST_DATE_OLD = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=release_date.asc&page=1`;

export const URL_MOVIE_LIST_REVENUE_HIGHER = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=revenue.desc&page=1`;

export const URL_MOVIE_LIST_REVENUE_LOWEST = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=revenue.asc&page=1`;
