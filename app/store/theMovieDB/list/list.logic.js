import { createLogic } from 'redux-logic';

import {
  createListTypeRequest,
  createListSuccess,
  createListFailure,
  addMovieTypeRequest,
  addMovieSuccess,
  addMovieFailure,
} from './list.actions';

// Create List
export const createList = createLogic({
  type: createListTypeRequest(),

  process({ action, apiClient, apiKey }, dispatch, done) {
    apiClient
      .post(`list?api_key=${apiKey}&session_id=${localStorage.getItem('session_id')}`, {
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
export const addMovie = createLogic({
  type: addMovieTypeRequest(),

  process({ action, apiClient, apiKey }, dispatch, done) {
    apiClient
      .post(`list/${localStorage.getItem('list_id')}/add_item?api_key=${apiKey}`, { media_id: 18 })
      .then(response => dispatch(addMovieSuccess(response.data)))
      .catch(error => dispatch(addMovieFailure(error)))
      .then(() => done());
  },
});

// Remove Movie
// export const removeMovie = createLogic({
//   type: removeMovieTypeRequest(),

//   process({ action, apiClient, apiKey }, dispatch, done) {
//     apiClient
//       .post(`list/${localStorage.getItem('list_id')}/remove_item?api_key=${apiKey}`, { media_id: 18 })
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
//       .post(`list/${localStorage.getItem('list_id')}/clear?api_key=${apiKey}`)
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
//       .post(`list/${localStorage.getItem('list_id')}?api_key=${apiKey}`)
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
//       .post(`list/${localStorage.getItem('list_id')}?api_key=${apiKey}`)
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
//       .post(`list/${localStorage.getItem('list_id')}/item_status?api_key=${apiKey}`)
//       .then(response => dispatch(checkItemListSuccess(response.data)))
//       .catch(error => dispatch(checkItemListFailure(error)))
//       .then(() => done());
//   },
// });
