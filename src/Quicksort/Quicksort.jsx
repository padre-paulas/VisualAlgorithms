import { useState } from "react";
import QuicksortBars from "./QuicksortBars";
import Slider from "./Slider";
const Quicksort = () => {
  const [ numberOfElements, setNumberOfElements ] = useState();
  const [ timePerOperation, setTimePerOperation ] = useState();
  // const [ value, setValue ] = useState('');

  return <div className="flex justify-center h-screen w-screen bg-amber-glow/20">
    <div className="ml-0 w-screen text-midnight-violet
    flex flex-col items-center gap-4 
    ">
    <h1 className="flex items-center text-center justify-center text-4xl mt-4">Quicksort</h1>
    <div className="bg-amber-glow/20 w-[70vw] h-[70vh] rounded-xl 
    inset-shadow-[0_0_8px_var(--color-midnight-violet)]">
      <QuicksortBars />
    </div>

    <button className="bg-muted-teal rounded-xl w-30 h-12 
    shadow-[0_0_3px_var(--color-teal-700)] border-2 border-teal-700
    text-xl transition-all ease-in-out 
    hover:bg-muted-teal/90 hover:border-muted-teal
    active:text-xs
    ">Start</button>
      
    </div>
    <div className="grid justify-center text-center m-2
    bg-amber-glow w-60 text-midnight-violet 
    rounded-xl shadow-[0_0_8px_var(--color-midnight-violet)] border-2 border-midnight-violet/30 
    ">
      <h2 className="mt-4">Info</h2>
      <div>
        <p>Number of elements: {numberOfElements}</p>
        <Slider value={numberOfElements} onChange={setNumberOfElements} />
      </div>
      <div className="mb-40">
        <p>Time per operation, ms: {timePerOperation}</p>
        <Slider value={timePerOperation} onChange={setTimePerOperation} />
      </div>
    </div>
  </div>
}

export default Quicksort;