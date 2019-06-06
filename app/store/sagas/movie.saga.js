import { call, put, takeLatest } from 'redux-saga/effects';
import { getMovieAPI } from '../../api/Movie';
import { MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE } from '../constants/movie.constants';

function* movie(actions) {
  const success = payload => ({ type: MOVIE_SUCCESS, payload });
  const failure = payload => ({ type: MOVIE_FAILURE, payload });

  try {
    const response = yield call(getMovieAPI, actions.payload);

    if (response.status !== 200) {
      throw response.data;
    }

    yield put(success(response.data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* movieSaga() {
  yield takeLatest(MOVIE_REQUEST, movie);
}

export default movieSaga;
