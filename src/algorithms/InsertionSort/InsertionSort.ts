// Sort better in average case. O(n2 / 2);
export const insertionSort = (arr: number[]): number[] => {
  for(let i = 1; i < arr.length; i++) {
    let position = i;

    while(position > 0 && arr[position] < arr[position - 1]) {
      const tmp = arr[position];
      arr[position] = arr[position - 1];
      arr[position - 1] = tmp;
      --position;
    }
  }

  return arr;
}