import { useDispatch } from "react-redux";
import { RES_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestuarantItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex justify-between text-left border-b-2"
        >
          <div className="py-3 w-9/12 p-2">
            <div className="py-2 font-medium">
              <span>{item.card.info.name}</span>
              <br></br>
              <span>
                Rs-
                {item.card.info.defaultPrice / 100
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <div>
              <p className="font-thin">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4 ">
            {item.card.info.imageId ? (
              <img
                src={RES_URL + item.card.info.imageId}
                className="rounded-lg"
              ></img>
            ) : (
              ""
            )}
            <div>
              <button
                onClick={() => handler(item)}
                className="rounded-lg bg-slate-200 p-3 m-3 w-32 hover:shadow-xl"
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
