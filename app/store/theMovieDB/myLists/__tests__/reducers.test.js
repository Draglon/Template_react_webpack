import {
  createdListsReducer,
  initialState,
  createListReducer,
  createListInitialState,
  detailsListReducer,
  detailsListInitialState,
  deleteListReducer,
  deleteListInitialState,
  addMovieListReducer,
  addMovieListInitialState,
  removeMovieListReducer,
  removeMovieListInitialState,
} from '../reducers';
import * as t from '../actionTypes';

describe('MyLists - reducers', () => {
  describe('MyLists - create list reducers', () => {
    it('state is undefined', () => {
      expect(createListReducer(undefined, {})).toEqual(createListInitialState);
    });

    it('CREATE_LIST_REQUEST after situation without error', () => {
      const action = {
        type: t.CREATE_LIST_REQUEST,
      };

      expect(createListReducer(createListInitialState, action)).toEqual({
        ...createListInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('CREATE_LIST_REQUEST after error', () => {
      const createListInitialStateWithError = {
        isLoading: true,
        data: {
          list_id: null,
          message: null,
        },
        error: 'Unknown error',
      };

      const action = {
        type: t.CREATE_LIST_REQUEST,
      };

      expect(createListReducer(createListInitialStateWithError, action)).toEqual({
        ...createListInitialStateWithError,
        isLoading: true,
        error: null,
      });
    });

    it('CREATE_LIST_SUCCESS', () => {
      const stateBefore = {
        isLoading: true,
        data: {
          list_id: null,
          message: null,
        },
        error: null,
      };

      const action = {
        type: t.CREATE_LIST_SUCCESS,
        payload: {
          list_id: 'list_id',
          status_message: 'success message',
        },
      };

      expect(createListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          list_id: action.payload.list_id,
          message: action.payload.status_message,
        },
      });
    });

    it('CREATE_LIST_FAILURE', () => {
      const stateBefore = {
        isLoading: true,
        data: {
          list_id: null,
          message: null,
        },
        error: null,
      };

      const action = {
        type: t.CREATE_LIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('MyLists - createed lists reducers', () => {
    it('state is undefined', () => {
      expect(createdListsReducer(undefined, {})).toEqual(initialState);
    });

    it('CREATED_LISTS_REQUEST after situation without error', () => {
      const action = {
        type: t.CREATED_LISTS_REQUEST,
      };

      expect(createdListsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
      });
    });

    it('CREATED_LISTS_REQUEST after error', () => {
      const initialStateWithError = {
        ...initialState,
        isLoading: true,
        error: 'Unknown error',
      };

      const action = {
        type: t.CREATED_LISTS_REQUEST,
      };

      expect(createdListsReducer(initialStateWithError, action)).toEqual({
        ...initialStateWithError,
        isLoading: true,
        error: null,
      });
    });

    it('CREATED_LISTS_SUCCESS', () => {
      const stateBefore = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: t.CREATED_LISTS_SUCCESS,
        payload: {
          page: 1,
          results: [],
          totalPages: 0,
        },
      };

      expect(createdListsReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.total_pages,
        },
      });
    });

    it('CREATED_LISTS_FAILURE', () => {
      const stateBefore = {
        ...initialState,
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.CREATED_LISTS_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createdListsReducer(stateBefore, action)).toEqual({
        ...stateBefore,
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
