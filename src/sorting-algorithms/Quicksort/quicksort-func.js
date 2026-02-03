const quicksortFunc = async (array, barRefs, timePerOperation, left = 0, right = array.length - 1) => {
  if (left < right) {
    console.log(barRefs);
    const pivotIndex = await partition(array, barRefs, timePerOperation, left, right);
    // barRefs.current[pivotIndex].style.background = "var(--color-vibrant-coral)";
    // await sleep(1000);
    // barRefs.current[pivotIndex].style.background = "var(--color-amber-glow)";
    quicksortFunc(array, barRefs, timePerOperation, left, pivotIndex - 1);
    quicksortFunc(array, barRefs, timePerOperation, pivotIndex + 1, right);
  }
  return array;
}

const partition = async (array, barRefs, timePerOperation, left, right) => {
  // const width = barRefs.current[0].offsetWidth;
  const pivot = array[right];
  let i = left - 1;
  barRefs.current[right].style.background = "var(--color-vibrant-coral)";

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;

      let heightJ = barRefs.current[j].offsetHeight;
      let heightI = barRefs.current[i].offsetHeight;
      
      barRefs.current[j].style.height = `${heightI}px`;
      barRefs.current[i].style.height = `${heightJ}px`;
      [array[j], array[i]] = [array[i], array[j]];
      // barRefs.current[i].style.transform = `translateX(${width * j}px)`;
      // barRefs.current[j].style.transform = `translateX(${width * -i}px)`;
      
    } 
    await sleep(timePerOperation)
  }
  barRefs.current[right].style.background = "var(--color-amber-glow)";

  [array[i + 1], array[right]] = [array[right], array[i + 1]];

  await sleep(timePerOperation)

  let heightRight = barRefs.current[right].offsetHeight;
  let heightIplus1 = barRefs.current[i + 1].offsetHeight;
  barRefs.current[i + 1].style.height = `${heightRight}px`;
  barRefs.current[right].style.height = `${heightIplus1}px`;
  return i + 1;
}

// const moveBar = (barRefs, i) => {
//   console.log(barRefs[i])
// }

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default quicksortFunc;