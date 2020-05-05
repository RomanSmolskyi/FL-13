function toConvert(...stringArray) {
  const count = [];
  for (let i = 0; i < stringArray.length; i++) {
    count.push(+stringArray[i]);
    count.push(String(stringArray[i]));
  }
  return count;
}

let executeForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt(arr[i]))) {
      arr[i] = parseInt(arr[i]);
    }
    callback(arr[i]);
  }
};

//Sorry,I didn't catch this topic.