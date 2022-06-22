/* intersperse: Return an array with the separator interspersed between
 * each element of the input array.
 *
 * > _([1,2,3]).intersperse(0)
 * [1,0,2,0,3]
 */

const intersperse = (
  array: Array<number | string | JSX.Element>,
  separator: number | string
) => {
  if (array.length === 0) {
    return [];
  }

  return array
    .slice(1)
    .reduce((xs, x) => [...xs, ...[separator, x]], [array[0]]);
};

export { intersperse };
