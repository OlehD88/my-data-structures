import { bubbleSort } from "./BubbleSort";

describe('Bubble Sort', () => {
  it ('Should sort array', () => {
    const arr = [4, 1, 8, 29, 45, 12, 33];

    expect(bubbleSort(arr)).toEqual([1, 4, 8, 12, 29, 33, 45]);
  })
});