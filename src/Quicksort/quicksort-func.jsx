// const quicksortFuncOuter = (numberOfElements, timePerOperation) => {
//   let array = Array.from({ length: numberOfElements }, 
//   () => Math.floor(Math.random() * 100));
//   console.log(timePerOperation);
//   displayArray(array, numberOfElements);
//   return quicksortFunc(array);
// }
// const quicksortFuncOuter = (array) => {
//   if (array.length < 2) return array;
//   const pivotIndex = Math.floor(Math.random() * array.length);
//   const pivot = array[pivotIndex];
//   let less = [], greater = [];
//   array.forEach((element, i) => {
//     if (i === pivotIndex) return;
//     (element < pivot ? less : greater).push(element);
//   });
//   return [...quicksortFunc(less), array[pivotIndex], ...quicksortFunc(greater)];
// }

const quicksortFunc = (array, setArray, left = 0, right = array.length - 1) => {
  if (left < right) {
    // console.log("I'm working!!!");
    const pivotIndex = partition(array, left, right);
    quicksortFunc(array, setArray, left, pivotIndex - 1);
    quicksortFunc(array, setArray, pivotIndex + 1, right);
  }
  setArray(array);
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

// console.log(quicksortFunc(100));

// const displayArray = (array, numberOfElements) => {
//   const width = String('w-' + Math.floor(120 / numberOfElements));
//   return <div>
//     {array.map((element, index) => {
//       return <div key={index} className={`${width} bg-amber-glow`} style={{ height: `${element}px` }}></div>
//     })}
//   </div>
// }