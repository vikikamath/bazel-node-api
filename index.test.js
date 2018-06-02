const {increment} = require('./lib/increment');
const {decrement} = require('./lib/decrement');


describe('incrementing', () => {
  describe('by default', () => {
    it('increments by 1', () => {
      expect(increment(1)).toBe(2);
    });
  });

  describe('by step', () => {
    it('increments by step size', () => {
      expect(increment(1, 3)).toBe(4);
    });
  });
});

describe('decrementing', () => {
  describe('by default', () => {
    it('decrements by 1', () => {
      expect(decrement(1)).toBe(0);
    });
  });
  
  describe('by step', () => {
    it('decrements by step size', () => {
      expect(decrement(1, 3)).toBe(-2);
    });
  });
});