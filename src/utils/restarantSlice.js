import { createSlice } from "@reduxjs/toolkit";


const restaurantSlice = createSlice({
    name:"restaurant",
    initialState:{
        resList: null,
        filteredRestaurant: null
    },
    reducers:{
        addResList:(state,action) => {
            state.resList  = action.payload
        },
        addFilteredRestaurant:(state,action) => {
            state.filteredRestaurant = action.payload
        }
    }
})

export const{addResList,addFilteredRestaurant} = restaurantSlice.actions
export const restaurantSliceReducer = restaurantSlice.reducer