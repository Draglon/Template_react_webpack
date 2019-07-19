import axios from 'axios';
import client from '../client';
import qs from 'qs';

jest.mock('qs', () => ({
  stringify: jest.fn(() => 'serialized'),
}));

describe('axios interceptor', () => {
  it('check interceptor', () => {
    const config = client.interceptors.request.handlers[0].fulfilled({});

    expect(config).toEqual({
      params: {
        api_key: '373ab70129f36fd1f65b6d7b24ec2641',
      },
      paramsSerializer: expect.any(Function),
    });
  });

  it('should interceptor request', () => {
    const params = 'some params';
    const config = client.interceptors.request.handlers[0].fulfilled({});
    const result = config.paramsSerializer(params);

    expect(result).toEqual('serialized');
    expect(qs.stringify).toHaveBeenCalledWith(params);
  });
});
