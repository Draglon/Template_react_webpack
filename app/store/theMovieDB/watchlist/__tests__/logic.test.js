import { normalize } from 'normalizr';
import { movies } from '../../../schema';
import { httpClientMock } from '../../../../helpers/httpClientMock';

import { watchlistLogic, addToWatchlistLogic } from '../logic';
import {
  watchlistRequest,
  watchlistSuccess,
  watchlistFailure,
  addToWatchlistSuccess,
  addToWatchlistFailure,
} from '../actions';
import { addEntities } from '../../data/actions';
import { movieRequest } from '../../movie/actions';

describe('Watchlist - logic', () => {
  const accountId = '999';
  const sessionId = '9999';
  const state = {
    reducers: {
      profile: {
        data: {
          id: accountId,
        },
      },
      login: {
        sessionId,
      },
    },
  };
  const error = {
    status_message: 'error message',
  };

  const dispatch = jest.fn();
  const getState = jest.fn(() => state);
  const done = jest.fn();

  describe('WATCHLIST_REQUEST', () => {
    const action = {
      payload: {
        page: 1,
      },
    };

    describe('Watchlist SUCCESS', () => {
      const request = {
        method: 'get',
        response: {
          data: {
            results: [{ id: 1 }, { id: 2 }],
            total_results: 45,
            page: 2,
          },
        },
      };
      const apiClient = httpClientMock(request);

      watchlistLogic.process({ apiClient, getState, action }, dispatch, done);
      const { results } = request.response.data;
      const { entities, result } = normalize(results, [movies]);

      it('Should return correct URL', () => {
        const { page } = action.payload;

        expect(apiClient.get).toHaveBeenCalledWith(
          `account/${accountId}/watchlist/movies?session_id=${sessionId}&page=${page}`,
        );
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches watchlistSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(
          watchlistSuccess({
            ...request.response.data,
            results: result,
          }),
        );
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Watchlist FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      watchlistLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches watchlistFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(watchlistFailure(error));
      });
    });
  });

  describe('ADD_TO_WATCHLIST_REQUEST', () => {
    const action = {
      payload: {
        movieId: 555,
        watchlist: true,
      },
    };

    describe('Add movie to watchlist SUCCESS', () => {
      const request = {
        method: 'post',
        response: {
          data: {
            message: 'message success',
          },
        },
      };
      const apiClient = httpClientMock(request);

      addToWatchlistLogic.process({ apiClient, getState, action }, dispatch, done);
      const { movieId, watchlist } = action.payload;
      const { data } = request.response;

      it('Should return correct URL', () => {
        expect(apiClient.post).toHaveBeenCalledWith(
          `account/${accountId}/watchlist?session_id=${sessionId}`,
          {
            media_type: 'movie',
            media_id: movieId,
            watchlist,
          },
        );
      });

      it('dispatches addToWatchlistSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(addToWatchlistSuccess(data));
      });

      it('dispatches watchlistRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(watchlistRequest({ page: 1 }));
      });

      it('dispatches movieRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(movieRequest({ movieId }));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Add movie to watchlist FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'post',
        response: error,
        reject: true,
      });

      addToWatchlistLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches addToWatchlistFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(addToWatchlistFailure(error));
      });
    });
  });
});
