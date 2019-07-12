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
            data: {
              page: data.page,
              results: data.results,
              totalPages: data.totalPages,
            },
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
});

// export const getCreatedLists = state => state.reducers.lists.data;
// export const getCreateList = state => state.reducers.list.data;

// export const getCreatedListsById = state => {
//   const lists = state.reducers.lists.data;
//   const entities = state.reducers.data.lists;
//   const results = Object.assign([], entities).filter(item => lists.results.includes(item.id));

//   return (
//     lists.results && {
//       ...lists,
//       results,
//     }
//   );
// };

// export const getDetailsListById = state => {
//   const detailsList = state.reducers.detailsList.data;
//   const entities = state.reducers.data.movies;
//   const results = Object.assign([], entities).filter(item => detailsList.results.includes(item.id));

//   return (
//     detailsList.results && {
//       ...detailsList,
//       results,
//     }
//   );
// };
