import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import {useState} from "react";
function App() {
  const [isGameStarted, setisGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setisGameStarted((prev)=> !prev)
  }
  
  
  return (
    <>

    <div className="pages w-11/12 my-10 m-auto font-display">
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
      }
    </div>
      
    </>
  );
}

export default App;
