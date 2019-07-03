import * as t from './actionTypes';

export const initialState = {};

// Data
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_ENTITIES:
      return {
        ...state,
        ...action.entities,
      };
    default:
      return state;
  }
};
