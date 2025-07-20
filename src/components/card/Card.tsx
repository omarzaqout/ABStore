import { useNavigate } from 'react-router-dom';
import { Product } from '../../data/types';




const Card = ({ id, title, image, price }: Product) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/products/${id}`);
    };
    return (

        <div
            onClick={handleClick}
            key={id}
            className=" max-[768px]:w-full max-[992px]:w-[230px]  min-[992px]:w-[300px] h-[250px]
             bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out
              bg-cover bg-center relative hover:opacity-[0.85]"
            style={{ backgroundImage: `url(${image})` }}

        >
            <div className="absolute w-full bottom-0 mx-[5px] px-[15px] pb-[20px] rounded-md text-white">
                <h2 className="text-xl leading-5  mb-[5px]">{title}</h2>
                <h2 className="text-lg text-[#DDDDDD]"><span className='mr-1'>$</span>{price}</h2>
            </div>
        </div >


    );
};

export default Card