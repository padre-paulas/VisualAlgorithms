const quicksortFunc = (numberOfElements, timePerOperation) => {
  let array = Array.from({ length: numberOfElements }, 
  () => Math.floor(Math.random() * 100));
  console.log(timePerOperation);
  displayArray(array, numberOfElements);
  console.log(quicksortFuncInner(array));
  return quicksortFuncInner(array, numberOfElements);
}
// const quicksortFuncInner = (array) => {
//   if (array.length < 2) return array;
//   const pivotIndex = Math.floor(Math.random() * array.length);
//   const pivot = array[pivotIndex];
//   let less = [], greater = [];
//   array.forEach((element, i) => {
//     if (i === pivotIndex) return;
//     (element < pivot ? less : greater).push(element);
//   });
//   return [...quicksortFuncInner(less), array[pivotIndex], ...quicksortFuncInner(greater)];
// }

const quicksortFuncInner = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = partition(array, left, right);
    partition(array, left, array[pivotIndex]);
    quicksortFuncInner(array, left, pivotIndex - 1);
    quicksortFuncInner(array, pivotIndex + 1, right);
  }
  return array;
}
const partition = (array, left, right) => {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[j], array[i]] = [array[i], array[j]];
    } 
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1;
}

export default quicksortFunc;

// console.log(quicksortFunc(100, 1));

const displayArray = (array, numberOfElements) => {
  const width = String('w-' + Math.floor(120 / numberOfElements));
  return <div>
    {array.map((element, index) => {
      return <div key={index} className={`${width} bg-amber-glow`} style={{ height: `${element}px` }}></div>
    })}
  </div>
}