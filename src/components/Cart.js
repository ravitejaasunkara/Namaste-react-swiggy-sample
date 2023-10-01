import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantCard from './RestaurentCard';
import store from '../utils/store';
import { clearCart } from '../utils/cartSlice';

export default function Cart() {
    const items = useSelector((store) => store.cart.items);
    console.log(items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='p-2 m-2'>
            <h1>this is cart</h1>
            <button className='bg-green-200 rounded p-2 m-2 font-bold'
                onClick={handleClearCart}
            >Clear cart</button>
            {
                items.map((item) => {
                    return <RestaurantCard cloudinaryImageId={item?.imageId} name={item?.name} costForTwo={item?.price} avgRating={item?.ratings?.aggregatedRating?.rating} />
                })
            }
        </div>
    )
}
