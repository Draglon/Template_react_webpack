import { createSessionLogic, deleteSessionLogic } from './login/logic';
import profileLogic from './profile/logic';
import { createList } from './list/logic';
import trendingLogic from './trending/logic';
import searchLogic from './search/logic';
import movieLogic from './movie/logic';

export default [
  profileLogic,
  createSessionLogic,
  deleteSessionLogic,
  createList,
  trendingLogic,
  searchLogic,
  movieLogic,
];
