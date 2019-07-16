import { getFavorite } from '../selectors';

describe('Favorite - selectors', () => {
  it('getFavorite - get favorite data from store', () => {
    const data = {
      page: 1,
      results: [1, 2, 3],
      totalPages: 0,
      totalResults: 0,
    };

    const state = {
      reducers: {
        favoriteList: {
          data,
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
    expect(getFavorite(state)).toEqual({
      ...data,
      results: [{ id: 1 }, { id: 2 }, { id: 3 }],
    });
  });
});
