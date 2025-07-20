import React from 'react'
interface Category {
    id: number;
    name: string;
    path: string;
}
const LinkCat = ({ id, name, path }: Category) => {
    return (
        <div key={id} className=' mx-[15px]'>
            <a href={`/categories/${path}`} className='text-[#666] hover:text-[#000] text-lg'>{name}</a>
        </div>
    )
}

export default LinkCat
