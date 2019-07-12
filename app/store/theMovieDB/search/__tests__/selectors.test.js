import { getSearchById } from '../selectors';

describe('Search movies - selectors', () => {
  it('getSearchById - get movie data from store', () => {
    const data = {
      query: '',
      page: 1,
      results: [1, 2, 3],
      totalPages: 0,
    };

    const state = {
      reducers: {
        search: {
          data: {
            query: data.query,
            page: data.page,
            results: data.results,
            totalPages: data.totalPages,
          },
        },
        data: {
          movies: {
            1: { id: 1 },
            2: { id: 2 },
            3: { id: 3 },
          },
        },
      },
    };
    expect(getSearchById(state)).toEqual({
      ...data,
      results: [{ id: 1 }, { id: 2 }, { id: 3 }],
    });
  });
});
