import { Link } from "react-router-dom";
import { RESTAURENT_LIST } from "../utils/config.js";
import RestaurantCard from './RestaurentCard';
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    //const restaurantList = RESTAURENT_LIST;
    const [searchText, setSearchText] = useState("");
    const [restuarents, setRestaurents] = useState([]);
    const [newRestaurents, setNewRestaurents] = useState([]);

    const searchHandler = (e) => {
        setSearchText(e.target.value);
        var filteredRestaurents = restuarents.filter((item) => {
            return item?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        })
        console.log(filteredRestaurents);
        setNewRestaurents(filteredRestaurents);
    }

    useEffect(() => {
        getRestaurents();
    }, []);

    async function getRestaurents() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        //console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
        setRestaurents(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        setNewRestaurents(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }
    return (restuarents.length === 0) ? <Shimmer /> : (
        <>
            <div className="searchContainer">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={searchHandler}
                />
            </div>
            <div className="restaurant-list">
                {newRestaurents.map((restaurant) => {
                    // console.log(restaurant.info)
                    return <div className="flex">
                        <Link to={`/restaurent/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            <RestaurantCard  {...restaurant?.info} {...restaurant?.info?.sla} />
                        </Link>
                    </div>
                })}
            </div>
        </>
    );
};

export default Body;