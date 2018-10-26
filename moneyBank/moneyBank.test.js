import { moneyBank } from './moneyBank';

describe('money bank', () => {
  it('test moneyResult 1', () => {
    const limits = { 5000: 4, 1000: 4, 500: 3 };
    expect(moneyBank(21000, limits)).toEqual(['5000x4', '1000x1']);
    expect(limits).toEqual({
      1000: 3,
      500: 3
    });
  });
    it('test moneyResult 3', () => {
      const limits = { 5000: 4, 1000: 4, 500: 2 };
      expect(moneyBank(20000, limits)).toEqual(['5000x4']);
      expect(limits).toEqual({
        1000: 4,
        500: 2
      });
    });
    it('test moneyResult 4', () => {
      const limits = { 5000: 2, 1000: 10, 500: 1 };
      expect(moneyBank(15000, limits)).toEqual(['5000x2', '1000x5']);
      expect(limits).toEqual({
        1000: 5,
        500: 1
      });
    });
    it('test moneyResult 5', () => {
      const limits = { 5000: 5, 1000: 4, 500: 10 };
      expect(moneyBank(25000, limits)).toEqual(['5000x5']);
      expect(limits).toEqual({
        1000: 4,
        500: 10
      });
    });
    it('test moneyResult 6', () => {
      const limits = { 5000: 3, 1000: 10, 500: 10 };
      expect(moneyBank(21000, limits)).toEqual(['5000x3', '1000x6']);
      expect(limits).toEqual({
        1000: 4,
        500: 10
      });
    });
    it('test moneyResult 7', () => {
      const limits = { 5000: 5, 1000: 7, 500: 10 };
      expect(moneyBank(17000, limits)).toEqual(['5000x3', '1000x2']);
      expect(limits).toEqual({
        5000: 2,
        1000: 5,
        500: 10
      });
    });
    it('test moneyResult 8', () => {
      const limits = { 5000: 2, 1000: 11, 500: 10 };
      expect(moneyBank(11000, limits)).toEqual(['5000x2', '1000x1']);
      expect(limits).toEqual({
        1000: 10,
        500: 10
      });
    });
    it('test moneyResult 9', () => {
      const limits = { 5000: 1, 1000: 11, 500: 10 };
      expect(moneyBank(11000, limits)).toEqual(['5000x1', '1000x6']);
      expect(limits).toEqual({
        1000: 5,
        500: 10
      });
    });
    it('test moneyResult 11', () => {
      const limits = { 5000: 1, 1000: 5, 500: 100 };
      expect(moneyBank(500, limits)).toEqual(['500x1']);
      expect(limits).toEqual({
        5000: 1,
        1000: 5,
        500: 99
      });
    });
    it('test limits with error', () => {
      let limits = { 5000: 4, 1000: 4, 500: 3 };
      const oldLimits = {...limits};
      expect(moneyBank(5611, limits)).toEqual(new Error('error'));
      expect(limits).toEqual(oldLimits);
    });
    it('test limits with error 1', () => {
      let limits = { 5000: 4, 1000: 4, 500: 3 };
      console.log(limits, 'fffffff');
      const oldLimits = {...limits};
      expect(moneyBank(560011, limits)).toEqual(new Error('error'));
      console.log(limits, 'fffffff');
      expect(limits).toEqual(oldLimits);

    });
    it('test limits with error 2', () => {
      let limits = { 5000: 4, 1000: 4, 500: 3 };
      const oldLimits = {...limits};
      expect(moneyBank(1, limits)).toEqual(new Error('error'));
      expect(limits).toEqual(oldLimits);
    });
});
