// Sort array. The same approach like bubble sort but without swaping each time.
export const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      const a = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = a;
    }
  }

  return arr;
}