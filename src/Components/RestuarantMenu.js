import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantData from "../utils/useRestaurantData";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestuarantData(resId);
  const [ShowIndex, setShowIndex] = useState(null);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, deliveryTime } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="py-3 font-bold text-2xl">{name}</h1>
      <h2 className="font-bold p-3">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {categories.map((category, index) => (
        <RestuarantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          collapse={index === ShowIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default ResturantMenu;
