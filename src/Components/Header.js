import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="p-[2px] shadow-lg text-gray-500">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="w-[220px]">
          <img src={LOGO_URL} alt="App Logo" className="w-full" />
        </div>
        <div className="font-semibold text-2xl">
          <ul className="flex list-none gap-5 ml-auto ">
            <li className=" p-4 m-4 cursor-pointer  hover:text-[#fc8019]">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 m-4 cursor-pointer hover:text-[#fc8019] ">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-4 m-4 cursor-pointer hover:text-[#fc8019] ">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="p-4 m-4 cursor-pointer  hover:text-[#fc8019]">
              <Link to="/cart">
                <FaCartShopping className="inline" />
                <sup className="p-2 text-2xl" data-testid="cart">{cartItems.length}</sup>
              </Link>
            </li>
            <button
              className="p-4 m-4 cursor-pointer hover:text-[#fc8019] "
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {" "}
              {btnName}{" "}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
