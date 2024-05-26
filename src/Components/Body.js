//import resList from "../utils/mockdata";
import Rescards, { withOfferLabel } from "./ResCards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Slider from "./Slider";
import { MAIN_API } from "../utils/constants";

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState([]);
  const [filteredResturants, setfilteredRestuarants] = useState([]);
  
  const [searchtext, setsearchtext] = useState("");

  const fetchData = async () => {
    const data = await fetch(MAIN_API);
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

  return (
    <div>
      <Slider />

      <div className="flex justify-center">
        <button
          className="px-4 py-4 rounded-md m-4 bg-orange-300 text-2xl font-bold"
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
            className=" w-[500px] h-[50px] border border-solid border-black rounded-lg m-2 p-2"
            type="text"
            data-testid = "searchInput"
            placeholder="Search for Restuarant"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>

          <button
            className="px-4 py-4 rounded-md m-4 bg-orange-300 font-bold text-2xl"
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

      <div className="max-w-[1400px] mx-auto p-4 ">
        <div className="font-bold text-4xl m-2 p-2">
          Top Rated Restuarants in Hyderabad
        </div>
        <div>
          <div className="flex flex-wrap justify-between gap-6 p-4">
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
    </div>
  );
};

export default Body;
