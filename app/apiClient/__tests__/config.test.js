import axios from 'axios';
import qs from 'qs';
import config from '../config';

jest.mock('axios', () => ({
  create: jest.fn().mockImplementation(() => ({
    interceptors: {
      request: {
        use: jest.fn(),
      },
    },
  })),
}));

describe('API config', () => {
  it('should send request - apiConfig', () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://api.themoviedb.org/3/',
    });
  });
});
