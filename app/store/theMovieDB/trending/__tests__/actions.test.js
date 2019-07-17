import { trendingRequest, trendingSuccess, trendingFailure } from '../actions';
import * as t from '../actionTypes';

describe('Trending - actions', () => {
  it('trendingRequest', () => {
    const payload = { page: 1 };
    expect(trendingRequest(payload)).toEqual({
      type: t.TRENDING_REQUEST,
      payload,
    });
  });

  it('trendingSuccess', () => {
    const payload = {
      page: 1,
      results: [1, 2, 3],
      totalPages: 10,
    };
    expect(trendingSuccess(payload)).toEqual({
      type: t.TRENDING_SUCCESS,
      payload,
    });
  });

  it('trendingFailure', () => {
    const payload = { message: 'message error' };
    expect(trendingFailure(payload)).toEqual({
      type: t.TRENDING_FAILURE,
      payload,
    });
  });
});
