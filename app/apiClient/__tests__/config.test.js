import axios from 'axios';
import config from '../config';
import qs from 'qs';

jest.mock('axios', () => ({
  create: jest.fn(),
}));

// import { AxiosStatic } from 'axios';

// const mock = jest.genMockFromModule<AxiosStatic>('axios');

// let mock = jest.mock('axios', () => ({
//   create: jest.fn(),
// }));

// mock.interceptors = mock.interceptors || {};
// mock.interceptors.response = mock.interceptors.response || {};
// mock.interceptors.request.use = jest.fn();
// mock.create = () => {
//   return mock;
// };

describe('API config', () => {
  it('should send request - apiConfig', () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://api.themoviedb.org/3/',
      timeout: 1000,
    });
  });
});
