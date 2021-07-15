export const shuffle = (arr, index) => {
  if (index >= arr.length) return arr;

  for (let i = 0; i < 100; i++) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    let temp = arr[index + i];
    arr[index + i] = arr[randomIdx];
    arr[randomIdx] = temp;
  }

  return shuffle(arr, index + 100);
};
