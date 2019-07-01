import { getSearch } from '../selectors';

describe('Search movie selectors', () => {
  it('getSearch - get profile data from store', () => {
    const data = {
      query: '',
      page: 1,
      results: [],
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
      },
    };
    expect(getSearch(state)).toEqual(data);
  });
});
