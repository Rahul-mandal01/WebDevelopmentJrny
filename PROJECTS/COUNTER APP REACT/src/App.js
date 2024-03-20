import "./App.css";
import React, { useEffect, useState } from "react";


function App() {

  
  const[count, setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }


  return (
    <div className="w-[100vw] h-[100vh] justify-center items-center flex flex-col bg-[#344151] gap-10 ">

      <div className="font-medium text-2xl text-[#0398d4] ">Increment And Decrement</div>

      <div className=" bg-white flex flex-row justify-center gap-12 py-3 rounded-md text-[25px] text-[#344151] ">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl ">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>

      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg " >
        Reset
      </button>


    </div>
  );
}

export default App;
