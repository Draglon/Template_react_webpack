import { schema } from 'normalizr';

// profile
export const profile = new schema.Entity('profile');

// trending
export const trending = new schema.Entity('trending');

// genres
export const genres = new schema.Entity('genres');

// cast
export const cast = new schema.Entity('cast');

// cast
export const crew = new schema.Entity('crew');

// movie
export const schemaMovie = new schema.Entity('movie', {
  genres: [genres],
  // cast: [cast],
  // crew: [crew],
});
