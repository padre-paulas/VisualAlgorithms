const ArrayBars = ({ array = [], barRefs }) => {
  const width = 100 / array.length;
  return <div  className="flex items-end place-self-center w-[98%] h-full">
    {array.map((element, i) => {
      return <div key={i} ref={(element) => barRefs.current[i] = element}
      className={`
        bg-amber-glow flex rounded-sm border border-midnight-violet/30`} style={{ 
        height: `${element}%`, width: `${width}%` 
      }}></div>
    })}
  </div>
}

export default ArrayBars;