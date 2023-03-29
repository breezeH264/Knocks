import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { Product } from '../../types/types';

interface CartProduct extends Product {
  itemQuantity: number;
}

interface CartState {
  cartProducts: CartProduct[];
  cartQuantity: number;
  cartPrice: number;
}

const initialState = {
  cartProducts: localStorage.getItem('cartProducts')
    ? JSON.parse(localStorage.getItem('cartProducts')!)
    : [],
  cartQuantity: 0,
  cartPrice: 0,
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
        state.cartProducts[productIndex].itemQuantity += 1;
        toast.success(
          `Added "${action.payload.title}" to cart! (Currently ${state.cartProducts[productIndex].itemQuantity})`
        );
      } else {
        const tempProduct = { ...action.payload, itemQuantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`Added "${action.payload.title}" to cart!`);
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },

    decreaseQuantity(state, action) {
      const productIndex = state.cartProducts.findIndex(
        item => item.id === action.payload.id
      );
      if (state.cartProducts[productIndex].itemQuantity > 1) {
        state.cartProducts[productIndex].itemQuantity -= 1;
        toast.success(
          `Decreased "${action.payload.title}" from cart! (Currently ${state.cartProducts[productIndex].itemQuantity})`
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

    getTotals(state) {
      let { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuantity } = cartItem;
          const itemTotal = price * itemQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += itemQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartQuantity = quantity;
      state.cartPrice = total;
    },
  },
});

export const { addToCart, decreaseQuantity, clearCart, deleteItem, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
