import React from 'react'
import { categories } from '../../data/data'
import { Link } from 'react-router-dom';

interface FilterProps {
    currentCategory?: string;
    categoryCount?: Record<string, number>;
}

const Filter = ({ currentCategory, categoryCount }: FilterProps) => {
    return (
        <div className='flex flex-col gap-y-2.5 max-[992px]:max-w-[728px] max-w-[940px] text-center mb-[65px] '>
            <h1 className='text-[38px] font-[400] leading-11 text-[#666666] font-sans'>Products</h1>
            <div className='flex justify-center items-center flex-wrap gap-3'>
                {categories.map((category) => {
                    const isActive = currentCategory === category.name;
                    const count = categoryCount ? categoryCount[category.name] : 0;
                    return (
                        <Link
                            key={category.id}
                            to={`/categories/${category.name}`}
                            className={`px-3 py-1 rounded transition-all duration-200 ${isActive ? 'text-black border-b-2 border-black font-bold' : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {category.name.toUpperCase()}
                            <span>
                                {count > 0 ? <span>({count})</span> : ""}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter
