import { getMovieById, getGenresById } from '../selectors';

describe('Movie selectors', () => {
  describe('getMovieById()', () => {
    it('getMovieById - get movie from store', () => {
      const id = 9999;
      const data = {
        id: 'some id',
        title: 'some title',
      };

      const state = {
        reducers: {
          data: {
            movie: {
              [id]: data,
            },
          },
        },
      };

      expect(getMovieById(state, id)).toEqual(data);
    });
  });

  describe('getGenresById()', () => {
    it('getGenresById - get genres from store', () => {
      const id = 9999;
      const state = {
        reducers: {
          data: {
            movie: {
              [id]: {
                id,
                genres: [1, 2],
              },
            },
            genres: {
              1: { id: 1, name: 'some title' },
              2: { id: 2, name: 'some title' },
            },
          },
        },
      };

      expect(getGenresById(state, id)).toEqual([
        { id: 1, name: 'some title' },
        { id: 2, name: 'some title' },
      ]);
    });
  });
});
