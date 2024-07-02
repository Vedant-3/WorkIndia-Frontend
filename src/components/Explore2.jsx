'use client'
import React, { useState } from 'react'
import ExploreNavbar from './ExploreNavbar';
import Image from 'next/image';


const Explore2 = () => {
    const [data, setData] = useState([]);
    fetch('https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a')
        .then(response => response.json())
        .then(e => setData(e))
        .catch(error => console.error('Error:', error));
    return (
        <div className='w-full  '>
            <ExploreNavbar/>
            <div className='mx-10 grid grid-cols-3'>
            {data.length > 0 && data.map((i) => (
                <div className='mt-5'>
                    <Image src={i.image_url} alt='alt' width={50} height={50}/>
                    <span className='capitalize font-bold mt-3 text-sm'>{i.item}</span>
                    <div className='flex text-sm justify-between'>
                        <span><span className='text-gray-500 font-light text-sm'>MRP:</span> {i.price}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Explore2