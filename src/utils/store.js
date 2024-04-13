import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { restaurantSliceReducer } from "./restarantSlice";


const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        restaurant: restaurantSliceReducer
    }
}

)

export default appStore