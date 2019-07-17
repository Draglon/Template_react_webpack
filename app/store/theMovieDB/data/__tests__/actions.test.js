import { addEntities } from '../actions';
import * as t from '../actionTypes';

describe('Add entities data - actions', () => {
  it('addEntities', () => {
    const expectedAction = {
      type: t.ADD_ENTITIES,
      entities: ['some data'],
    };
    expect(addEntities(expectedAction.entities)).toEqual(expectedAction);
  });
});
