export function bubblingSort(data) {
  const lastIndex = data.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    for (let z = 0; z < lastIndex - i; z++) {
      const leftValue = data[z];
      const rightValue = data[z + 1];
      if (leftValue > rightValue) {
        data[z] = rightValue;
        data[z + 1] = leftValue;
      }
    }
  }
  return data;
}
