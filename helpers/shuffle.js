export const shuffle = (arr, index) => {
  // if (index === arr.length - 1) return arr;

  // for (let tempIdx =index; tempIdx < arr.length; tem)

  // let randomIdx = (Math.floor(Math.random()) * 1000000) % (index + 1);
  // let temp = arr[index];
  // arr[index] = arr[randomIdx];
  // arr[randomIdx] = temp;

  // return shuffle(arr, index + 1);
  var newArray = arr;

  for (let i = index; i < arr.length; i++) {
    let randomIdx = (Math.floor(Math.random()) * 10000) % arr.length;
    let temp = arr[i];
    arr[i] = arr[randomIdx];
    arr[randomIdx] = temp;
  }

  console.log(arr);

  return arr;
};
