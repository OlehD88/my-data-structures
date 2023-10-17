import { insertionSort } from "./InsertionSort";

describe('Insertion Sort', () => {
  it ('Should sort array', () => {
    const arr = [4, 1, 8, 29, 45, 12, 33];

    expect(insertionSort(arr)).toEqual([1, 4, 8, 12, 29, 33, 45]);
  })
});