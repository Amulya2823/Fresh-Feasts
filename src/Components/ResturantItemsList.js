import { useDispatch } from "react-redux";
import { RES_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";

const RestuarantItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handler = (item) => {
    dispatch(addItem(item));
    toast.success("Added to cart!");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex justify-between text-left border-b-2 p-6"
        >
          <div className="py-6 w-9/12 p-2">
            <div className="py-2 w-[500px] font-3xl">
              <span className="font-bold text-xl">{item.card.info.name}</span>
              <br></br>
              <span className="font-bold text-xl">
                Rs-
                {item.card.info.defaultPrice / 100
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <div>
              <p className="text-base font-normal">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 p-4 ">
            {item.card.info.imageId ? (
              <img
                src={RES_URL + item.card.info.imageId}
                className="rounded-lg h-32 w-44"
              ></img>
            ) : (
              ""
            )}
            <div>
              <button
                onClick={() => handler(item)}
                className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md translate-x-[50%]"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestuarantItemList;
