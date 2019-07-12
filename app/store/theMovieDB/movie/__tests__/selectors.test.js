import { getMovieById, getGenresById, getCastById, getCrewById } from '../selectors';

describe('Movie - selectors', () => {
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

  describe('getCastById()', () => {
    it('getCastById - get casts from store', () => {
      const id = 9999;
      const state = {
        reducers: {
          data: {
            movie: {
              [id]: {
                id,
                cast: [1, 2],
              },
            },
            cast: {
              1: { id: 1, name: 'some title' },
              2: { id: 2, name: 'some title' },
            },
          },
        },
      };

      expect(getCastById(state, id)).toEqual([
        { id: 1, name: 'some title' },
        { id: 2, name: 'some title' },
      ]);
    });
  });

  describe('getCrewById()', () => {
    it('getCrewById - get crew from store', () => {
      const id = 9999;
      const state = {
        reducers: {
          data: {
            movie: {
              [id]: {
                id,
                crew: [1, 2],
              },
            },
            crew: {
              1: { id: 1, name: 'some title' },
              2: { id: 2, name: 'some title' },
            },
          },
        },
      };

      expect(getCrewById(state, id)).toEqual([
        { id: 1, name: 'some title' },
        { id: 2, name: 'some title' },
      ]);
    });
  });
});
