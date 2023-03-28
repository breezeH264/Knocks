import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { Product } from '../../types/types';

interface CartProduct extends Product {
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
        toast.success(
          `Added "${action.payload.title}" to cart! (Currently ${state.cartProducts[productIndex].cartTotalItems})`
        );
      } else {
        const tempProduct = { ...action.payload, cartTotalItems: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`Added "${action.payload.title}" to cart!`);
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
    decreaseQuantity(state, action) {
      const productIndex = state.cartProducts.findIndex(
        item => item.id === action.payload.id
      );
      if (state.cartProducts[productIndex].cartTotalItems > 1) {
        state.cartProducts[productIndex].cartTotalItems -= 1;
        toast.success(
          `Decreased "${action.payload.title}" from cart! (Currently ${state.cartProducts[productIndex].cartTotalItems})`
        );
      } else {
        state.cartProducts.splice(productIndex, 1);
        toast.success(`Removed "${action.payload.title}" from cart!`);
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
    deleteItem(state, action) {
      const productIndex = state.cartProducts.findIndex(
        item => item.id === action.payload.id
      );
      state.cartProducts.splice(productIndex, 1);
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
    clearCart(state) {
      state.cartProducts = [];
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
      toast.success('Cart emptied!');
    },
    subtotal(state, action) {},
  },
});

export const { addToCart, decreaseQuantity, clearCart, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
