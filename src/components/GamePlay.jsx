import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import { useState } from "react"

import Rules from "./Rules"

const GamePlay = ({toggle}) => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError]=useState();
  const [showRules,setShowRules]=useState();

  
  const generateRandomNumber=(min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }
  const roleDice =()=>{
    if(!selectedNumber){
      setError("You have not selected any number")
      return
    }
    
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
   
    if(selectedNumber == randomNumber){
      setScore((prev)=>prev+randomNumber);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
  }
  const resetScore = () => {
    setScore(0);
  }
  

  return (
    <div>
      <div className="top flex justify-between">
      <TotalScore score={score}/>
      <NumberSelector
      error={error}
      setError={setError}
      selectedNumber ={selectedNumber}
      setSelectedNumber = {setSelectedNumber}
      />
      </div>
      <RoleDice
      currentDice={currentDice}
     roleDice={roleDice}
      />
      <div className="btns grid grid-rows-2 w-1/6 ms-[76.5vh]">
        <button onClick={resetScore} className="my-2 py-3 border-[1px] border-black  hover:border-black hover:duration-300 hover:ease-in active:bg-black active:border-[1px] active:duration-0 active:text-white rounded-md">Reset Score</button>
        <button onClick={()=>setShowRules((prev)=>!prev)} className="my-2 py-3 border-[1px] border-black bg-black text-white hover:border-black hover:duration-300 hover:ease-in-out active:bg-white active:border-[1px] active:duration-0 active:text-black rounded-md">{showRules ? "Hide": "Show"} Rules</button>
      </div>
      {showRules && <Rules/>}
      </div>

  )
}

export default GamePlay
