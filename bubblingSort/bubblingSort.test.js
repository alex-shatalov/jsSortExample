import { bubblingSort } from './bubblingSort';

const testData1 = [1, 9, 5, 3, 7, 8];
const testData2 = [7, 8, 9, 3, 1, 5];
const testData3 = [9, 7, 5, 1, 3, 8];
const testData4 = [5, 7, 8, 3, 9, 1];
const testData5 = [8, 3, 1, 7, 5, 9];

const sortedData = [1, 3, 5, 7, 8, 9];

test('bubbling sort', () => {
  expect(bubblingSort(testData1)).toEqual(sortedData);
  expect(bubblingSort(testData2)).toEqual(sortedData);
  expect(bubblingSort(testData3)).toEqual(sortedData);
  expect(bubblingSort(testData4)).toEqual(sortedData);
  expect(bubblingSort(testData5)).toEqual(sortedData);
});
