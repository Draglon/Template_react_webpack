import { schema } from 'normalizr';

// profile
export const profile = new schema.Entity('profile');

// trending
export const trending = new schema.Entity('trending');

// movie
export const schemaMovie = new schema.Entity('movie');
export const schemaMovieDetails = new schema.Entity('details');
export const schemaMovieImages = new schema.Entity('images');
