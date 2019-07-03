import { getMovieById } from '../selectors';

describe('Movie selectors', () => {
  it('getMovieById - get profile data from store', () => {
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
