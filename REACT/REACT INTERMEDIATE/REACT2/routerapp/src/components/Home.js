import React from 'react'
import { useNavigate } from 'react-router-dom';

 const Home = ()=> {
    const navigate = useNavigate();
    function clickHandler(){
        // move to support page
        navigate("/support");
    }

    function backHandler(){
        navigate(-1);
    }


  return (
    <div>   
        <div>This is Home Page</div>
        <button onClick={clickHandler}>Move to Support Page</button>
        <button onClick={backHandler} >Go Back</button>

    </div>


  )
}

export default Home;
