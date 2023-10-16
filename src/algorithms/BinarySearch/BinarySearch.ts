// return index of search value or -1 if value not found
export const binarySearch = (needle: number, arr: number[]): number => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === needle ? 0 : -1;

  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex];

  if (middleValue === needle) return middleIndex;

  if (needle < middleValue) return binarySearch(needle, arr.slice(0, middleIndex));

  return binarySearch(needle, arr.slice(middleIndex, arr.length));
};