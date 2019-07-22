import { normalize } from 'normalizr';
import { movies } from '../../../schema';
import { httpClientMock } from '../../../../helpers/httpClientMock';

import { favoriteLogic, addToFavoriteLogic } from '../logic';
import {
  favoriteRequest,
  favoriteSuccess,
  favoriteFailure,
  addToFavoriteSuccess,
  addToFavoriteFailure,
} from '../actions';
import { addEntities } from '../../data/actions';
import { movieRequest } from '../../movie/actions';

describe('Favorite - logic', () => {
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

  describe('FAVORITE_REQUEST', () => {
    const action = {
      payload: {
        page: 1,
      },
    };

    describe('Favorite SUCCESS', () => {
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

      favoriteLogic.process({ apiClient, getState, action }, dispatch, done);
      const { results } = request.response.data;
      const { entities, result } = normalize(results, [movies]);

      it('Should return correct URL', () => {
        const { page } = action.payload;

        expect(apiClient.get).toHaveBeenCalledWith(
          `account/${accountId}/favorite/movies?session_id=${sessionId}&page=${page}`,
        );
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches favoriteSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(
          favoriteSuccess({
            ...request.response.data,
            results: result,
          }),
        );
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Favorite FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      favoriteLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches favoriteFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(favoriteFailure(error));
      });
    });
  });

  describe('ADD_TO_FAVORITE_REQUEST', () => {
    const action = {
      payload: {
        movieId: 555,
        favorite: true,
      },
    };

    describe('Add movie to favorite SUCCESS', () => {
      const request = {
        method: 'post',
        response: {
          data: {
            message: 'message success',
          },
        },
      };
      const apiClient = httpClientMock(request);

      addToFavoriteLogic.process({ apiClient, getState, action }, dispatch, done);
      const { movieId, favorite } = action.payload;
      const { data } = request.response;

      it('Should return correct URL', () => {
        expect(apiClient.post).toHaveBeenCalledWith(
          `account/${accountId}/favorite?session_id=${sessionId}`,
          {
            media_type: 'movie',
            media_id: movieId,
            favorite,
          },
        );
      });

      it('dispatches addToFavoriteSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(addToFavoriteSuccess(data));
      });

      it('dispatches favoriteRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(favoriteRequest({ page: 1 }));
      });

      it('dispatches movieRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(movieRequest({ movieId }));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Add movie to favorite FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'post',
        response: error,
        reject: true,
      });

      addToFavoriteLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches addToFavoriteFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(addToFavoriteFailure(error));
      });
    });
  });
});
