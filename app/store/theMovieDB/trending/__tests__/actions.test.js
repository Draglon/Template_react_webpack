import { trendingRequest, trendingSuccess, trendingFailure } from '../actions';
import * as t from '../actionTypes';

describe('Trending - actions', () => {
  it('trendingRequest', () => {
    const expectedAction = {
      type: t.TRENDING_REQUEST,
      payload: ['some data'],
    };
    expect(trendingRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('trendingSuccess', () => {
    const expectedAction = {
      type: t.TRENDING_SUCCESS,
      payload: ['some data'],
    };
    expect(trendingSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('trendingFailure', () => {
    const expectedAction = {
      type: t.TRENDING_FAILURE,
      payload: ['some data'],
    };
    expect(trendingFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
