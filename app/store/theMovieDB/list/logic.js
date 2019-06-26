import { createLogic } from 'redux-logic';
import { getCookie } from '../../../helpers/cookie';

import { createListSuccess, createListFailure, addMovieSuccess, addMovieFailure } from './actions';
import * as t from './actionTypes';

// Create List
export const createList = createLogic({
  type: t.CREATE_LIST_REQUEST,

  process({ action, apiClient }, dispatch, done) {
    apiClient
      .post(`list?session_id=${getCookie('session_id')}`, {
        name: action.payload.listname,
        description: action.payload.description,
        language: 'en',
      })
      .then(response => dispatch(createListSuccess(response.data)))
      .catch(error => dispatch(createListFailure(error)))
      .then(() => done());
  },
});

// Add Movie
// export const addMovie = createLogic({
//   type: t.ADD_MOVIE_REQUEST,

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${getCookie('list_id')}/add_item?api_key=${apiKey}`, { media_id: 18 })
//       .then(response => dispatch(addMovieSuccess(response.data)))
//       .catch(error => dispatch(addMovieFailure(error)))
//       .then(() => done());
//   },
// });

// Remove Movie
// export const removeMovie = createLogic({
//   type: removeMovieTypeRequest(),

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${getCookie('list_id')}/remove_item?api_key=${apiKey}`, { media_id: 18 })
//       .then(response => dispatch(removeMovieSuccess(response.data)))
//       .catch(error => dispatch(removeMovieFailure(error)))
//       .then(() => done());
//   },
// });

// Clear list
// export const clearList = createLogic({
//   type: clearListTypeRequest(),

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${getCookie('list_id')}/clear?api_key=${apiKey}`)
//       .then(response => dispatch(clearListSuccess(response.data)))
//       .catch(error => dispatch(clearListFailure(error)))
//       .then(() => done());
//   },
// });

// Delete list
// export const deleteList = createLogic({
//   type: deleteListTypeRequest(),

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${getCookie('list_id')}?api_key=${apiKey}`)
//       .then(response => dispatch(deleteListSuccess(response.data)))
//       .catch(error => dispatch(deleteListFailure(error)))
//       .then(() => done());
//   },
// });

// Get details
// export const getDetailsList = createLogic({
//   type: getDetailsListTypeRequest(),

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${getCookie('list_id')}?api_key=${apiKey}`)
//       .then(response => dispatch(getDetailsListSuccess(response.data)))
//       .catch(error => dispatch(getDetailsListFailure(error)))
//       .then(() => done());
//   },
// });

// Get details
// export const checkItemList = createLogic({
//   type: checkItemListTypeRequest(),

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${getCookie('list_id')}/item_status?api_key=${apiKey}`)
//       .then(response => dispatch(checkItemListSuccess(response.data)))
//       .catch(error => dispatch(checkItemListFailure(error)))
//       .then(() => done());
//   },
// });
