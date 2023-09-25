import {
  insertionSort,
  insertionSortEnd,
  insertionSortDecr
} from "./InsertionSort";

const list = [5, 2, 3, 8, 6, 98, 65, 23];
const sortedListIncr = [2, 3, 5, 6, 8, 23, 65, 98];
const sortedListDecr = [98, 65, 23, 8, 6, 5, 3, 2];

describe('Insert Search', () => {
  it('Should sort with insertionSort', () => {
    expect(insertionSort([...list])).toEqual(sortedListIncr);
  });

  it('Should sort with insertionSortEnd', () => {
    expect(insertionSortEnd([...list])).toEqual(sortedListIncr);
  });

  it('Should sort with insertionSortDecr', () => {
    expect(insertionSortDecr([...list])).toEqual(sortedListDecr);
  })
})