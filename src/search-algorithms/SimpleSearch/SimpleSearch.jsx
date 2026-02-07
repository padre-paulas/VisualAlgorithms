import { useRef, useState } from "react";
import ArrayBars from "../../shared-global/ArrayBars";
import SliderNumber from "../../shared-global/SliderNumber";
import SliderTime from "../../shared-global/SliderTime";
import ButtonStart from "../shared/ButtonStart";
import generateArraySorted from "../../shared-global/generate-array-sorted";
import SliderTarget from "../../shared-global/SliderTarget";
import simpleSearchFunc from "./simple-search-func";

const SimpleSearch = () => {
  const [ numberOfElements, setNumberOfElements ] = useState(50);
  const [ timePerOperation, setTimePerOperation ] = useState(50);
  const [ array, setArray ] = useState(generateArraySorted(numberOfElements));
  const [ target, setTarget ] = useState(() => Math.floor(Math.random() * (array.length - 1)));
  console.log(target)
  const barRefs = useRef({});

  return <div className="flex justify-center h-screen w-screen bg-amber-glow/20">
    <div className="ml-0 w-screen text-midnight-violet
    flex flex-col items-center gap-8 
    ">
    <h1 className="flex items-center text-center justify-center text-4xl mt-4">Simple Search</h1>
    <div className={`w-[70vw] h-[70vh] rounded-xl shadow-[0_0_8px_var(--color-midnight-violet)]`}>
      <ArrayBars array={array} barRefs={barRefs} />
    </div>

    <ButtonStart array={array} target={target} barRefs={barRefs} timePerOperation={timePerOperation} searchFunc={simpleSearchFunc}/>
      
    </div>
    <div className="grid justify-center text-center m-2
    bg-amber-glow w-60 text-midnight-violet 
    rounded-xl shadow-[0_0_8px_var(--color-midnight-violet)] border-2 border-midnight-violet/30 
    ">
      <h2 className="mt-4 text-2xl">Info</h2>
      <div>
        <p>Number of elements:<br/>{numberOfElements}</p>
        <SliderNumber value={numberOfElements} onChange={setNumberOfElements} setArray={setArray} barRefs={barRefs} generateArrayFunc={generateArraySorted}/>
      </div>
      <div>
        <p>Time per operation, ms:<br/>{timePerOperation}</p>
        <SliderTime value={timePerOperation} onChange={setTimePerOperation} />
      </div>
      <div className="mb-40">
        <p>Target:<br/>{target}</p>
        <SliderTarget value={target} onChange={setTarget} />
      </div>
    </div>
  </div>
}

export default SimpleSearch;