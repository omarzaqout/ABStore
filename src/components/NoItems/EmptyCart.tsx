import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='h-[70px] w-full items-center justify-center flex flex-col bg-[#C1DB9B]  rounded-[4px]  '>
            <Link to="/" className='flex items-center justify-center h-[42px]  text-[#3e5300]   px-4'>
                <span className=' text-sm'>Your shopping cart is empty. Click here to return to the store.</span>
            </Link>
        </div>
    )
}

export default EmptyCart
