import { getTrending } from '../selectors';

describe('Trending selectors', () => {
  it('getTrending - get trending data from store', () => {
    const data = {
      page: 1,
      results: [1, 2, 3],
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
        data: {
          movies: {
            1: { id: 1 },
            2: { id: 2 },
            3: { id: 3 },
          },
        },
      },
    };
    expect(getTrending(state)).toEqual({
      ...data,
      results: [{ id: 1 }, { id: 2 }, { id: 3 }],
    });
  });
});
