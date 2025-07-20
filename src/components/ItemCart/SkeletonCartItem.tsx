const SkeletonCartItem = () => {
    return (
        <div className='flex h-[100px] mb-3 px-2 border-b border-[#ccc]'>
            <div className='w-[120px] h-[80px] bg-[#e0e0e0] rounded-[4px] border-[2px] border-solid border-[#ccc] mr-5 animate-pulse' />
            <div className='flex flex-col w-full'>
                <div className='flex justify-between'>
                    <div className='w-[150px] h-[18px] bg-[#e0e0e0] rounded-[4px] animate-pulse' />
                    <div className='flex'>
                        <button className='w-8 h-8 bg-[#e0e0e0] rounded-full animate-pulse' />
                        <div className='w-10 h-8 bg-[#e0e0e0] rounded-[4px] mx-2 animate-pulse' />
                        <button className='w-8 h-8 bg-[#e0e0e0] rounded-full animate-pulse' />
                    </div>
                </div>
                <div className='flex justify-between mt-1.5 pl-2'>
                    <p className='w-[300px] h-[50px] bg-[#e0e0e0] rounded-[4px] animate-pulse' />
                    <div className='flex flex-col'>
                        <p className='w-[120px] h-[18px] bg-[#e0e0e0] rounded-[4px] animate-pulse' />
                        <p className='w-[120px] h-[18px] bg-[#e0e0e0] rounded-[4px] animate-pulse mt-2' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCartItem;