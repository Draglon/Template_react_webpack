import { getFavoriteById } from '../selectors';

describe('Favorite - selectors', () => {
  it('getFavoriteById - get favorite data from store', () => {
    const data = {
      page: 1,
      results: [1, 2, 3],
      totalPages: 0,
      totalResults: 0,
    };

    const state = {
      reducers: {
        favoriteList: {
          data: {
            page: data.page,
            results: data.results,
            totalPages: data.totalPages,
            totalResults: data.totalResults,
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
    expect(getFavoriteById(state)).toEqual({
      ...data,
      results: [{ id: 1 }, { id: 2 }, { id: 3 }],
    });
  });
});
