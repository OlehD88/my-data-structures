// Function gets unsorted array and return it sorted in increasing
export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const a = arr[j];
      const b = arr[j + 1];

      if (a > b) {
        arr[j] = b;
        arr[j+1] = a;
      }
    }
  }
  return arr;
}