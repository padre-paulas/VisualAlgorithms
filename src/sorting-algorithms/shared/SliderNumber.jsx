import generateArray from "./generate-array";

const SliderNumber = ({ value, onChange, setArray, barRefs }) => {
  return <input className="h-1 w-35 bg-transparent" 
    min="1" max="100" value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      onChange(e.target.value);
      setArray(generateArray(e.target.value));
    }}
    onMouseDown={(e) => {
      setColor(barRefs, e.target.value);
    }}
    ></input>
}

const setColor = (barRefs, value) =>  {
  for (let i = 0; i < value; i++) {
    barRefs.current[i].style.background = 'var(--color-amber-glow)';
  }
}

export default SliderNumber;