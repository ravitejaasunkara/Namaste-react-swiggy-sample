import { useState,useEffect } from "react";
const useRest = (id) => {
    const [res, setRes] = useState({});
    useEffect(() => {
        getRestaurentData();
    }, [])
    const restaurentUrl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931842&lng=77.60850270000002&restaurantId=';

    async function getRestaurentData() {
        const data = await fetch(`${restaurentUrl}${id}`);
        const json = await data.json();
        setRes(json);
    }
    return res?.data?.cards[0].card?.card?.info;
}
export default useRest;