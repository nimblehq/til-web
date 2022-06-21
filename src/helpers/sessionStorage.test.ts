import {
  getFromSessionStorage,
  removeFromSessionStorage,
  saveToSessionStorage,
} from './sessionStorage';

describe('sessionStorage', () => {
  describe('saveToSessionStorage', () => {
    it('saves a value to sessionStorage', () => {
      const key = 'key';
      const value = 'value';

      saveToSessionStorage(key, value);

      expect(getFromSessionStorage(key)).toBe(value);
    });
  });

  describe('getFromSessionStorage', () => {
    it('returns a value from sessionStorage', () => {
      const key = 'key';
      const value = 'value';

      saveToSessionStorage(key, value);

      expect(getFromSessionStorage(key)).toBe(value);
    });
  });

  describe('removeFromSessionStorage', () => {
    it('removes a value from sessionStorage', () => {
      const key = 'key';
      const value = 'value';

      saveToSessionStorage(key, value);
      removeFromSessionStorage(key);

      expect(getFromSessionStorage(key)).toBeNull();
    });
  });
});
