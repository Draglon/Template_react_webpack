import {
  createdListsReducer,
  createListReducer,
  detailsListReducer,
  deleteListReducer,
  addMovieListReducer,
  removeMovieListReducer,
} from '../reducers';
import * as t from '../actionTypes';

describe('MyLists - reducers', () => {
  describe('MyLists - create list reducers', () => {
    it('state is undefined', () => {
      expect(createListReducer(undefined, {})).toEqual({
        isLoading: false,
        data: {
          listId: '',
          message: '',
        },
        error: null,
      });
    });

    it('CREATE_LIST_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };

      const action = {
        type: t.CREATE_LIST_REQUEST,
      };

      expect(createListReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('CREATE_LIST_SUCCESS', () => {
      const state = {
        isLoading: true,
        data: {
          listId: '',
          message: '',
        },
      };

      const action = {
        type: t.CREATE_LIST_SUCCESS,
        payload: {
          listId: 'list_id',
          message: 'success message',
        },
      };

      expect(createListReducer(state, action)).toEqual({
        isLoading: false,
        data: {
          listId: action.payload.list_id,
          message: action.payload.status_message,
        },
      });
    });

    it('CREATE_LIST_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.CREATE_LIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createListReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('MyLists - createed lists reducers', () => {
    it('state is undefined', () => {
      expect(createdListsReducer(undefined, {})).toEqual({
        isLoading: false,
        data: {
          page: 1,
          results: [],
          totalPages: 0,
        },
        error: null,
      });
    });

    it('CREATED_LISTS_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };

      const action = {
        type: t.CREATED_LISTS_REQUEST,
      };

      expect(createdListsReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('CREATED_LISTS_SUCCESS', () => {
      const state = {
        isLoading: true,
        data: {
          page: 1,
          results: [],
          totalPages: 0,
        },
      };

      const action = {
        type: t.CREATED_LISTS_SUCCESS,
        payload: {
          page: 1,
          results: [1, 2, 3],
          totalPages: 10,
        },
      };

      expect(createdListsReducer(state, action)).toEqual({
        isLoading: false,
        data: {
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.total_pages,
        },
      });
    });

    it('CREATED_LISTS_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.CREATED_LISTS_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createdListsReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('MyLists - details list reducers', () => {
    it('state is undefined', () => {
      expect(detailsListReducer(undefined, {})).toEqual(detailsListInitialState);
    });

    it('DETAILS_LIST_REQUEST after situation without error', () => {
      const action = {
        type: t.DETAILS_LIST_REQUEST,
      };

      expect(detailsListReducer(detailsListInitialState, action)).toEqual({
        ...detailsListInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('DETAILS_LIST_REQUEST after error', () => {
      const detailsListInitialStateWithError = {
        ...detailsListInitialState,
        isLoading: true,
        error: 'Unknown error',
      };

      const action = {
        type: t.DETAILS_LIST_REQUEST,
      };

      expect(detailsListReducer(detailsListInitialStateWithError, action)).toEqual({
        ...detailsListInitialStateWithError,
        isLoading: true,
        error: null,
      });
    });

    it('DETAILS_LIST_SUCCESS', () => {
      const stateBefore = {
        ...detailsListInitialState,
        isLoading: true,
      };

      const action = {
        type: t.DETAILS_LIST_SUCCESS,
        payload: {
          id: '',
          title: '',
          description: '',
          results: [],
          total: 0,
        },
      };

      expect(detailsListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          id: action.payload.id,
          title: action.payload.name,
          description: action.payload.description,
          results: action.payload.items,
          total: action.payload.item_count,
        },
      });
    });

    it('DETAILS_LIST_FAILURE', () => {
      const stateBefore = {
        ...detailsListInitialState,
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.DETAILS_LIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(detailsListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('MyLists - delete list reducers', () => {
    it('state is undefined', () => {
      expect(deleteListReducer(undefined, {})).toEqual(deleteListInitialState);
    });

    it('DELETE_LIST_REQUEST after situation without error', () => {
      const action = {
        type: t.DELETE_LIST_REQUEST,
      };

      expect(deleteListReducer(deleteListInitialState, action)).toEqual({
        ...deleteListInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('DELETE_LIST_REQUEST after error', () => {
      const deleteListInitialStateWithError = {
        ...deleteListInitialState,
        isLoading: true,
        error: 'Unknown error',
      };

      const action = {
        type: t.DELETE_LIST_REQUEST,
      };

      expect(deleteListReducer(deleteListInitialStateWithError, action)).toEqual({
        ...deleteListInitialStateWithError,
        isLoading: true,
        error: null,
      });
    });

    it('DELETE_LIST_SUCCESS', () => {
      const stateBefore = {
        ...deleteListInitialState,
        isLoading: true,
      };

      const action = {
        type: t.DELETE_LIST_SUCCESS,
        payload: {
          message: '',
        },
      };

      expect(deleteListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('DELETE_LIST_FAILURE', () => {
      const stateBefore = {
        ...deleteListInitialState,
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.DELETE_LIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(deleteListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('MyLists - add movie to list reducers', () => {
    it('state is undefined', () => {
      expect(addMovieListReducer(undefined, {})).toEqual(addMovieListInitialState);
    });

    it('ADD_MOVIE_LIST_REQUEST after situation without error', () => {
      const action = {
        type: t.ADD_MOVIE_LIST_REQUEST,
      };

      expect(addMovieListReducer(addMovieListInitialState, action)).toEqual({
        ...addMovieListInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('ADD_MOVIE_LIST_REQUEST after error', () => {
      const addMovieListInitialStateWithError = {
        ...addMovieListInitialState,
        isLoading: true,
        error: 'Unknown error',
      };

      const action = {
        type: t.ADD_MOVIE_LIST_REQUEST,
      };

      expect(addMovieListReducer(addMovieListInitialStateWithError, action)).toEqual({
        ...addMovieListInitialStateWithError,
        isLoading: true,
        error: null,
      });
    });

    it('ADD_MOVIE_LIST_SUCCESS', () => {
      const stateBefore = {
        ...addMovieListInitialState,
        isLoading: true,
      };

      const action = {
        type: t.ADD_MOVIE_LIST_SUCCESS,
        payload: {
          message: '',
        },
      };

      expect(addMovieListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('ADD_MOVIE_LIST_FAILURE', () => {
      const stateBefore = {
        ...addMovieListInitialState,
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.ADD_MOVIE_LIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(addMovieListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('MyLists - remove movie to list reducers', () => {
    it('state is undefined', () => {
      expect(removeMovieListReducer(undefined, {})).toEqual(removeMovieListInitialState);
    });

    it('REMOVE_MOVIE_LIST_REQUEST after situation without error', () => {
      const action = {
        type: t.REMOVE_MOVIE_LIST_REQUEST,
      };

      expect(removeMovieListReducer(removeMovieListInitialState, action)).toEqual({
        ...removeMovieListInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('REMOVE_MOVIE_LIST_REQUEST after error', () => {
      const removeMovieListInitialStateWithError = {
        ...removeMovieListInitialState,
        isLoading: true,
        error: 'Unknown error',
      };

      const action = {
        type: t.REMOVE_MOVIE_LIST_REQUEST,
      };

      expect(removeMovieListReducer(removeMovieListInitialStateWithError, action)).toEqual({
        ...removeMovieListInitialStateWithError,
        isLoading: true,
        error: null,
      });
    });

    it('REMOVE_MOVIE_LIST_SUCCESS', () => {
      const stateBefore = {
        ...removeMovieListInitialState,
        isLoading: true,
      };

      const action = {
        type: t.REMOVE_MOVIE_LIST_SUCCESS,
        payload: {
          message: '',
        },
      };

      expect(removeMovieListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('REMOVE_MOVIE_LIST_FAILURE', () => {
      const stateBefore = {
        ...removeMovieListInitialState,
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.REMOVE_MOVIE_LIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(removeMovieListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });
});
