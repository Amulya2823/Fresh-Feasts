const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "../utils/cartSlice"

const ourStore = configureStore({
    reducer :{
       cart : cartReducer
    }
});

export default ourStore; 