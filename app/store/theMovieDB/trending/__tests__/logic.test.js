import { normalize } from 'normalizr';
import { movies } from '../../../schema';
import { httpClientMock } from '../../../../helpers/httpClientMock';

import trendingLogic from '../logic';
import { trendingSuccess, trendingFailure } from '../actions';
import { addEntities } from '../../data/actions';

describe('Trending - logic', () => {
  const sessionId = '9999';
  const state = {
    reducers: {
      login: {
        sessionId,
      },
    },
  };
  const dispatch = jest.fn();
  const getState = jest.fn(() => state);
  const done = jest.fn();

  describe('TRENDING_REQUEST', () => {
    const action = {
      payload: {
        page: 2,
      },
    };

    describe('Trending SUCCESS', () => {
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

      trendingLogic.process({ apiClient, getState, action }, dispatch, done);
      const { data } = request.response;
      const { entities, result } = normalize(data.results, [movies]);
      const { page } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.get).toHaveBeenCalledWith(
          `trending/movie/week?session_id=${sessionId}&page=${page}&language=en-US`,
        );
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches trendingSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(
          trendingSuccess({
            ...data,
            results: result,
          }),
        );
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Trending FAILURE', () => {
      const error = {
        status_message: 'error message',
      };
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      trendingLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches trendingFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(trendingFailure(error));
      });
    });
  });
});
