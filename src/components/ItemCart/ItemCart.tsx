import React, { useCallback, useMemo } from 'react';
import { Minus, Plus } from '../../assets/Icons';
import { useState } from 'react';
import { deleteCartItem, saveCart } from '../../app/features/cart/cartSlice';
import { RootState, useAppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ItemCartProps {
    id: string;
}


const ItemCart = ({ id }: ItemCartProps) => {
    const dispatch = useAppDispatch();

    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const item = useMemo(() => cartItems.find((p) => p.id === id), [cartItems, id]);

    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const updateQuantityFirebase = useCallback(
        (newQuantity: number) => {
            if (item?.quantity === newQuantity) return;

            if (newQuantity < 1) return;
            if (!item?.id) return;

            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
            );

            dispatch(saveCart({ cartItems: updatedCartItems, userId: 'user12345', mode: 'replace' }));
        },
        [dispatch, item?.quantity]
    );

    const handleIncrement = () => {
        updateQuantityFirebase((item?.quantity ?? 0) + 1);
    };

    const handleDecrement = () => {
        if (item?.quantity === 1) {
            const confirmDelete = window.confirm('are you sure you want to delete this item?');
            if (confirmDelete) {
                dispatch(deleteCartItem({ product: item, userId: 'user12345' }));

            }
        } else {
            updateQuantityFirebase((item?.quantity ?? 1) - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const number = parseInt(value);

        if (!isNaN(number) && number > 0) {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
            const timeout = setTimeout(() => {
                updateQuantityFirebase(number);
            }, 800);
            setDebounceTimeout(timeout);
        }
    };

    return (
        <div className='flex h-[100px] mb-3 px-2 border-b border-[#ccc]'>
            <Link to={`/products/${item?.id}`} >
                <img
                    src={item?.image}
                    alt="image product"
                    className='w-[120px] h-[80px] rounded-[4px] border-[2px] border-solid border-[#ccc] mr-5'
                />
            </Link>
            <div className='flex flex-col w-full'>
                <div className='flex justify-between'>
                    <div className='text-[18px] font-bold'>{item?.title}</div>
                    <div className='flex'>
                        <button
                            className='size-8 flex flex-col items-center justify-center rounded-full bg-[#e4e4e4] hover:bg-[#d3d2d2]'
                            onClick={() => {
                                handleDecrement();
                            }}

                        >
                            <Minus />
                        </button>
                        <input
                            type='text'
                            className='w-10 h-8 bg-[#e4e4e4] text-center items-center justify-center flex rounded-[4px] border-[2px] border-solid border-[#ccc] mx-2'
                            value={item?.quantity}
                            onChange={handleInputChange}
                        />
                        <button
                            className='size-8 flex flex-col items-center justify-center rounded-full bg-[#e4e4e4] hover:bg-[#d3d2d2]'
                            onClick={handleIncrement}
                        >
                            <Plus />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between mt-1.5 pl-2'>
                    <p className='text-[16px] font-bold text-[#999] overflow-hidden w-[300px] h-[50px]'>
                        {item?.description}
                    </p>
                    <div className='flex flex-col'>
                        <p className='text-[16px] font-bold'>
                            Price : <span>{item?.price}</span>
                        </p>
                        <p className='text-[16px] font-bold text-nowrap'>
                            Total Price :{' '}
                            <span className='text-black'>
                                {(((item?.quantity || 1) * (item?.price ?? 0)).toFixed(2))}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
