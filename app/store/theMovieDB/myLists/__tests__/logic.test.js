import { normalize } from 'normalizr';
import { movies, lists } from '../../../schema';
import { httpClientMock } from '../../../../helpers/httpClientMock';

import {
  myListsLogic,
  detailsListLogic,
  createListLogic,
  deleteListLogic,
  addMovieListLogic,
  removeMovieListLogic,
} from '../logic';
import { addEntities } from '../../data/actions';
import {
  createdListsRequest,
  createdListsSuccess,
  createdListsFailure,
  createListSuccess,
  createListFailure,
  detailsListRequest,
  detailsListSuccess,
  detailsListFailure,
  deleteListSuccess,
  deleteListFailure,
  addMovieListSuccess,
  addMovieListFailure,
  removeMovieListSuccess,
  removeMovieListFailure,
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
  const error = {
    status_message: 'error message',
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
        response: error,
        reject: true,
      });

      myListsLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches createdListsFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(createdListsFailure(error));
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
        response: error,
        reject: true,
      });

      detailsListLogic.process({ apiClient, action }, dispatch, done);

      it('dispatches detailsListFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(detailsListFailure(error));
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
        actions: {
          setSubmitting: jest.fn(),
        },
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

      it('should calls setSubmitting()', () => {
        expect(action.payload.actions.setSubmitting).toHaveBeenCalledWith(false);
      });

      it('should calls hideModal()', () => {
        expect(action.payload.hideModal).toHaveBeenCalled();
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Create list FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'post',
        response: error,
        reject: true,
      });

      createListLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches createListFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(createListFailure(error));
      });
    });
  });

  describe('DELETE_LIST_REQUEST', () => {
    const action = {
      payload: {
        listId: 3213,
      },
    };

    describe('Delete list SUCCESS', () => {
      const request = {
        method: 'delete',
        response: {
          data: {
            status_code: 12,
            status_message: 'The item/record was updated successfully.',
          },
        },
      };
      const apiClient = httpClientMock(request);

      deleteListLogic.process({ apiClient, getState, action }, dispatch, done);
      const { data } = request.response;
      const { listId } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.delete).toHaveBeenCalledWith(`list/${listId}?session_id=${sessionId}`);
      });

      it('dispatches deleteListSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(deleteListSuccess(data));
      });

      it('dispatches createdListsRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(createdListsRequest({ page: 1 }));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Delete list FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'delete',
        response: error,
        reject: true,
      });

      deleteListLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches deleteListFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(deleteListFailure(error));
      });
    });
  });

  describe('ADD_MOVIE_LIST_REQUEST', () => {
    const action = {
      payload: {
        listId: 3213,
        movieId: 322325,
      },
    };

    describe('Add movie to list SUCCESS', () => {
      const request = {
        method: 'post',
        response: {
          data: {
            status_code: 12,
            status_message: 'The item/record was updated successfully.',
          },
        },
      };
      const apiClient = httpClientMock(request);

      addMovieListLogic.process({ apiClient, getState, action }, dispatch, done);
      const { data } = request.response;
      const { listId, movieId } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.post).toHaveBeenCalledWith(
          `list/${listId}/add_item?session_id=${sessionId}`,
          {
            media_id: movieId,
          },
        );
      });

      it('dispatches addMovieListSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(addMovieListSuccess(data));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Add movie to list FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'post',
        response: error,
        reject: true,
      });

      addMovieListLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches addMovieListFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(addMovieListFailure(error));
      });
    });
  });

  describe('REMOVE_MOVIE_LIST_REQUEST', () => {
    const action = {
      payload: {
        listId: 3213,
        movieId: 322325,
      },
    };

    describe('Remove movie to list SUCCESS', () => {
      const request = {
        method: 'post',
        response: {
          data: {
            status_code: 13,
            status_message: 'The item/record was deleted successfully.',
          },
        },
      };
      const apiClient = httpClientMock(request);

      removeMovieListLogic.process({ apiClient, getState, action }, dispatch, done);
      const { data } = request.response;
      const { listId, movieId } = action.payload;

      it('Should return correct URL', () => {
        expect(apiClient.post).toHaveBeenCalledWith(
          `list/${listId}/remove_item?session_id=${sessionId}`,
          {
            media_id: movieId,
          },
        );
      });

      it('dispatches removeMovieListSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(removeMovieListSuccess(data));
      });

      it('dispatches detailsListRequest()', () => {
        expect(dispatch).toHaveBeenCalledWith(detailsListRequest({ listId }));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Remove movie to list FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'post',
        response: error,
        reject: true,
      });

      removeMovieListLogic.process({ apiClient, getState, action }, dispatch, done);

      it('dispatches addMovieListFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(removeMovieListFailure(error));
      });
    });
  });
});
