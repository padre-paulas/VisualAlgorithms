const SliderTarget = ({ value, onChange }) => {
  return <input className="h-1 w-35 bg-transparent" 
    min="0" max="99" value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      onChange(Number(e.target.value));
    }}
    ></input>
}

export default SliderTarget;