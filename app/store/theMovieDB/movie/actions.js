import * as t from './actionTypes';

export const movieRequest = payload => ({ type: t.MOVIE_REQUEST, payload });
export const movieSuccess = payload => ({ type: t.MOVIE_SUCCESS, payload });
export const movieFailure = payload => ({ type: t.MOVIE_FAILURE, payload });

export const creditsRequest = payload => ({ type: t.CREDITS_REQUEST, payload });
export const creditsSuccess = payload => ({ type: t.CREDITS_SUCCESS, payload });
export const creditsFailure = payload => ({ type: t.CREDITS_FAILURE, payload });

export const imagesRequest = payload => ({ type: t.MOVIE_IMAGES_REQUEST, payload });
export const imagesSuccess = payload => ({ type: t.MOVIE_IMAGES_SUCCESS, payload });
export const imagesFailure = payload => ({ type: t.MOVIE_IMAGES_FAILURE, payload });
