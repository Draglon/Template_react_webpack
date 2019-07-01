import { movieReducer, movieInitialState } from '../reducers';
import * as t from '../actionTypes';

describe('Account profile reducer', () => {
  it('state is undefined', () => {
    expect(movieReducer(undefined, {})).toEqual(movieInitialState);
  });

  // MOVIE_REQUEST
  it('MOVIE_REQUEST after situation without error', () => {
    const action = {
      type: t.MOVIE_REQUEST,
    };

    expect(movieReducer(movieInitialState, action)).toEqual({
      ...movieInitialState,
      isLoading: true,
      error: null,
    });
  });

  // MOVIE_SUCCESS
  it('MOVIE_SUCCESS', () => {
    const stateBefore = {
      ...movieInitialState,
      isLoading: true,
    };

    const action = {
      type: t.MOVIE_SUCCESS,
      payload: {
        id: 'some id',
        title: 'some title',
        overview: 'some overview',
        budget: 0,
        genres: [],
        revenue: 0,
        runtime: 0,
        language: 'English',
        credits: {
          cast: [],
          crew: [],
        },
        images: {
          backdrops: [],
          posters: [],
        },
      },
    };

    expect(movieReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      data: {
        id: action.payload.id,
        title: action.payload.title,
        overview: action.payload.overview,
        budget: action.payload.budget,
        genres: action.payload.genres,
        revenue: action.payload.revenue,
        runtime: action.payload.runtime,
        language: action.payload.language,
        credits: {
          cast: action.payload.cast,
          crew: action.payload.crew,
        },
        images: {
          backdrops: action.payload.backdrops,
          posters: action.payload.posters,
        },
      },
    });
  });

  // MOVIE_FAILURE
  it('MOVIE_FAILURE', () => {
    const stateBefore = {
      ...movieInitialState,
      isLoading: true,
    };

    const action = {
      type: t.MOVIE_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(movieReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload.message,
    });
  });
});
