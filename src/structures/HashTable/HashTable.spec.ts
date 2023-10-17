import { HashTable } from "./HashTable";

describe('Hash Table', () => {
  const hashTable = new HashTable();

  it('Should handle add and get', () => {
    hashTable.add('cow', 123);
    hashTable.add('hello', 45);

    expect(hashTable.get('cow')).toEqual(123);
    expect(hashTable.get('hello')).toEqual(45);
  });

  it('Should return undefined if value is not in table', () => {
    expect(hashTable.get('Harry Potter')).toEqual(undefined);
  });

  it('Should handle collision', () => {
    hashTable.add('bow', 145);

    expect(hashTable.get('bow')).toEqual(145);
    expect(hashTable.get('and')).toEqual(undefined);
  });
});