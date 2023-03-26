const analyzeArray = (array) => {
  if (!checkValid(array)) return { average: -1, min: -1, max: -1, length: -1 };

  let average = getAverage(array);
  let min = getMin(array);
  let max = getMax(array);
  let length = array.length;

  return { average, min, max, length };
};

const valid = (checkValid = (array) => {
  if (!Array.isArray(array)) return false;
  const onlyNumbers = array.every(
    (currentValue) => typeof currentValue === "number"
  );
  if (!onlyNumbers) return false;
  return true;
});

let getAverage = (array) => array.reduce((a, b) => a + b) / array.length;
let getMin = (array) => Math.min(...array);
let getMax = (array) => Math.max(...array);

export default analyzeArray;
