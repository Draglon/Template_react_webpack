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

describe('axios create', () => {
  it('should send request', () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://api.themoviedb.org/3/',
    });
  });
});
