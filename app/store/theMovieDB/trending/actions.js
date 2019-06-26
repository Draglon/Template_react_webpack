import * as t from './actionTypes';

export const trendingRequest = payload => ({ type: t.TRENDING_REQUEST, payload });
export const trendingSuccess = payload => ({ type: t.TRENDING_SUCCESS, payload });
export const trendingFailure = payload => ({ type: t.TRENDING_FAILURE, payload });
