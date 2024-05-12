//import resList from "../utils/mockdata";
import Rescards, { withOfferLabel } from "./ResCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState([]);
  const [filteredResturants, setfilteredRestuarants] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  const CardwithOfferlabel = withOfferLabel(Rescards);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5171428&lng=78.315742&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you are offline! Please check your internet connection!
      </h1>
    );

  if (listOfRestuarants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 rounded-md m-4 bg-green-300"
          onClick={() => {
            const filterbutton = listOfRestuarants.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setfilteredRestuarants(filterbutton);
          }}
        >
          Top Rated Restuarants
        </button>

        <div>
          <input
            className=" w-72 h-10 border border-solid border-black"
            type="text"
            placeholder="Search for restuarant"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>

          <button
            className="px-4 py-2 rounded-md m-4 bg-green-300"
            onClick={() => {
              const filteredlistofres = listOfRestuarants.filter((restuarant) =>
                restuarant?.info?.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setfilteredRestuarants(filteredlistofres);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap">
          {filteredResturants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restuarants/" + restaurant.info.id}
            >
              {<Rescards resData={restaurant} />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
