
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const[text,setText]= useState('');

  // variation 1 --> Every Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");

  // });

  // variation 2 --> First Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // }, []);

  // Variation 3 --> Whenever dependency changes
  // useEffect( () => {
  //   console.log("Change Observed");
  // }, [text]);

  // variation 4 --> To handle unmounting of a component
  useEffect( () => {
    // add event listner
    console.log("Listner Added");

    return () => {
      console.log("Listner Removed");
    }
  }, [text]);


  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }


  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>

    </div>
  );
}

export default App;
