import { createListReducer, createListInitialState } from '../reducers';
import * as t from '../actionTypes';

describe('MyLists - reducers', () => {
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
