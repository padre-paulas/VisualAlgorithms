import { useRef, useState } from "react";
import QuicksortBars from "./QuicksortBars";
import SliderNumber from "./SliderNumber";
import SliderTime from "./SliderTime";
// import quicksortFunc from "./quicksort-func";
import ButtonStart from "./ButtonStart";
import generateArray from "./generate-array";

const Quicksort = () => {
  const [ numberOfElements, setNumberOfElements ] = useState(50);
  const [ timePerOperation, setTimePerOperation ] = useState(50);
  const [ array, setArray ] = useState(generateArray(numberOfElements));
  const barRefs = useRef({});

  return <div className="flex justify-center h-screen w-screen bg-amber-glow/20">
    <div className="ml-0 w-screen text-midnight-violet
    flex flex-col items-center gap-8 
    ">
    <h1 className="flex items-center text-center justify-center text-4xl mt-4">Quicksort</h1>
    <div className={` w-[70vw] h-[70vh] rounded-xl shadow-[0_0_8px_var(--color-midnight-violet)]
    ${/* inset-shadow-[0_0_8px_var(--color-midnight-violet)] */' '} `}>
      <QuicksortBars array={array} barRefs={barRefs} />
    </div>

    {/* <button onClick={() => quicksortFunc(array, setArray)}
    className="bg-muted-teal rounded-xl w-30 h-12 
    shadow-[0_0_3px_var(--color-teal-700)] border-2 border-teal-700
    text-xl transition-all ease-in-out 
    hover:bg-muted-teal/90 hover:border-muted-teal
    active:text-xs
    ">START</button> */}

    <ButtonStart array={array} barRefs={barRefs} timePerOperation={timePerOperation} />
      
    </div>
    <div className="grid justify-center text-center m-2
    bg-amber-glow w-60 text-midnight-violet 
    rounded-xl shadow-[0_0_8px_var(--color-midnight-violet)] border-2 border-midnight-violet/30 
    ">
      <h2 className="mt-4 text-2xl">Info</h2>
      <div>
        <p>Number of elements:<br/>{numberOfElements}</p>
        <SliderNumber value={numberOfElements} onChange={setNumberOfElements} setArray={setArray} />
      </div>
      <div className="mb-40">
        <p>Time per operation, ms:<br/>{timePerOperation}</p>
        <SliderTime value={timePerOperation} onChange={setTimePerOperation} />
      </div>
    </div>
  </div>
}

export default Quicksort;