import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantData from "../utils/useRestaurantData";
//import { MENU_API } from "../utils/constants";
import RestuarantCategory from "./RestuarantCategory";


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

    
   
    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(categories)
  

    return ( 
        <div className="text-center">
            <h1 className="py-3 font-bold text-2xl">{name}</h1>
            <h2 className="font-bold p-3">{cuisines.join(", ")} -  {costForTwoMessage}</h2>
            {categories.map( category => <RestuarantCategory data={category?.card?.card}/>)}
        </div>
    )
}
export default ResturantMenu;

