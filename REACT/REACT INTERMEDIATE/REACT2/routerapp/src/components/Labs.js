import React from 'react'
import { useNavigate } from 'react-router-dom'

 const Labs = ()=> {

    const navigate = useNavigate();


    function clickHandler(){
        // move to Home page
        navigate("/");
    }


  return (
    <div>
        <div>This is Labs page</div>
        <button onClick={clickHandler} >Move to Home Page </button>
    </div>
  )
}

export default Labs;
