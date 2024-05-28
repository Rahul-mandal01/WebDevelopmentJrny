import React from 'react'
import { useNavigate } from 'react-router-dom';

 const Support = ()=> {
    const navigate = useNavigate();
    function clickHandler(){
        // move to about page
        navigate("/about");
    }
  return (
    <div>
       <div>This is Support page</div>
        <button onClick={clickHandler}>Move to About Page</button>
    </div>

  )
}

export default Support;
