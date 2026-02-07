import setColor from "../../shared-global/set-array-bars-color";
import sleep from "../../shared-global/sleep";

const simpleSearchFunc = async (array, target, barRefs, timePerOperation) => {
  setColor(barRefs, array.length, 'var(--color-amber-glow)')
  for (let i = 0; i < array.length; i++) {
    barRefs.current[i].style.background = 'var(--color-vibrant-coral)';
    await sleep(timePerOperation);
    if (i === target) {
      barRefs.current[i].style.background = 'var(--color-midnight-violet)';
      return i;
    }
    barRefs.current[i].style.background = 'var(--color-amber-glow)';
  }
}

export default simpleSearchFunc;