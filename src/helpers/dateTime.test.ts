import { formatDate } from './dateTime';

describe('dateTime helper', () => {
  describe('formatDate', () => {
    describe('given a valid date string', () => {
      it('returns the correct formatted date string', () => {
        const date = '2020-01-01';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('January 1, 2020');
      });
    });

    describe('given an invalid date string', () => {
      it('returns an empty string', () => {
        const date = 'not a date';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('');
      });
    });
  });
});
