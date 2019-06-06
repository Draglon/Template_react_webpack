import { call, put, takeLatest } from 'redux-saga/effects';
import { getSearchMovieAPI } from '../../api/Movie';
import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE } from '../constants/movie.constants';

function* searchMovie(actions) {
  const success = payload => ({ type: SEARCH_MOVIE_SUCCESS, payload });
  const failure = payload => ({ type: SEARCH_MOVIE_FAILURE, payload });

  try {
    const response = yield call(getSearchMovieAPI, actions.payload);

    if (response.status !== 200) {
      throw response.data;
    }

    yield put(success(response.data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* searchMovieSaga() {
  yield takeLatest(SEARCH_MOVIE_REQUEST, searchMovie);
}

export default searchMovieSaga;
