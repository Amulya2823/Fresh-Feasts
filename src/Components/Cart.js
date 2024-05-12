import { useDispatch, useSelector } from "react-redux"
import RestuarantItemList from "./ResturantItemsList"
import { deleteItem } from "../utils/cartSlice"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const clearcart = () => {
        dispatch(deleteItem())
    }

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl text-center pt-5 m-3">Cart</h1>
            <button onClick={clearcart} className="p-4 m-4 text-black font-semibold rounded-lg  bg-orange-400">Clear Cart</button>
            { cartItems.length === 0 && <h1>Your cart is empty , Add Items to your cart</h1>}
            <div className="w-6/12 m-auto ">
                <RestuarantItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart