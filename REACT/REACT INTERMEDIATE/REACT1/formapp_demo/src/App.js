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
    , isVisible:true, mode:""});
  console.log(formData);


  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }

    });
  }



  return (
    <div className="App">
        <form>

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
              value="Online Mode"
              id="Online-Mode"
              checked={formData.mode === "Online-Mode"}

              />

              <label htmlFor='Online-mode' > Online Mode  </label>

              <input
                type='radio'
                onChange={changeHandler}
                name ="mode"
                value="Offline Mode"
                id="Offline-Mode"
                checked={formData.mode === "Offline-Mode"}

              />

              <label htmlFor='Offline-mode' > Offline Mode  </label>
            </fieldset>




        </form>
    </div>
  );
}

export default App;
