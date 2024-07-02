'use client'
import React, { useState } from 'react'
import ExploreNavbar from './ExploreNavbar';


const Explore = () => {
    const [data, setData] = useState([]);
    fetch('https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a')
        .then(response => response.json())
        .then(e => setData(e))
        .catch(error => console.error('Error:', error));
    return (
        <div className='w-full  '>
           <ExploreNavbar/>
            <div className='mx-10'>
            {data.length > 0 && data.map((i) => (
                <div className='flex flex-col'>
                    <span className='capitalize font-bold mt-3'>{i.item}</span>
                    <div className='flex text-sm justify-between'>
                        <span><span className='text-gray-500 font-light'>MRP:</span> {i.price}</span>
                        {i.shipping_method && (
                            <span className='text-gray-400'>{i.shipping_method}</span>
                        )}
                    </div>
                    <hr/>
                </div>
                
            ))}
            </div>
        </div>
    )
}

export default Explore