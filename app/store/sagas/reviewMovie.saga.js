import { call, put, takeLatest } from 'redux-saga/effects';
import { getReviewMovieAPI } from '../../api/Movie';
import {
  REVIEW_MOVIE_REQUEST,
  REVIEW_MOVIE_SUCCESS,
  REVIEW_MOVIE_FAILURE,
} from '../constants/movie.constants';

function* reviewMovie(actions) {
  const success = payload => ({ type: REVIEW_MOVIE_SUCCESS, payload });
  const failure = payload => ({ type: REVIEW_MOVIE_FAILURE, payload });

  try {
    const response = yield call(getReviewMovieAPI, actions.payload);

    if (response.status !== 200) {
      throw response.data;
    }

    yield put(success(response.data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* reviewMovieSaga() {
  yield takeLatest(REVIEW_MOVIE_REQUEST, reviewMovie);
}

export default reviewMovieSaga;
