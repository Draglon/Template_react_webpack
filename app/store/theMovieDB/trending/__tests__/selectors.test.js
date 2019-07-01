import { getTrending } from '../selectors';

describe('Trending movie selectors', () => {
  it('getTrending - get trending movie from store', () => {
    const data = {
      page: 1,
      results: [],
      totalPages: 0,
    };

    const state = {
      reducers: {
        trending: {
          data: {
            page: data.page,
            results: data.results,
            totalPages: data.totalPages,
          },
        },
      },
    };
    expect(getTrending(state)).toEqual(data);
  });
});
