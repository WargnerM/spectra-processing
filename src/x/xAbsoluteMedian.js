import median from 'ml-array-median';

/**
 * This function calculates the median after taking the reimAbsolute values of the points
 * @param {Array<Number>} array - the array that will be rotated
 * @return {Number}
 */
export function xAbsoluteMedian(array) {
  let tmpArray = array.slice();
  for (let i = 0; i < tmpArray.length; i++) {
    tmpArray[i] = Math.abs(tmpArray[i]);
  }

  return median(tmpArray);
}