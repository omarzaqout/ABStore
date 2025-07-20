const SkeletonCard = () => {
    return (
        <div
            className="max-[768px]:w-full max-[992px]:w-[230px] min-[992px]:w-[300px] h-[250px]
        bg-gray-300 rounded-lg shadow-md animate-pulse  relative overflow-hidden"
        >
            <div className="absolute w-full bottom-0 mx-[5px] px-[15px] pb-[20px]">
                <div className="h-5 bg-gray-400 rounded w-3/4 mb-[5px]"></div>
                <div className="h-4 bg-gray-400 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default SkeletonCard
