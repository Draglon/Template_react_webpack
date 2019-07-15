import {
  getCreatedLists,
  getCreateList,
  getCreatedListsById,
  getDetailsListById,
} from '../selectors';

describe('MyLists - selectors', () => {
  describe('MyLists - getCreatedLists()', () => {
    it('getCreatedLists', () => {
      const data = {
        page: 1,
        results: [{ id: 1 }, { id: 2 }, { id: 3 }],
        totalPages: 0,
      };
      const state = {
        reducers: {
          lists: {
            data,
          },
        },
      };
      expect(getCreatedLists(state)).toEqual(data);
    });
  });

  describe('MyLists - getCreateList()', () => {
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

  describe('MyLists - getCreatedListsById()', () => {
    it('getCreatedListsById', () => {
      const data = {
        page: 1,
        results: [1, 2, 3],
        totalPages: 0,
      };

      const state = {
        reducers: {
          lists: {
            data,
          },
          data: {
            lists: {
              1: { id: 1 },
              2: { id: 2 },
              3: { id: 3 },
            },
          },
        },
      };
      expect(getCreatedListsById(state)).toEqual({
        ...data,
        results: [{ id: 1 }, { id: 2 }, { id: 3 }],
      });
    });
  });

  describe('MyLists - getDetailsListById()', () => {
    it('getDetailsListById', () => {
      const data = {
        id: '',
        title: '',
        description: '',
        results: [1, 2, 3],
        total: 0,
      };

      const state = {
        reducers: {
          detailsList: {
            data,
          },
          data: {
            movies: {
              1: { id: 1 },
              2: { id: 2 },
              3: { id: 3 },
            },
          },
        },
      };
      expect(getDetailsListById(state)).toEqual({
        ...data,
        results: [{ id: 1 }, { id: 2 }, { id: 3 }],
      });
    });
  });
});
