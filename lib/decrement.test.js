const root = process.cwd();
const decrement = require(`./decrement`);

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