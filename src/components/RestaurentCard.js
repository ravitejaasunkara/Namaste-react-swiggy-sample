import { IMG_CDN_URL } from "../utils/config.js";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRating,
}) => {
    return (
        <div className="card rounded-lg shadow-xl shadow-cyan-500/50">
            <img
                src={
                    IMG_CDN_URL +
                    cloudinaryImageId
                }
            />
            <h2>{name}</h2>
            <h4>{cuisines?.slice(0,2)?.join(", ")}</h4>
            <h4>{areaName}</h4>
            <span>
                <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
                <h4 className="font-bold">{lastMileTravelString}</h4>
                <h4>{costForTwo}</h4>
            </span>
        </div>
    );
};
export default RestaurantCard;