import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantData from "../utils/useRestaurantData";
//import { MENU_API } from "../utils/constants";


const ResturantMenu = () => {
    
    const {resId} = useParams();

    const resMenu = useRestuarantData(resId);

    if (resMenu === null) return <Shimmer/>

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        deliveryTime,
      } = resMenu?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards)

    return ( 
        <div className="menu">
            <h1>Name of the restuarant</h1>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h3> Rating : {avgRating}</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key = {item.card.info.id}> {item.card.info.name} - {"Rs"}-{item.card.info.price/100 || 
                    item.card.info.defaultPrice /100}</li>
                ))}
            </ul>
        </div>
    )
}
export default ResturantMenu;

