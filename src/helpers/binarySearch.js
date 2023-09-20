const binarySearch = (sortedList, name) => {
  let left = 0;
  let right = sortedList.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentObject = sortedList[mid];

    if (currentObject.name === name) {
      return currentObject;
    } else if (currentObject.name < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
};

module.exports = binarySearch;
