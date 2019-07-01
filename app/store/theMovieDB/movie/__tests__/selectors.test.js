import { getMovie } from '../selectors';

describe('Account selectors', () => {
  it('getMovie - get profile data from store', () => {
    const data = {
      id: 'some id',
      title: 'some title',
      overview: 'some overview',
      budget: 0,
      genres: [],
      revenue: 0,
      runtime: 0,
      language: 'English',
      credits: {
        cast: [],
        crew: [],
      },
      images: {
        backdrops: [],
        posters: [],
      },
    };

    const state = {
      reducers: {
        movie: {
          data: {
            id: data.id,
            title: data.title,
            overview: data.overview,
            budget: data.budget,
            genres: data.genres,
            revenue: data.revenue,
            runtime: data.runtime,
            language: data.language,
            credits: {
              cast: data.credits.cast,
              crew: data.credits.crew,
            },
            images: {
              backdrops: data.images.backdrops,
              posters: data.images.posters,
            },
          },
        },
      },
    };
    expect(getMovie(state)).toEqual(data);
  });
});
