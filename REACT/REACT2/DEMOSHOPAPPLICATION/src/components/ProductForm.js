import './ProductForm'

function ProductForm(){

    return(<form>

        <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type='text'></input>
            </div>

            <div className='new-product_control'>
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2024-12-12'></input>
            </div>
        
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>

    </form>)
}

export default ProductForm;