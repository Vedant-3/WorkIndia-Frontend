import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex justify-evenly pt-3 pb-3 fixed inset-x-0 bottom-0 bg-white'>
        <Link className='w-10 h-10 bg-green-400 rounded-full' href='/Explore1'></Link>
        <Link className='w-10 h-10 bg-green-400 rounded-full' href='/Explore2'></Link>
        <Link className='w-10 h-10 bg-green-400 rounded-full' href='/AddItems'></Link>
        <Link className='w-10 h-10 bg-green-400 rounded-full' href='/Explore1'></Link>
        
        </div>
    </div>
  )
}

export default Footer