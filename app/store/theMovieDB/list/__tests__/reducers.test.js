import { createListReducer, createListInitialState } from '../reducers';
import t from '../actionTypes';

describe('Authentication reducer', () => {
  // CREATE LIST REQUEST
  it('CREATE_LIST_REQUEST', () => {
    const action = {
      type: t.CREATE_LIST_REQUEST,
    };

    expect(createListReducer(createListInitialState, action)).toEqual({
      ...createListInitialState,
      isLoading: true,
    });
  });

  // CREATE LIST SUCCESS
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

  // CREATE LIST FAILURE
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
