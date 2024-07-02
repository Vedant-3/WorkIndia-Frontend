import React from 'react'

const ExploreNavbar = () => {
    return (
        <div className=' bg-gray-200 px-5 py-3'>
            <div className="flex justify-between mb-3">
                <span className='font-bold'>Explore</span>
                <span className='text-green-400'>Filter</span>
            </div>
            <input type='text' placeholder='Search' className='p-2 mb-4'></input>
        </div>
    )
}

export default ExploreNavbar