import { formatMoney, formatTime } from '../format';

describe('Helpers - formats', () => {
  it('formatMoney() - should return string', () => {
    const money = 100000;

    expect(formatMoney(money)).toEqual('100,000.00');
  });

  it('formatTime() - should return string', () => {
    const time = 140;

    expect(formatTime(time)).toEqual('2h 20m');
  });
});
