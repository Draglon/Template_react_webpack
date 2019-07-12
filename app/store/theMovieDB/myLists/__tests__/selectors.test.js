import { getCreateList } from '../selectors';

describe('MyLists - selectors', () => {
  it('getCreateList', () => {
    const listId = 'some list_id';
    const message = 'some message';
    const state = {
      reducers: {
        list: {
          data: {
            list_id: listId,
            message,
          },
        },
      },
    };
    expect(getCreateList(state)).toEqual({ list_id: listId, message });
  });
});
