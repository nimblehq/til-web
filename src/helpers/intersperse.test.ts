import { intersperse } from './intersperse';

describe('intersperse', () => {
  it('returns an array with the separator interspersed between each element of the input array', () => {
    const inputArray = [1, 2, 3];
    const outputArray = [1, 0, 2, 0, 3];
    const separator = 0;

    expect(intersperse(inputArray, separator)).toEqual(outputArray);
  });
});
