import { dataReducer, initialState } from '../reducers';
import * as t from '../actionTypes';

describe('Add entities - reducers', () => {
  describe('Add entities - add entities reducer', () => {
    it('state is undefined', () => {
      expect(dataReducer(undefined, {})).toEqual(initialState);
    });

    it('ADD_ENTITIES', () => {
      const action = {
        type: t.ADD_ENTITIES,
        entities: {},
      };

      expect(dataReducer(initialState, action)).toEqual({
        ...initialState,
        ...action.entities,
      });
    });
  });
});
