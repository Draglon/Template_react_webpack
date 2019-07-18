import { addEntities } from '../actions';
import * as t from '../actionTypes';

describe('Add entities data - actions', () => {
  it('addEntities', () => {
    const entities = {
      profile: {
        8493834: {
          id: 8493834,
          avatar: 'hash',
          name: 'name',
          username: 'username',
        },
      },
      movies: {
        640: {
          id: 640,
          title: 'title',
          poster_path: '/MywWCQGJNUr5kivAQ7eseCG7rm.jpg',
          overview: 'overview text',
        },
      },
      genres: {
        12: {
          id: 12,
          name: 'Adventure',
        },
        28: {
          id: 28,
          name: 'Action',
        },
      },
      cast: {
        738: {
          character: 'James Bond',
          id: 738,
          name: 'Sean Connery',
          profile_path: '/ce84udJZ9QRSR44jxwK2apM3DM8.jpg',
        },
      },
      crew: {
        738: {
          character: 'James Bond',
          id: 738,
          name: 'Sean Connery',
          profile_path: '/ce84udJZ9QRSR44jxwK2apM3DM8.jpg',
        },
      },
      lists: {
        116270: {
          description: 'Me the best actions',
          id: 116270,
          item_count: 23,
          name: 'Actions',
        },
      },
    };
    expect(addEntities(entities)).toEqual({
      type: t.ADD_ENTITIES,
      entities,
    });
  });
});
