const root = process.cwd();
const increment = require(`./increment`);


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
