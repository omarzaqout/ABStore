import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../app/store';
import { saveCart } from '../app/features/cart/cartSlice';
import { useState } from 'react';


const DetailProduct = () => {
    const { id } = useParams<{ id: string }>();
    const products = useSelector(({ product }: RootState) => product.products);
    const product = products.find((item) => String(item.id) === id);
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useAppDispatch();


    return (
        <div className='h-full w-full items-center flex flex-col text-[#666666]  py-[75px] '>
            <div className=' h-full flex flex-col w-[940px] '>
                <Link to={`/categories/${product?.category}`} className='flex text-[#999] mb-[40px]'>
                    <div className='mr-1'>« Back to</div>
                    <div>{product?.category}</div>
                </Link>
                <img src={product?.image} alt="image product"
                    className='mb-[30px]' />
                <div className='text-[30px] leading-[30px] mb-[5px]'>{product?.title}</div>
                <div className='text-[22px] font-[300] leading-[22px] mb-5'><span>$</span> {product?.price}</div>

                <div className='leading-[26px]' style={{ fontFamily: 'Arial, sans-serif' }}>
                    <p className='mb-2.5'>{product?.description}</p>
                </div>

                <label htmlFor="Quantity" className='leading-[22px] mb-[5px] text-[14px] font-bold' style={{ fontFamily: 'Arial, sans-serif' }}>Quantity</label>
                <input type="number" name="Quantity" id="Quantity"
                    className='w-[150px] h-[38px] border rounded-[5px] border-[#ccc] border-solid focus:outline-none focus:ring-0
                     leading-[1.4] mb-5
                     focus:border-[#6128ff] px-3 py-2 appearance-none' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                <button type='submit' className='w-[130px] h-[40px] bg-[#333333] px-[15px] py-2.5
                 text-white rounded-[5px] leading-[1.4] flex justify-center items-center uppercase
                  hover:cursor-pointer hover:bg-[#41b41c] transition-all duration-200 ease-in-out'
                    onClick={() => {
                        if (product && quantity > 0) {
                            const productWithQuantity = { ...product, quantity, id: String(product.id) };
                            dispatch(saveCart({ cartItems: [productWithQuantity], userId: 'user12345', mode: 'increment' }));
                        }
                    }}>
                    Add to cart
                </button>

            </div>
        </div >
    )
}

export default DetailProduct
