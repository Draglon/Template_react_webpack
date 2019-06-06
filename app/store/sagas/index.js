import { all } from 'redux-saga/effects';
import movieSaga from './movie.saga';
// import searchMovieSaga from './searchMovie.saga';
// import reviewMovieSaga from './reviewMovie.saga';

export default function* rootSaga() {
  yield all([
    movieSaga(),
    // searchMovieSaga(),
    // reviewMovieSaga(),
  ]);
}
