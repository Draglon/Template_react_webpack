import { normalize } from 'normalizr';
import { movies, lists } from '../../../schema';
import { httpClientMock } from '../../../../helpers/httpClientMock';

import { myListsLogic, detailsListLogic, createListLogic } from '../logic';
import { addEntities } from '../../data/actions';
import {
  createdListsRequest,
  createdListsSuccess,
  createListSuccess,
  detailsListRequest,
  detailsListSuccess,
  deleteListSuccess,
  addMovieListSuccess,
  removeMovieListSuccess,
} from '../actions';

describe('Created lists - logic', () => {
  const accountId = '999';
  const sessionId = '9999';
  const state = {
    reducers: {
      profile: {
        data: {
          id: accountId,
        },
      },
      login: {
        sessionId,
      },
    },
  };
  const dispatch = jest.fn();
  const getState = jest.fn(() => state);
  const done = jest.fn();

  describe('CREATED_LISTS_REQUEST', () => {
    const action = {
      payload: {
        page: 2,
      },
    };

    describe('Created lists SUCCESS', () => {
      const request = {
        method: 'get',
        response: {
          data: {
            page: 1,
            results: [{ id: 1 }, { id: 2 }],
            totalPages: 0,
          },
        },
      };
      const apiClient = httpClientMock(request);

      myListsLogic.process({ apiClient, getState, action }, dispatch, done);
      const { data } = request.response;
      const { entities, result } = normalize(data.results, [lists]);
      const { page } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.get).toHaveBeenCalledWith(
          `account/${accountId}/lists?session_id=${sessionId}&page=${page}&language=en-US`,
        );
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches createdListsSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(
          createdListsSuccess({
            ...data,
            results: result,
          }),
        );
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Created lists FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'get',
        reject: true,
      });

      myListsLogic.process({ apiClient, getState, action }, dispatch, done);

      it('Should throw an Error', () => {
        expect(() => {
          throw new Error();
        }).toThrow();
      });
    });
  });

  describe('DETAILS_LIST_REQUEST', () => {
    const action = {
      payload: {
        listId: 2,
      },
    };

    describe('Details lists SUCCESS', () => {
      const request = {
        method: 'get',
        response: {
          data: {
            id: '',
            title: '',
            description: '',
            items: [{ id: 1 }, { id: 2 }],
            total: 0,
          },
        },
      };
      const apiClient = httpClientMock(request);

      detailsListLogic.process({ apiClient, action }, dispatch, done);
      const { data } = request.response;
      const { entities, result } = normalize(data.items, [movies]);
      const { listId } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.get).toHaveBeenCalledWith(`list/${listId}?language=en-US`);
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches detailsListSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(
          detailsListSuccess({
            ...data,
            items: result,
          }),
        );
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Details lists FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'get',
        reject: true,
      });

      detailsListLogic.process({ apiClient, action }, dispatch, done);

      it('Should throw an Error', () => {
        expect(() => {
          throw new Error();
        }).toThrow();
      });
    });
  });

  describe('CREATE_LIST_REQUEST', () => {
    const action = {
      payload: {
        values: {
          name: 'name',
          description: 'description',
        },
        setSubmitting: jest.fn(),
        hideModal: jest.fn(),
      },
    };

    describe('Create list SUCCESS', () => {
      const request = {
        method: 'post',
        response: {
          data: {
            list_id: 117409,
            status_code: 1,
            status_message: 'message',
            success: true,
          },
        },
      };
      const apiClient = httpClientMock(request);

      createListLogic.process({ apiClient, getState, action }, dispatch, done);
      const { data } = request.response;

      it('Should return correct URL', () => {
        expect(apiClient.post).toHaveBeenCalledWith(`list?session_id=${sessionId}`, {
          ...action.payload.values,
          language: 'en',
        });
      });

      it('dispatches createListSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(createListSuccess(data));
      });

      it('dispatches createdListsRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(createdListsRequest({ page: 1 }));
      });

      // it('should calls setSubmitting()', () => {
      //   expect(action.payload.setSubmitting).toHaveBeenCalledWith(false);
      // });

      // it('should calls hideModal()', () => {
      //   expect(action.payload.hideModal).toHaveBeenCalled();
      // });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Create list FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'post',
        reject: true,
      });

      createListLogic.process({ apiClient, getState, action }, dispatch, done);

      it('Should throw an Error', () => {
        expect(() => {
          throw new Error();
        }).toThrow();
      });
    });
  });


});


// export const deleteListLogic = createLogic({
//   type: t.DELETE_LIST_REQUEST,

//   process({ apiClient, getState, action }, dispatch, done) {
//     const listId = action.payload.listId;
//     const sessionId = getSessionId(getState());
//     apiClient
//       .delete(`list/${listId}?session_id=${sessionId}`)
//       .then(response => {
//         dispatch(deleteListSuccess(response.data));
//         dispatch(createdListsRequest({ page: 1 }));
//       })
//       .catch(error => {
//         dispatch(deleteListFailure(error));
//         dispatch(createdListsRequest({ page: 1 }));
//       })
//       .then(() => done());
//   },
// });

// export const addMovieListLogic = createLogic({
//   type: t.ADD_MOVIE_LIST_REQUEST,

//   process({ apiClient, getState, action }, dispatch, done) {
//     const listId = action.payload.listId;
//     const mediaId = action.payload.movieId;
//     const sessionId = getSessionId(getState());
//     apiClient
//       .post(`list/${listId}/add_item?session_id=${sessionId}`, {
//         media_id: mediaId,
//       })
//       .then(response => {
//         dispatch(addMovieListSuccess(response.data));
//       })
//       .catch(error => {
//         dispatch(addMovieListFailure(error));
//       })
//       .then(() => done());
//   },
// });

// export const removeMovieListLogic = createLogic({
//   type: t.REMOVE_MOVIE_LIST_REQUEST,

//   process({ apiClient, getState, action }, dispatch, done) {
//     const listId = action.payload.listId;
//     const mediaId = action.payload.movieId;
//     const sessionId = getSessionId(getState());
//     apiClient
//       .post(`list/${listId}/remove_item?session_id=${sessionId}`, {
//         media_id: mediaId,
//       })
//       .then(response => {
//         dispatch(removeMovieListSuccess(response.data));
//         dispatch(detailsListRequest({ listId }));
//       })
//       .catch(error => {
//         dispatch(removeMovieListFailure(error));
//       })
//       .then(() => done());
//   },
// });
