//import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

//const initialState = {
//  cartData: []
//};

//export const updateCartSlice = createSlice({
 // name: 'cartData',
  //initialState,
  //reducers: {
    //upDateCartData: (state, action: PayloadAction) => {
       // console.log("state.cartData")
        //console.log(state.cartData)
        // state.balance +=  action.payload;
       // state.cartData = action.payload;

        
   // },
    //deleteCartItem: (state, action: PayloadAction) => {
     // console.log('action.payload');
     // console.log(action.payload)
     // console.log(state);
   // }
 // },
//})

// Action creators are generated for each case reducer function
//export const { upDateCartData, deleteCartItem } = updateCartSlice.actions;

//export default updateCartSlice.reducer;

//import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

//const initialState = {
 // cartData: []
//};

//export const updateCartSlice = createSlice({
 // name: 'cartData',
  //initialState,
  //reducers: {
    //upDateCartData: (state, action: PayloadAction) => {
        //console.log("state.cartData")
        //console.log(state.cartData)
        // state.balance +=  action.payload;
        //state.cartData = action.payload;

        
    //},
    //deleteCartItem: (state, action: PayloadAction) => {
      //console.log('action.payload');
    //  console.log(action.payload)
      //console.log(state);
   // }
 // },
//})

// Action creators are generated for each case reducer function
//export const { upDateCartData, deleteCartItem } = updateCartSlice.actions;

//export default updateCartSlice.reducer;//
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartObj {
  id: number;
  count: number;
}

interface CartState {
  cartData: CartObj[];
}

const initialState: CartState = {
  cartData: []
};

export const updateCartSlice = createSlice({
  name: 'cartDetails',   // <-- make sure this matches your store key
  initialState,
  reducers: {
    upDateCartData: (state, action: PayloadAction<CartObj[]>) => {
      state.cartData = action.payload;
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      console.log("delete item id:", action.payload);
    }
  },
})

export const { upDateCartData, deleteCartItem } = updateCartSlice.actions;

export default updateCartSlice.reducer;