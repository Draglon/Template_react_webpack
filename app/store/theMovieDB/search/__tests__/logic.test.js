import { normalize } from 'normalizr';
import { movies } from '../../../schema';
import { httpClientMock } from '../../../../helpers/httpClientMock';

import searchLogic from '../logic';
import { searchSuccess, searchFailure } from '../actions';
import { addEntities } from '../../data/actions';

describe('Search - logic', () => {
  const dispatch = jest.fn();
  const done = jest.fn();

  describe('SEARCH_REQUEST', () => {
    const action = {
      payload: {
        query: 'search query',
        page: 2,
      },
    };

    describe('Search SUCCESS', () => {
      const request = {
        method: 'get',
        response: {
          data: {
            query: '',
            results: [{ id: 1 }, { id: 2 }],
            total_results: 45,
            page: 2,
          },
        },
      };
      const apiClient = httpClientMock(request);

      searchLogic.process({ apiClient, action }, dispatch, done);
      const { data } = request.response;
      const { entities, result } = normalize(data.results, [movies]);
      const { query, page } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.get).toHaveBeenCalledWith(
          `search/movie?query=${query}&page=${page}&language=en-US`,
        );
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches searchSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(
          searchSuccess({
            ...data,
            query,
            page,
            results: result,
          }),
        );
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Search FAILURE', () => {
      const error = {
        status_message: 'error message',
      };
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      searchLogic.process({ apiClient, action }, dispatch, done);

      it('dispatches searchFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(searchFailure(error));
      });
    });
  });
});
