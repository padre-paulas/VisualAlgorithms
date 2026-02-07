const ButtonStart = ({ array, barRefs, timePerOperation, searchFunc }) => {
  const target = 19;
  return <button onClick={() => {
    searchFunc(array, target, barRefs, timePerOperation);
  }}
    className="bg-muted-teal rounded-xl w-30 h-12 
    shadow-[0_0_3px_var(--color-teal-700)] border-2 border-teal-700
    text-xl transition-all ease-in-out 
    hover:bg-muted-teal/90 hover:border-muted-teal
    active:text-xs
    ">START</button>
}

export default ButtonStart;