import { useState } from 'react';
import './ProductForm'
import './ProductForm.css'

function ProductForm(){


    // const[title, setTitle] = useState('');
    // const[date, setDate] = useState('');

    const[newTitle, setTitle] = useState('');
    const[newDate, setDate] = useState('');

    function titleChangeHandler(event){
        // console.log("Title change kroge bhai???");
        // console.log(event.target.value);
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log("Printing");
        // console.log(title);
        // console.log(date);
       }


    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate,
        };

        console.log(productData);
        
        setTitle('');
        setDate('');
    }



    return (<form onSubmit={submitHandler}>

        <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler} ></input>
            </div>

            <div className='new-product_control'>
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler}
                min='2023-01-01' max='2024-12-12'></input>
            </div>
        
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>

    </form>)
}

export default ProductForm;