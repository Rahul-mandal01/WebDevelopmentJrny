import React from 'react'
import { useNavigate } from 'react-router-dom'

 const About = ()=> {

    const navigate = useNavigate();


    function clickHandler(){
        // move to labs page\
        navigate("/labs");
    }



  return (
    <div>
        <div>This is About page</div>
        <button onClick={clickHandler} >Move to Labs Page </button>
    </div>
  )
}

export default About;