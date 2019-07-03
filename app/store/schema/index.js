import { schema } from 'normalizr';

// profile
export const profile = new schema.Entity('profile');

// trending
export const trending = new schema.Entity('trending');

// genres
export const genres = new schema.Entity('genres');

// movie
export const schemaMovie = new schema.Entity('movie', {
  genres: [genres],
});
