import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const[btnName , setbtnName] = useState("Login")

    return(
        <div className='flex justify-between bg-pink-200 shadow-md'>
            <div>
            <img src= {LOGO_URL} alt="App Logo" className="w-52 p-0.5"/>
            </div>
            <div className="flex items-center">  
                <ul className='flex justify-between'>
                    <li className="p-4 m-4">
                     <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="p-4 m-4" onClick={ () => {
                        btnName === "Login" ?
                        setbtnName("Logout") :
                        setbtnName("Login")
                    }}> {btnName} </button> 
                </ul>
            </div>
        </div>       
    );
}

export default Header