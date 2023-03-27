import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

interface CartProduct {
  id: string;
  cartTotalItems: number;
}

interface CartState {
  cartProducts: CartProduct[];
  cartTotalItems: number;
  cartTotalPrice: number;
}

const initialState = {
  cartProducts: localStorage.getItem('cartProducts')
    ? JSON.parse(localStorage.getItem('cartProducts')!)
    : [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
} as CartState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const productIndex = state.cartProducts.findIndex(
        item => item.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartTotalItems += 1;
        console.log(state.cartProducts[productIndex].cartTotalItems);
        toast.success(
          `Added "${action.payload.title}" to cart! (Currently ${state.cartProducts[productIndex].cartTotalItems})`
        );
      } else {
        const tempProduct = { ...action.payload, cartTotalItems: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`Added "${action.payload.title}" to cart!`);
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
      // console.log(state.cartProducts);
      // console.log(state.cartTotalItems);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
