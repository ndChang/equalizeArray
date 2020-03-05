let array = [1, 1, 1, 2, 3, 4, 5];
function equalizeArray(arr) {
  let removedItems = 0;
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]] === undefined) {
      hashTable[arr[i]] = 1;
    } else {
      hashTable[arr[i]]++;
    }
  }
  let maxHashKey = Object.keys(hashTable).reduce((a, b) =>
    hashTable[a] > hashTable[b] ? a : b
  );

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != maxHashKey) {
      removedItems++;
    }
  }
  return removedItems;
}

console.log(equalizeArray(array));
