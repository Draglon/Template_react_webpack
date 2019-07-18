import { getSearchQuery, getSearch } from '../selectors';

describe('Search movies - selectors', () => {
  it('getSearchQuery - get search string', () => {
    const query = 'search string';
    const state = {
      reducers: {
        search: {
          data: {
            query,
          },
        },
      },
    };
    expect(getSearchQuery(state)).toEqual(query);
  });

  it('getSearch - get movies from store', () => {
    const data = {
      query: 'search string',
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
    expect(getSearch(state)).toEqual({
      ...data,
      results: [{ id: 1 }, { id: 2 }, { id: 3 }],
    });
  });
});
