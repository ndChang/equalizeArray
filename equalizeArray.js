// Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.

// For example, if his array is arr = [1,2,2,3] , we see that he can delete the 2 elements 1 and 3 leaving arr = [2,2]. He could also delete both twos and either the 1 or the 3, but that would take 3 deletions. The minimum number of deletions is 2.
//https://www.hackerrank.com/challenges/equality-in-a-array/problem

let array = [1, 1, 1, 2, 3, 4, 5];

function equalizeArray(arr) {
  // Removed items count
  let removedItems = 0;
  //Object to keep count of all seen values
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    //Check to see if key exists of the array value
    //If key does not exist
    if (hashTable[arr[i]] === undefined) {
      //Create a key in object with value of one to initialize the count
      hashTable[arr[i]] = 1;
    } else {
      //if key exists then increase the count
      hashTable[arr[i]]++;
    }
  }
  //Varible that sorts through object to return the key with the highest value
  let maxHashKey = Object.keys(hashTable).reduce((a, b) =>
    hashTable[a] > hashTable[b] ? a : b
  );
  //Loop to see how many array items are not the matched key
  for (let i = 0; i < arr.length; i++) {
    //if array item being viewed is not the matched key
    if (arr[i] != maxHashKey) {
      //increase removed item count
      removedItems++;
    }
  }
  //return the removed item count
  return removedItems;
}

console.log(equalizeArray(array));
