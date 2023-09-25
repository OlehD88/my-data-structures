export const insertionSort = (arr: number[]): number[] => {
  for(let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > key) {
      const temp = arr[j+1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j = j - 1;
    }
  }
  return arr;
}

export const insertionSortDecr = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] < key) {
      const tmp = arr[j+1];
      arr[j+1] = arr[j];
      arr[j] = tmp;
      j = j - 1;
    }
  }
  return arr;
}

export const insertionSortEnd = (arr: number[]): number[] => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}