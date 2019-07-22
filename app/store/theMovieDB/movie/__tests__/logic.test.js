import { normalize } from 'normalizr';
import { schemaMovie } from '../../../schema';
import { httpClientMock, multiHttpClientMock } from '../../../../helpers/httpClientMock';

import { movieLogic } from '../logic';
import { movieFailure } from '../actions';
import { addEntities } from '../../data/actions';

describe('Movie - logic', () => {
  const sessionId = 9999;
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

  describe('MOVIE_REQUEST', () => {
    const action = {
      payload: {
        movieId: 999,
      },
    };

    describe('MOVIE_SUCCESS', () => {
      const requests = [
        {
          method: 'get',
          response: {
            data: {
              id: 550,
              genres: [{ id: 1, name: 'name 1' }, { id: 2, name: 'name 2' }],
              title: 'title',
              overview: 'overview',
              revenue: 100853753,
              poster_path: 'path',
              spoken_languages: [
                {
                  name: 'English',
                },
              ],
            },
          },
        },
        {
          method: 'get',
          response: {
            data: {
              id: 550,
              cast: [{ id: 1, name: 'Edward Norton', character: 'character' }],
              crew: [{ id: 1, name: 'Edward Norton', job: 'job' }],
            },
          },
        },
        {
          method: 'get',
          response: {
            data: {
              id: 550,
              backdrops: [{ file_path: '/path_1.jpg' }, { file_path: '/path_2.jpg' }],
            },
          },
        },
        {
          method: 'get',
          response: {
            data: {
              id: 550,
              favorite: true,
              watchlist: false,
            },
          },
        },
      ];
      const apiClient = multiHttpClientMock(requests);

      movieLogic.process({ apiClient, getState, action }, dispatch, done);
      const { movieId } = action.payload;
      const data = {
        language: requests[0].response.data.spoken_languages[0].name,
        ...requests[0].response.data,
        ...requests[1].response.data,
        ...requests[2].response.data,
        ...requests[3].response.data,
      };
      const { entities } = normalize(data, schemaMovie);

      it('Should return correct URL - get movie details', () => {
        expect(apiClient.get).toHaveBeenCalledWith(`movie/${movieId}`);
      });

      it('Should return correct URL - get movie credits', () => {
        expect(apiClient.get).toHaveBeenCalledWith(`movie/${movieId}/credits`);
      });

      it('Should return correct URL - get movie images', () => {
        expect(apiClient.get).toHaveBeenCalledWith(`movie/${movieId}/images`);
      });

      it('Should return correct URL - get movie status', () => {
        expect(apiClient.get).toHaveBeenCalledWith(
          `movie/${movieId}/account_states?session_id=${sessionId}`,
        );
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('MOVIE_FAILURE', () => {
      const error = {
        status_message: 'error message',
      };
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      movieLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches movieFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(movieFailure(error));
      });
    });
  });
});
