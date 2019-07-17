import { getCreatedLists, getDetailsList } from '../selectors';

describe('MyLists - selectors', () => {
  describe('MyLists - getCreatedLists()', () => {
    it('getCreatedLists', () => {
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
      expect(getCreatedLists(state)).toEqual({
        ...data,
        results: [{ id: 1 }, { id: 2 }, { id: 3 }],
      });
    });
  });

  describe('MyLists - getDetailsList()', () => {
    it('getDetailsList', () => {
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
      expect(getDetailsList(state)).toEqual({
        ...data,
        results: [{ id: 1 }, { id: 2 }, { id: 3 }],
      });
    });
  });
});
