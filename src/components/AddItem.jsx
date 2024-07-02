import React from 'react'
import AddNavbar from './AddNavbar'

const AddItem = () => {
    return (
        <div>
            <AddNavbar />
            <div className='flex flex-col gap-3 mx-10 mt-4'>
                <input type='text' placeholder='Item Name'></input>
                <input type='text' placeholder='Item Price'></input>
                <select>
                    <option value="null"><span className='text-gray-200'>Shipping Method</span></option>
                    <option value="null">Null</option>
                    <option value="Same Day delivery">Same day Delivery</option>
                </select>
                <button className='bg-green-500 rounded-lg text-white font-bold h-8 mt-10'  type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default AddItem