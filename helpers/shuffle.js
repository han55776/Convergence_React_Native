// This function shuffles provided array using recursive mechanism
// Each function shuffles the array for 100 times from starting index parameter
// Then, it iterates until the index parameter reaches to the end of index of array length
// The reason that it loops 100 times for each function is triggerd stack overflow if it iterates too many function with big array
export const shuffle = (arr, index) => {
  // If the index parameter reached to maximum length of the array, then it finally returns randomly sorted array
  if (index >= arr.length) return arr;

  for (let i = 0; i < 100; i++) {
    // randonIdx: random integer value less than the length of array
    let randomIdx = Math.floor(Math.random() * arr.length);

    let temp = arr[index + i];
    arr[index + i] = arr[randomIdx];
    arr[randomIdx] = temp;
  }

  // Another recursive shuffle starting from 100th after index parameter
  return shuffle(arr, index + 100);
};
