import { binarySearch } from "./BinarySearch";

describe('Binary Search', () => {
  it('Should return index of value', () => {
    const needle = 3;
    const arr = [3, 6, 7, 9, 20, 45];

    expect(binarySearch(needle, arr)).toEqual(0);
  });

  it('Should return -1 for not found value', () => {
    const needle = 28;
    const arr = [3, 6, 7, 9, 20, 45];

    expect(binarySearch(needle, arr)).toEqual(-1);
  });

  it('Should return -1 if array is empty', () => {
    const needle = 28;
    const arr: number[] = [];

    expect(binarySearch(needle, arr)).toEqual(-1);
  })
})