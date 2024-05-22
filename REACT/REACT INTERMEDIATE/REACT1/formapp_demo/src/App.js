import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event){
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState( {firstName:"", lastName:"", email:"", comments:""
    , isVisible:true, mode:"", favCar:"" });


  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }

    });
  }

  function submitHandler(event){
    event.preventDefault();
    // print
    console.log("Finally printing the entire form data...")
    console.log(formData)
  }



  return (
    <div className="App">
        <form onSubmit={submitHandler} >

          <input 
          type="text" 
          placeholder='First Name'
            onChange={changeHandler}
            name="firstName"
            value={formData.firstNameName}
          />

          <br/>
          <br/>

          <input 
          type="text" 
          placeholder='Last Name'
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />

          
          <br/>
          <br/>

          <input 
          type="text" 
          placeholder='Email'
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />

          <br/>
          <br/>

          <textarea
            onChange={changeHandler}
            placeholder="Comments"
            name="comments"
            value={formData.comments}/>

            <br/>
            <br/>

            <input
              type='checkbox'
              onChange={changeHandler}
              name='isVisible'
              id='isVisible'
              checked={formData.isVisible} 
            />

            <label htmlFor='isVisible' >Am I visible?</label>

            <br/>
            <br/>

            <fieldset>
              <legend>Mode:</legend>
              <input
              type='radio'
              onChange={changeHandler}
              name ="mode"
              value="Online-Mode"
              id="Online-Mode"
              checked={formData.mode === "Online-Mode"}

              />

              <label htmlFor='Online-mode' > Online Mode  </label>

              <input
                type='radio'
                onChange={changeHandler}
                name ="mode"
                value="Offline-Mode"
                id="Offline-Mode"
                checked={formData.mode === "Offline-Mode"}

              />

              <label htmlFor='Offline-mode' > Offline Mode  </label>
            </fieldset>

            <br/>
            

            <label htmlFor='favCar' >Tell me your favourite Car  </label>
            <br/>


            <select
              onChange={changeHandler}
              name="favCar"
              id='favCar'
              value={formData.favCar}  
              >
              <option value="scarpio" >Scarpio</option>
              <option value="Fartuner" >Fartuner</option>
              <option value="Tharr" >Tharr</option>
              <option value="Legender" >Legender</option>
              <option value="Defender" >Defender</option>
              <option value="Tata" >Tataa</option>


            </select>
            <br/>
            <br/>

            <button  >Submit</button>



        </form>
    </div>
  );
}

export default App;
