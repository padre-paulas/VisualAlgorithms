import generateArray from "./generate-array";

const SliderNumber = ({ value, onChange, setArray }) => {
  return <input className="h-1 w-35 bg-transparent" 
    min="1" max="100" value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      onChange(e.target.value);
      setArray(generateArray(e.target.value));
    }}
    ></input>
}

export default SliderNumber;