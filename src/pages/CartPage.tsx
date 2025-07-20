import { BaselineLock } from '../assets/Icons'
import ItemCart from '../components/ItemCart/ItemCart'
import { useSelector } from 'react-redux'
import { cartSelector, fetchCart } from '../app/features/cart/cartSlice'
import { useAppDispatch } from '../app/store'
import { useEffect } from 'react'
import SkeletonCartItem from '../components/ItemCart/SkeletonCartItem'

const CartPage = () => {

    const dispatch = useAppDispatch();
    const cart = useSelector(cartSelector);

    useEffect(() => {
        dispatch(fetchCart('user12345'));
    }, [dispatch]);

    const isLoading = cart.isLoading;


    return (
        <div className='h-full w-full items-center flex flex-col bg-[#151515]  py-[75px] '>
            <div className='flex w-[970px] h-[693px] bg-[#f9f9f9] rounded-[4px] border-[2px] border-solid border-amber-50'>
                <div className='flex flex-col flex-2/3 h-full p-6'>
                    {/* <EmptyCart /> */}
                    {cart.cartItems.length == 0 ? isLoading ?
                        [...Array(4)].map((_, index) => (
                            <SkeletonCartItem key={index} />
                        ))
                        :
                        cart.cartItems.map((item) => (
                            <ItemCart key={item.id} id={item.id} />
                        ))
                        : cart.cartItems.map((item) => (
                            <ItemCart key={item.id} id={item.id} />
                        ))
                    }

                </div>
                <div className='flex flex-col flex-1/3 h-full bg-[#e4e4e4] pt-6 px-[15px]'>
                    <h1 className='text-[24px] font-bold text-center text-[#4D4D4D] mb-5'>ABStore</h1>
                    <h3 className='text-[22px]  text-center text-[#676767]'>Order Summary</h3>
                    <div className='lex flex-col  border-b border-[#ccc] mb-5 py-[15px]'>
                        <div className='flex justify-between mb-5'>

                            <p className='text-[16px] font-bold text-[#999]'>Subtotal</p>
                            <p className='text-[16px] font-bold text-[#999]'>$199.99</p>
                        </div>
                        <p className='text-[#999] mb-2.5'>Shipping to ...</p>
                        <div className='flex justify-between mb-5'>
                            <p className='text-[16px] font-bold text-[#999] ml-2'>Shipping & Handling</p>
                            <p className='text-[16px] font-bold text-[#999]'>$0.00</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[16px] font-bold text-[#999]'>Order Total:</p>
                            <p className='text-[16px] font-bold text-[#999]'>${cart.totalPrice}</p>
                        </div>

                    </div>
                    <div className='w-full flex justify-center items-center '>
                        <button className=' h-[42px] bg-[linear-gradient(to_bottom,_#73b263_0%,_#458c33_100%)]
                         flex items-center justify-center text-white rounded-[4px] hover:bg-[#1a1a1a] py-2.5 px-4'>
                            <BaselineLock />
                            <span className='ml-1 text-sm text-nowrap'>Proceed to Checkout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
