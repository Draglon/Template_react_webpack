import axios from 'axios';
import client from '../client';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
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
      // timeout: 1000,
    });
  });
});
