const hashFunction = (key: string): number => key.length;

export class HashTable<T> {
  private values: [string, T][][] = [];

  constructor() {}

  add(key: string, value: T): void {
    const cellNumber = hashFunction(key);
    const exist = this.values[cellNumber];
    if (exist) {
      this.values[cellNumber].push([key, value]);
    } else {
      this.values[cellNumber] = [[key, value]];
    }
  }

  get(key: string): T | undefined {
    const cellNumber = hashFunction(key);

    return this.values[cellNumber]?.find(([k]) => k === key)?.[1];
  }
}