import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../utils/config';
import Shimmer from './Shimmer';
import useRest from '../utils/useRest';
import useOnline from '../utils/useOnline';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
export default function RestaurentMenu() {

    const params = useParams();
    const data = useRest(params.id);
    const status = useOnline();
    const { cloudinaryImageId, name, city, costForTwo, avgRating, cuisines } = { ...data };
    const dispatch = useDispatch();
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        getRestaurentData();
    }, [])
    const restaurentUrl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931842&lng=77.60850270000002&restaurantId=';

    async function getRestaurentData() {
        const data = await fetch(`${restaurentUrl}${params.id}`);
        const json = await data.json();
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    if (!status) {
        return <h1>You are offline, please check your internet connection.!!</h1>
    }

    const handleAddItem = (e) => {
        dispatch(addItem(e))
    }

    return (
        <>
            <div className='flex gap-4'>
                <div className='w-1/3 restaurent-detail-card rounded shadow-inner shadow-xl rounded-xl shadow-red-300 bg-green-100'>
                    <img src={IMG_CDN_URL + cloudinaryImageId} alt="" className='restaurent-detail-image rounded-2xl' />
                    <h1>Dishname : {name}</h1>
                    <h2>City : {city}</h2>
                    <h1>Price : {costForTwo}</h1>
                    <h1>Rating : {avgRating}</h1>
                    <h1>Cuisines : {cuisines?.join(", ")}</h1>
                </div>
                <div className='border border-red-800'>
                    <h1 className='font-bold text-5xl'>Menu</h1>
                    <ul>
                        {menu.map(item => {
                            return <ul className='flex list-disc'>
                                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                                <button className='p-2 m-1 bg-red-100 rounded-lg font-bold'
                                    onClick={() => handleAddItem(item?.card?.info)}
                                >Add Item</button>
                            </ul>
                        })}

                    </ul>
                </div>
            </div>
        </>
    )
}
