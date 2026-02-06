const bubblesortFunc = async (array, barRefs, timePerOperation) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        let heightJ = barRefs.current[j].offsetHeight;
        let heightJplus1 = barRefs.current[j + 1].offsetHeight;

        barRefs.current[j].style.background = 'var(--color-vibrant-coral)'
        barRefs.current[j].style.height = `${heightJplus1}px`;
        barRefs.current[j].style.background = 'var(--color-amber-glow)'
        barRefs.current[j + 1].style.background = 'var(--color-vibrant-coral)'
        barRefs.current[j + 1].style.height = `${heightJ}px`;
        await sleep(timePerOperation);
        barRefs.current[j + 1].style.background = 'var(--color-amber-glow)'
      }
    }
  }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export default bubblesortFunc;